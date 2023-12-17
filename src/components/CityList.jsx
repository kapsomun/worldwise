/* eslint-disable react/prop-types */
import styles from "./CityList.module.css";

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CityList({ cities , isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add a new city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
