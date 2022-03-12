import PageTitle from '../PageTitle/PageTitle'
import styles from '../Hero/Hero.module.scss';

const Favorite = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum
        </p>
      </div>
    );
  };

  export default Favorite;