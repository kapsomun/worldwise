/* eslint-disable react/prop-types */
import styles from './CountryList.module.css'
import CountryItem from './CountryItem'


function CountryList({countries = []}) {

  return (
    <ul className={styles.countryList}>
      {
      countries.map(e => <CountryItem key={e.id} {...e}/>)}
    </ul>

  );
}

export default CountryList;
