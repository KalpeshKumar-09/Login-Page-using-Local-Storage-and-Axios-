import profile from "../assets/Profile.jpg";

const Home = ({ LoggedInUserData, changeUser }) => {
  const handleLogout = () => {
    // Handle user logout
    changeUser("");
    LoggedInUserData("");
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div className="flex w-full h-screen">
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center">
            <h2>Welcome to</h2>
            <h2>Unstop</h2>
          </div>
          <div className="bg-white shadow-lg p-6 text-center">
            <img
              src={profile}
              alt="Profile Image"
              className="w-40 h-40 rounded-full object-cover"
            />
            <h4>Michael Dam</h4>
            <p>example@gamil.com</p>
            <p>Female</p>
            <button
              onClick={handleLogout}
              className="bg-violet-400 p-4 rounded-full text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
