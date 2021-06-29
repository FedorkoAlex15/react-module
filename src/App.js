import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Users from "./comps/users/Users";
import Posts from "./comps/posts/Posts";
import Comments from "./comps/comments/Comments";
import {useReducer, useState} from "react";


function reducer(state, action){
    switch (action.type){
        case 'INC_A':
            state.a = state.a +  action.payload
            return {... state}
    }

    return state
}



function App() {




    let  [state, dispatch] = useReducer(reducer, {a: 0, b: 0})
    console.log(state)


    return (

    <div>

        <button onClick={() => dispatch({type: 'INC_A', payload: 1})}>click me A {state.a}</button>

        <button onClick={() => dispatch({type: 'Inc_B', payload: 2})}>click me B {state.b} </button>


    </div>







      // <Router>
      //     <div>
      //
      //
      //         <div> <Link to={"/"}> Homepage</Link> </div>
      //        <div><Link to="/users">users page</Link></div>
      //         <div><Link to="/posts">posts page</Link></div>
      //         <div><Link to="/comments"> comments</Link></div>
      //
      //
      //         <Route path={"/"}  exact={true} render={() => {return <div>home</div>}}/>
      //
      //         <Route path={'/users'} render={(props)=> {
      //            console.log(props)
      //             return <Users {...props}/>
      //         }}/>
      //
      //
      //         <Route path={'/posts'} component={Posts} />
      //
      //         <Switch>
      //
      //             <Route path={'/comments'}>
      //                 <Comments/>
      //             </Route>
      //
      //
      //             <Route path={'/comments'}>
      //                 <Comments/>
      //             </Route>
      //
      //         </Switch>
      //
      //     </div>
      //
      // </Router>

  );
}

export default App;
