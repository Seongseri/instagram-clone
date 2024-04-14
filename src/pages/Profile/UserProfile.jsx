import MyPosting from "../../components/Profile/Header/MyPosting";
import ProfileHeader from "../../components/Profile/Header/ProfileHeader";
import LeftBar from "../Main/LeftBar/LeftBar";

const UserProfile = () => {
  return (
    <>
      <LeftBar />
      <ProfileHeader />
      <MyPosting />
    </>
  );
};

export default UserProfile;
