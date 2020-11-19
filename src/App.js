import React from "react";
import { Switch, Route } from "react-router-dom";
import DevelopersList from "./components/DevelopersList";
import HomePage from "./components/Homepage";
import Toolbar from "./components/Toolbar"
import PostPage from "./components/PostPage"
import "./App.css";

// The below style was before the Toolbar was added:

// Class Style

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <Switch>
//           <Route path="/developers" component={DevelopersList} />
//           <Route component={Homepage} />
//         </Switch>
//       </div>
//     );
//   }
// }

// Function Style - With Toolbar

function App() {
  return (
    <div className='App'>
      <Toolbar />
      <Switch>
        <Route path='/read/:id' component={PostPage} />
        <Route path='/developers' component={DevelopersList} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
