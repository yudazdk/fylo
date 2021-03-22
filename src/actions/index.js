import * as types from "../constants/ActionTypes";
import getWeather from "../lib/request";

export function submitCity(text, city) {
  return function (dispatch) {
    dispatch(submitCityStarted(text));

    return getWeather(city)
      .then((data) => data.main.temp)
      .then(
        (data) => dispatch(submitCitySuccess(data)),
        (error) => dispatch(submitCityFailed(error))
      );
  };
}

export const submitCityStarted = (payload) => ({
  type: types.SUBMIT_CITY_START,
  payload
});
export const submitCitySuccess = (payload) => ({
  type: types.SUBMIT_CITY_SUCCESS,
  payload
});
export const submitCityFailed = (payload) => ({
  type: types.SUBMIT_CITY_FAILED,
  payload
});
