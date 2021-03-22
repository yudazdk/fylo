import {
  SUBMIT_CITY_START,
  SUBMIT_CITY_SUCCESS,
  SUBMIT_CITY_FAILED
} from "../constants/ActionTypes";
import cities from "../constants/cities";

const initialState = {
  cities,
  loading: false,
  index: 0,
  guesses: [],
  answers: []
};

export default function citiesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_CITY_START:
      console.log("SUBMIT_CITY_START", action);
      var num = parseFloat(payload);
      return {
        ...state,
        guesses: state.guesses.concat(num),
        loading: true
      };
    case SUBMIT_CITY_SUCCESS:
      console.log("SUBMIT_CITY_SUCCESS", action);
      return {
        ...state,
        answers: state.answers.concat(payload),
        index: state.index+1,
        loading: false
      };
    case SUBMIT_CITY_FAILED:
      console.log("SUBMIT_CITY_FAILED", action);
      return { ...state, loading: false };
    default:
      return state;
  }
}
