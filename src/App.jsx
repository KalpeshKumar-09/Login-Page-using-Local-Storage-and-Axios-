import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthContext";
import { fetchUser } from "./context/LocalStorage";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);
  const { userData, setUserData } = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setLoggedInUserData(userData.data);
      setUser("users");
    }
  }, []);

  const handleLogin = async (username, password, email) => {
    const userData = await fetchUser(username, password, email);
    setUserData(userData);
    setUser("users");
    setLoggedInUserData(userData);
    localStorage.setItem("loggedInUser", JSON.stringify({ data: userData }));
  };

  return (
    <main>
      {/* Render login screen if no user is logged in */}
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : (
        // Render home screen if user is logged in
        <Home changeUser={setUser} LoggedInUserData={setLoggedInUserData} />
      )}
    </main>
  );
}

export default App;
