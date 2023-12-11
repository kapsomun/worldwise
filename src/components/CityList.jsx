/* eslint-disable react/prop-types */
import styles from './CityList.module.css'
import City from './City'


function CityList({cities = []}) {

  return (
    <ul className={styles.countryList}>
      {
      cities .map(e => <li key={e.id}>{e.emoji}{e.cityName}</li>)}
    </ul>

  );
}

export default CityList;
