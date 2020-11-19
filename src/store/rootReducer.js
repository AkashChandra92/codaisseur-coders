// This is where we upload different reducers
// Unka namankaran bhi yahi hota hai

import { combineReducers } from "redux";
import developers from "./developers/reducer";
import posts from "./post/reducer"

export default combineReducers({
//   havingFun: havingFunReducer,(this was the test reducer)
  // we can add more "slice" subreducers here later on...

  // This is the name of the reducer.We can literally name it anything just change the import on the top
  developers,
  posts
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