import Container from "@mui/material/Container";
import SignOut from "../auth/SignOut";
import { useUserAuth } from "../auth/UserAuthContent";

const Profile = () => {
  const { user } = useUserAuth();
  return (
    <>
      <Container>
        <h1>Profile page</h1>
        <span></span>
        <h2>User ID : {user.email}</h2>
        <h5>Last Signed in : {user.metadata.lastSignInTime}</h5>
        <img
          src={user.photoURL}
          alt="userPhoto"
          style={{ borderRadius: "70px", border: "12px solid #ececec" }}
        />
        <SignOut />
      </Container>
    </>
  );
};
export default Profile;
