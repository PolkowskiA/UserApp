import { Development } from "@carbon/icons-react";
import styles from "./UserProfile.module.css";
interface UserProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday: string;
  about: string;
  avatar: string;
}

const UserProfile: React.FC = () => {
  const profile = JSON.parse(
    sessionStorage.getItem("userData") || "null"
  ) as UserProfileData | null;

  if (!profile) {
    return (
      <section className={styles["no-data"]}>
        <Development width={100} height={100} />
        <h1>No profile data found. Please fill the form first.</h1>
      </section>
    );
  }

  return (
    <div className={styles["user-profile-container"]}>
      <h2 className={styles["title"]}>User Profile</h2>
      <section className={styles["user-fields-container"]}>
        {profile.avatar && (
          <img
            src={profile.avatar}
            alt={`${profile.firstName} ${profile.lastName} avatar`}
            className={styles["avatar"]}
          />
        )}
        <div className={styles["user-text-fileds"]}>
          <p>
            <strong>First Name:</strong> {profile.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {profile.lastName}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>Birthday:</strong> {profile.birthday}
          </p>
          <p>
            <strong>About:</strong> {profile.about}
          </p>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
