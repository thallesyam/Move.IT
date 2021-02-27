import styles from "../styles/components/CompletedChallenges.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

const CompletedChallenges = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallenges;
