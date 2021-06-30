import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

function App() {
  return (
      <Router>
      <div>



              <div><Link to={"/users"}>Users</Link></div>
              <div><Link to={'/posts'}>Posts</Link></div>
              <div><Link to={'/comments'}>Comments</Link></div>

                <Switch>


                    <Route path={'/users'}>
                        <h1>Users</h1>
                        <Users/>
                    </Route>


                    <Route path={'/posts'}>
                        <h1>Posts</h1>
                        <Posts/>
                    </Route>






                </Switch>





      </div>
      </Router>
  );
}

export default App;
