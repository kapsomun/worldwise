/* eslint-disable react/prop-types */
import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((city) => city.country).includes(city.country)) {
      return [
        ...arr,
        {
          country: city.country,
          emoji: city.emoji,
          date: city.date,
          id: city.id,
        },
      ];
    } else return arr;
  }, []);

  if (!countries.length)
    return (
      <Message message="Add a new Country by clicking on a Country on the map" />
    );

  return (
    <ul className={styles.CountryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
