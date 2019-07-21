import React from 'react';

class CountryFilter extends React.Component {
    render() {
        let { countryList, onClickCountry, filters} = this.props;
        let selected = []
        try {
            selected = filters.country;
        }
        catch (e) {
            console.log("no countries object yet");
        }
        if (typeof (selected) == 'undefined') {
            selected = [];
        }

        let countries = null;
        if (!!countryList) {
            countries = countryList.map((country) => (
                <li key = {country} onClick={() => onClickCountry(country)}>
                    <input id={country} type="checkbox" name={country} checked={!!~selected.indexOf(country)}></input>
                    <lable htmlFor={country}>{country}</lable>
                </li>
            ));
        }
        return (
            <div>
                <h3>
                    COUNTRY
                </h3>
                <ul>
                    {countries}
                </ul>
            </div>
        );
    }
}
class CityFilter extends React.Component {
    render() {
        let { cityList, onClickCity, filters } = this.props;
        let selected = []
        try {
            selected = filters.city;
        }
        catch (e) {
            console.log("no cities object yet");
        }
        if (typeof (selected) == 'undefined') {
            selected = [];
        }
        let cities = null;
        if (!!cityList) {
            cities = cityList.map((city) => (
                <li key = {city} onClick={() => onClickCity(city)}>
                    <input id={city} type="checkbox" name={city} checked={!!~selected.indexOf(city)}></input>
                    <lable htmlFor={city}>{city}</lable>
                </li>
            ));
        }
        return (
            <div>
                <h3>
                    CITY
                </h3>
                <ul>
                    {cities}
                </ul>
            </div>
        );
    }
}

export { CountryFilter, CityFilter }