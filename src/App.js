import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./users/Users";
function App() {
  return (
      <Router>
          <div>
              <Link to={'/users'}>users page</Link>


              <Switch>
                  <Route path={'/users'} component={Users}/>
              </Switch>

          </div>

      </Router>

  );
}

export default App;
