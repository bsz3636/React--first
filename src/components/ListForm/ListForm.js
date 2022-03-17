import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { addList } from '../../redux/listsRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const ListForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( addList ({title,description}));
    setTitle('');
    setDescription('');
  }

  return(
    
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <div>
        <span>Title:</span>
        <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <span>Description:</span>
        <TextInput type='text' value={description} onChange={e => setDescription(e.target.value)}/>
      </div>
      <Button>Add List</Button>
    </form>
  )
}

export default ListForm;