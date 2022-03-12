import PageTitle from '../PageTitle/PageTitle'
import styles from '../Hero/Hero.module.scss'

const NotFound = () => {
    return (
      <div className={styles.hero}>
        <PageTitle>404 not found</PageTitle>
      </div>
    );
  };

  export default NotFound;