import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/65786181?s=460&u=c9ced57feb0450942af94139d793206c09f78d72&v=4" alt="Urnau"/>
            <div>
                <strong>Urnauzão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}