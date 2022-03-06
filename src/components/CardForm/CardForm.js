import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from './../TextInput/TextInput';

const CardForm = props => {

  const dispatch = useDispatch();

  const columnId = props.columnId;

  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_CARD', payload: { title, columnId} });
   
    setTitle('');
  }

	return (
    <form className={styles.cardForm} onSubmit= {handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
	);
};

export default CardForm;