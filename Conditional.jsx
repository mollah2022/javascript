function Conditional({ isAdmin, isLoggedIn }) {
  let userRole;

  if (!isLoggedIn) userRole = "Guest";
  else if (isLoggedIn && isAdmin) userRole = "Admin";
  else userRole = "isLoggedIn";

  return (
    <>
      <h1>he is a {userRole}</h1>
    </>
  );
}
export default Conditional;
