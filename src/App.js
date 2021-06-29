import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import Comments from "./comps/comments/Comments";

function App() {
  return (

      <Router>
          <div>


              <div> <Link to={"/"}> Homepage</Link> </div>
             <div><Link to="/users">users page</Link></div>
              <div><Link to="/posts">posts page</Link></div>
              <div><Link to="/comments"> comments</Link></div>


              <Route path={"/"}  exact={true} render={() => {return <div>home</div>}}/>

              <Route path={'/users'} render={(props)=> {
                 console.log(props)
                  return <Users {...props}/>
              }}/>


              <Route path={'/posts'} component={Posts} />

              <Switch>

                  <Route path={'/comments'}>
                      <Comments/>
                  </Route>


                  <Route path={'/comments'}>
                      <Comments/>
                  </Route>

              </Switch>

          </div>

      </Router>

  );
}

export default App;
