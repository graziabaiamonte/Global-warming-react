import styles from './footer.module.css';
import mailUrl from '../../assets/mail.svg';
import githubUrl from '../../assets/github.svg';
import instagramUrl from '../../assets/instagram.svg';
import linkedinUrl from '../../assets/linkedin.svg';


function Footer() {
    return (
        <div className={styles.footer}>
            <p>&#169; 2 All Rights Reserved | Grazia Baiamonte </p>

            <div>
                <a href="https://www.instagram.com/_grazia_baiamonte_/" target="_blank" rel="noopener">
                    <img className={styles.imgSocial} src={instagramUrl} alt="instagram profile" ></img>
                </a>

                <a href="https://www.linkedin.com/in/grazia-baiamonte-035385295/" target="_blank" rel="noopener">
                    <img className={styles.imgSocial}  src={linkedinUrl} alt="linkedin profile" ></img>
                </a>

                <a href="https://github.com/graziabaiamonte" target="_blank" rel="noopener">
                    <img className={styles.imgSocial}  src={githubUrl} alt="github profile" ></img>

                </a>
                <a href="mailto:grazia.baiamonte3@gmail.com">
                    <img className={styles.imgSocial}  src={mailUrl} alt="mail" ></img>
                </a>
            </div>

        </div>
    )
}

export default Footer