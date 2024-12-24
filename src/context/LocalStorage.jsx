export const fetchUser = async () => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: "emilys",
      password: "123456789",
      email: "abc123@gmail.com", // optional
      expiresInMins: 30, // optional
    }),
  });
  const data = await response.json();
  return data;
};

export const setLocalStorage = async () => {
  const users = await fetchUser();

  if (users) {
    localStorage.setItem("user", JSON.stringify(users));
  } else {
    console.log("Failed to set User");
  }
};

export const getLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("user"));

  return users;
};
