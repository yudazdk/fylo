import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";

const mapStateToProps = (state) => {
  const { index, cities } = state.cities;
  const city = cities[index];

  return {
    ...state.cities,
    city
  }
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
