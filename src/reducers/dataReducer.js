import actionTypes from '../actionTypes'

const initialState = {
    userInfo: {}
}

const countryList = (data) => {
    var lookup = {};
    var items = data;
    var result = [];

    for (var item, i = 0; item = items[i++];) {
        var country = item.address.country;

        if (!(country in lookup)) {
            lookup[country] = 1;
            result.push(country);
        }
    }
    return result;
}

const cityList = (data) => {
    var lookup = {};
    var items = data;
    var result = [];

    for (var item, i = 0; item = items[i++];) {
        var city = item.address.city;

        if (!(city in lookup)) {
            lookup[city] = 1;
            result.push(city);
        }
    }
    return result;
}

const updateFilter = (filter = [], value) => {
    if (typeof (filter) == 'undefined') {
        filter = [];
    }
    let pos = filter.indexOf(value);
    if (pos < 0) {
        filter.push(value)
    } else {
        filter.splice(pos, 1)
    }
    return filter;
}

//filter the select records
const multiFilter = (data, filters) => {
    const filterKeys = Object.keys(filters);
    if (filterKeys.length == 0) {
        return data;
    }
    return data.filter((item) => {
        return filterKeys.some(key => { //.every for case need to match two filters, .some only need to match anyone
            //if(!filters[key].length){
            //    return true;
            //} 
            return !!~filters[key].indexOf(item.address[key]);
        })
    })
}

const dataReducer = (state = initialState, action) => {
    let { filters, data } = state;
    let filterResult = [];
    switch (action.type) {
        case actionTypes.FEATCH_USER_OK:
            return { ...state, userInfo: action.user };
        case actionTypes.FEATCH_DATA_OK:
            let countries1 = countryList(action.data)
            let cities1 = cityList(action.data)
            return { ...state, data: action.data, countries: countries1, cities: cities1, filterResult: action.data };
        case actionTypes.CLICK_COUNTRY:
            let countries = [];
            try {
                countries = filters.country;
            }
            catch (e) {
                console.log("no countries object yet");
            }
            countries = updateFilter(countries, action.value);
            console.log(countries);
            console.log(countries.length);
            console.log(filters);
            if (countries === undefined || countries.length == 0) {
                delete filters["country"];
            } else {
                filters = { ...filters, country: countries };
            }

            filterResult = multiFilter(data, filters);
            return { ...state, filters: filters, filterResult: filterResult };

        case actionTypes.CLICK_CITY:
            let cities = [];
            try {
                cities = filters.city;
            }
            catch (e) {
                console.log("no cities object yet");
            }
            cities = updateFilter(cities, action.value);
            if (cities === undefined || cities.length == 0) {
                delete filters["city"];
            } else {
                filters = { ...filters, city: cities };
            }
            filterResult = multiFilter(data, filters);
            return { ...state, filters: filters, filterResult: filterResult };
        case actionTypes.CLICK_IMAGE:
            return { ...state, showImage: action.value };
        default:
            return state;
    }
}

export default dataReducer;