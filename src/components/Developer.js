import React from "react";
import { connect } from "react-redux";

class Developer extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the developer component</h1>
        <h1>{this.props.dev.name}</h1>
        <h3>{this.props.dev.email}</h3>
      </div>
    );
  }
}

export default Developer;


// this is the way it was in the reader
// import React from "react";

// const Developer = props => {
//   return (
//     <div>
//       <h2>{props.dev.name}</h2>
//       <h3>{props.dev.email}</h3>
//     </div>
//   );
// };

// export default Developer;