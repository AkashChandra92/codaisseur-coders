// This is how I did it but the reader suggested the below method:

// Method 1:

// import React from "react";
// import { connect } from "react-redux";

// class Developer extends React.Component {
//   render() {
//     return (
//       <div>
//        <h1> This is the Homepage babay!</h1>
//       </div>
//     );
//   }
// }

// export default Developer;


// Method 2:

import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Codaisseurs Coders Network!</h1>
      <h3>
        Here you can meet all our best developers and take a look at their posts
      </h3>
    </div>
  );
};

export default HomePage;