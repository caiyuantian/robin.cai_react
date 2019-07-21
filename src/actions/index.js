import actionTypes from '../actionTypes'

export function initialLoad() {
  return {
    type: actionTypes.INIT_LOAD_DATA_ASYNC
  }
}

export function onClickCountry(value) {
  return {
    type: actionTypes.CLICK_COUNTRY_ASYNC,
    value
  }
}

export function onClickCity(value) {
  return {
    type: actionTypes.CLICK_CITY_ASYNC,
    value
  }
}

export function onClickImage(value) {
  return {
    type: actionTypes.CLICK_IMAGE_ASYNC,
    value
  }
}