import { combineReducers } from "redux";
import developers from "./developers/reducer";

export default combineReducers({
//   havingFun: havingFunReducer,(this was the test reducer)
  // we can add more "slice" subreducers here later on...

  developers,
});

// This is the test reducer for the react app on start
// function havingFunReducer(state = "yes", action) {
//   switch (action.type) {
//     case "SET_HAVING_FUN": {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }