import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
  return (
      <div>
    <Router>
        <Link to={'/users'}>
            Users page
        </Link>



        <Switch>
            <Route path={'/users'} component={Users}/>

        </Switch>




    </Router>




      </div>

  );
}

export default App;
