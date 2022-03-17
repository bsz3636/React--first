import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite} from '../../redux/cardsReducer';
import { trashCard } from '../../redux/cardsReducer';


const Card = props => {

  const dispatch = useDispatch();

  const handleClick = () => {
  dispatch (toggleCardFavorite(props.id));
  }
  
  const handleTrash = () => {
    dispatch (trashCard(props.id));
  }
 
  return (
    <li className={styles.card}>{props.title}
      <div>
        <button onClick={handleClick} className={clsx('fa fa-star-o', styles.button, props.isFavorite && styles.isFavorite)} ></button>
        <button onClick={handleTrash} className={clsx('fa fa-trash',  styles.button, styles.trash)} ></button>
      </div>
    </li>
  );
};

export default Card;