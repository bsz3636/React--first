import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';


const Favorite = () => {

const cards = useSelector(state => getFavoriteCards(state));

  if(cards.length === 0)
    return (

      <h1 className={styles.noCards}>No cards...</h1>
    );

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite}/>)}
        </ul>
      </article>
    </div>
  );
};

  export default Favorite;