import React, { useState, useEffect } from "react";
import { fetchCountry } from "../../api/index";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core";
import styles from "./CountryPicker.module.css";

const CountryPicker = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesAPI = async () => {
      setCountries(await fetchCountry());
    };
    fetchCountriesAPI();
  }, [setCountries]);

  return (
    <FormControl variant="outlined" className={styles.formControl}>
    <InputLabel id="select-id">Select Country</InputLabel>
      <Select
        onChange={(event) => props.handleCountryChange(event.target.value)}
        label="Select Country"
      >
        <MenuItem value=""><em>Global</em></MenuItem>
        {countries.map((country) => (
          <MenuItem value={country.name} key={country.iso3}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CountryPicker;
