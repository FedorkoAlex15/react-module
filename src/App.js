import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import {Comments} from "./comps/comments/Comments";

function App() {
  return (
      <Router>
          <div>
              <div>
                  <div><Link to={'/users'}>Users page</Link></div>
                 <div><Link to={'/posts'}>Posts page </Link></div>
                  <div><Link to={'/comments'}>Comments page</Link></div>

                  <hr/>
              </div>


              <Switch>
                  <Route path={'/users'} component={Users}/>
                  <Route path={'/posts'} component={Posts} />
                  <Route path={'/comments'} component={Comments}/>
              </Switch>

          </div>

      </Router>

  );
}

export default App;
