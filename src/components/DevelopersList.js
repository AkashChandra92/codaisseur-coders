// For any doubts please visit https://github.com/Codaisseur/course-content-exercises/blob/master/coders-network/src/components/DevelopersList.jsx

// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from "./Developer";
import { developersFetched } from "../store/developers/actions";
import {fetchDevelopers} from "../store/developers/actions"

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    // In the noob method, we would do the fetching and sending action right here
    // In the pro mode,we do get the data through another function and within
    // that function, we will call whatever actions

    // Noob way:
    // api("/developers").then((data) => {



        // In both the below cases we say props.dispatch which means we are creating a two way highwaw
        // 1st lane of reduxState highway is getting the data as mapStateToProps
        // Second lane of reduxState highway is to put data through mapStateToProps
        // For the second lane to pass data, we say this.props.dispatch

        // First the function here calls the right action and gives it the fetched data
        // Now the action creator takes the data and goes to the reducer
        // We have to tip of the reducer earlier about what data might come
        // It is like a reservation at a restaurant


      // Tell the Redux store the data has been fetched:


      //   This is the old way of dispatch without using action creators
      //   this.props.dispatch({
      //     type: "developers/FETCHED",
      //     payload: data,
      //   });

      // this is the new way of dispatch with using action creators
    //   this.props.dispatch(developersFetched(data));


    //   console.log("this is the fetched data", data);
    // });

    // Pro way:

    // We do not fetch the data and then call an action like in the noob method
    // Instead, we have our fetching done as one of the actions. The function to do that is in 
    // actions.js

    this.props.dispatch(fetchDevelopers)


  }

  render() {
    if (!this.props.devs) {
      return <p>Loading...</p>;
    }
    console.log("This is the props", this.props.devs);
    console.log("These are the devs", this.props.devs.rows);
    return (
      <div>
        <h1>Codaisseur developers</h1>
        <p>We have {this.props.devs.count} developers!</p>
        {this.props.devs.rows.map((developer, index) => (
          <Developer dev={developer} key={index} />
        ))}
      </div>
    );
  }

  //   render() {
  //     const loading = !this.props.devs;

  //     console.log("this is the props", this.props.devs);
  //     // console.log("These are the devs", this.props.devs.rows);

  //     return (
  //       <div>
  //         <h1>Codaisseur developers</h1>
  //         {loading ? (
  //           <p>Loading...</p>
  //         ) : (
  //           <p>We have {this.props.devs.count} developers!</p>
  //         )}
  //         {/* {this.props.devs.rows.map((developer, index) => (
  //           <Developer dev={developer} key={index} />
  //         ))} */}
  //       </div>
  //     );
  //   }
}

// The wrapper component that connects to the Redux store
//  and passes down props derived from the store's state
//  to the inner component:

function mapStateToProps(reduxState) {
  // console.log("redux state?", reduxState);
  return {
    devs: reduxState.developers,
  };
}
// ...which is what we export as the default (only) export
export default connect(mapStateToProps)(DevelopersList);
