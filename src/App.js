import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./users/Users";
function App() {
  return (
      <Router>
          <div>
              <div><Link to={'/users'}>Users</Link></div>
              <hr/>
          </div>

              <Route path={'/users'} component={Users}/>


      </Router>

  );
}

export default App;
