import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { CountryFilter, CityFilter } from './leftShow'
import { ImageList } from './imageList'
import { onClickCity, onClickCountry, onClickImage } from '../actions'

class Left extends React.Component {
    render() {
        let { countries, cities, filters, filterResult, onClickCountry, onClickCity, onClickImage } = this.props;
        return (
            <div id="left">
                <div id="filter">
                    <CountryFilter countryList={countries} onClickCountry={onClickCountry} filters={filters} />
                    <CityFilter cityList={cities} onClickCity={onClickCity} filters={filters} />
                </div >
                <div id="filterResult">
                    <ImageList filterResult={filterResult} onClickImage={onClickImage} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { data, countries, cities, filters, filterResult } = state.dataReducer
    return {
        data: data, countries: countries,
        cities: cities, filters: filters, filterResult: filterResult
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickCountry: bindActionCreators(onClickCountry, dispatch),
        onClickCity: bindActionCreators(onClickCity, dispatch),
        onClickImage: bindActionCreators(onClickImage, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Left)