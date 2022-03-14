import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import {upDateSearchstring} from '../../redux/store';
import { useSelector } from 'react-redux';


const SearchForm = () => {

  const [searchString, setSearchString] = useState('');

  const dispatch = useDispatch();

  const placeholderStr = useSelector(state => state.searchString.searchString);
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(upDateSearchstring ({searchString}))
    setSearchString('');
  }
  
    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder={placeholderStr} value={searchString} onChange={e => setSearchString(e.target.value)} />
            <Button>
              <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;