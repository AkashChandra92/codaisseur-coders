// This is where we define the value of our reduxState. As we can have multiple states,
// we need to define multiple reducers as well. This example is for just one reducer.

const initialState = null;

// The reducer are like bouncers at a club waiting for payloads from action
// Once the right case of action comes, the reducer confirms the case and grabs the payload
// Then the value of the reduxState changes


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "developers/FETCHED": {
      // => Ask yourself: what is action.payload?
      return action.payload;
    }
    default: {
      return state;
    }
  }
}