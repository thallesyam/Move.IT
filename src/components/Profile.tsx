import styles from "../styles/components/Profile.module.css";

function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/thallesyam.png" alt="Thalles Yam" />
      <div>
        <strong>Thalles Ian</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
