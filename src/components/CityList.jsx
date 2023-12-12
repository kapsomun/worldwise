/* eslint-disable react/prop-types */
import styles from './CityList.module.css'
import City from './City'


function CityList({cities = []}) {

  return (
    <ul className={styles.cityList}>
      {
      cities .map(e => <City key={e.id} currentCity={e}/>)}
    </ul>

  );
}

export default CityList;
