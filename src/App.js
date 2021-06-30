import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>



              <div><Link to={'/users'}></Link>Users</div>
              <div><Link to={'/posts'}></Link>Posts</div>
              <div><Link to={'/comments'}></Link>Comments</div>


              <Route path={'/users'} render={() => {
                  return <div>It's users page</div>
              }}/>

              <Route path={'/posts'} >
                  <div>It's posts</div>
              </Route>





      </div>
      </Router>
  );
}

export default App;
