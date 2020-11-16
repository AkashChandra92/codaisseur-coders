// src/components/DevelopersList.js
import React from "react";
import { connect } from "react-redux";
import api from "../api";
import Developer from "./Developer";

// The "unconnected" inner component:
class DevelopersList extends React.Component {
  componentDidMount() {
    // Do the data fetch...
    api("/developers").then((data) => {
      // Tell the Redux store the data has been fetched
      this.props.dispatch({
        type: "developers/FETCHED",
        payload: data,
      });
      console.log("this is the fetched data", data);
    });
  }

    render() {
      if (!this.props.devs) {
        return <p>Loading...</p>;
      }
      console.log("This is the props",this.props.devs);
      console.log("These are the devs", this.props.devs.rows)
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
