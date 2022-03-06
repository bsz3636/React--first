import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';

const Column = props => {

  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_COLUMN', payload: { title, icon } });
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