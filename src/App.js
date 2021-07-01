import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import './App.css'
import {findAllByDisplayValue} from "@testing-library/react";

function App() {


    // Function which is used in the buttons both in User, and Post components
    let switcherFn = (swtch, swtchset) => {
        if (swtch === 'hide'){
            swtchset('show')
        } else if (swtch === 'show'){
            swtchset('hide')
        }
    }



  return (
      <Router>
      <div>


          <div className={'flex'}>
              <div><Link to={'/'}>Homepage</Link></div>
              <div><Link to={"/users"}>Users</Link></div>
              <div><Link to={'/posts'}>Posts</Link></div>
              <div><Link to={'/comments'}>Comments</Link></div>
          </div>


                <Switch>


                    <Route exact path={'/'} render={() => {
                        return <h1>Homepage</h1>
                    }}/>

                    <Route path={'/users'}>
                        <h1>Users</h1>
                        <Users switcherFn={switcherFn}/>
                    </Route>


                    <Route path={'/posts'}>
                        <h1>Posts</h1>
                        <Posts switcherFn={switcherFn}/>
                    </Route>

                    <Route path={'/comments'} >
                        <h1>Comments</h1>
                       <Comments/>
                    </Route>





                </Switch>





      </div>
      </Router>
  );
}

export default App;
