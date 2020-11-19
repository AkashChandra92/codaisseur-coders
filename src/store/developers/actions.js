// Here we wait for componentDidMounts to give the actions below a call
// When an action receives a call, it goes to speak to the reducer and give it the payload
// The type is like an id for the club and the club bouncer is the reducer

import api from "../../api";

export function fetchDevelopers(dispatch, getState) {
  api("/developers").then((data) => {
    // note: just `dispatch` here now
    dispatch(developersFetched(data));
  });
}

export function developersFetched(data) {
  // This function was called in the developerList component in componentDidMount in the noob method
  return {
    type: "developers/FETCHED",
    payload: data,
  };
}
