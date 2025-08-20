import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <h1>This is DashBoard Page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
        deserunt.
      </p>

      <nav>
        {/* ✅ relative path use করতে হবে */}
        <Link to="profile">Profile</Link>
        <Link to="setting">Setting</Link>
      </nav>

      {/* এখানে child route render হবে */}
      <Outlet />
    </div>
  );
};

export default DashBoard;
