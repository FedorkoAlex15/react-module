import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import User from "./components/user/User";
import Users from "./components/users/Users";
import './components/user/User.css'
import Title from "./components/title/Title";



function App() {


  return (
    <div className={'wrapper'}>
      <Title/>
      <Users/>
    </div>
  );
}

export default App;
