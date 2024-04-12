import Container from "@mui/material/Container";
import SignOut from "../auth/SignOut";
import { useUserAuth } from "../auth/UserAuthContent";

const Profile = () => {
  const { user } = useUserAuth();
  console.log(user)
  return (
    <>
      <Container>
        <h1>Profile page</h1>
        <h2>{user.email}</h2>
        <img src={user.photoURL} alt="userPhoto" />
        <SignOut />

      </Container>
    </>
  );
};
export default Profile;
