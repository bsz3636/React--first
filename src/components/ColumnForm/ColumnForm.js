import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addColumn} from '../../redux/store';

const Column = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const listId = props.listId

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId }));
    setTitle('');
    setIcon('');
  }

	return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <span className={styles.title}>Title:</span>
      <input className={styles.input} type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <span className={styles.title}>Icon:</span>
      <input className={styles.input} type="text" value={icon} onChange={e => setIcon(e.target.value)} />
      <Button>Add column</Button>
    </form>
	);
};

export default Column;