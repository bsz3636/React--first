import PageTitle from '../PageTitle/PageTitle'
import styles from '../Hero/Hero.module.scss'

const About = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum
        </p>
      </div>
    );
  };

  export default About;