import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`;
    console.log(changeableURL);
  }
  try {
    const { data } = await axios.get(changeableURL);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (e) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (e) {}
};

export const fetchCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    const modifiedData = countries.map((country) => ({
      name: country.name,
      slug: country.iso3,
    }));
    return modifiedData;
  } catch (e) {}
};
