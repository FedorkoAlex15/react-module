import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Users from "./components/users/Users";
function App() {
  return (

      <Router>
          <div>
            <Link to={'/users'}>users page</Link>


              <Switch>
                   <Route path={'/users'} component={Users} />
              </Switch>

          </div>

      </Router>

  );
}

export default App;
