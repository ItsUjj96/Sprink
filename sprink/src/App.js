import React, {useState,useEffect} from 'react';
import Loader from './components/Loader'
import './App.css';
import WelcomePage from './components/WelcomePage';
import ItemList from './components/ItemList';

export default function App() {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },0)
  },[])

  
  return (
    <div>
      {
        loading ?
        <div className="loader">
          <Loader/>
        </div>
        :
        <div className="btn-msg">
          
          <WelcomePage/>
          {/* <Details/> */}
          <ItemList className="menuList"/>
        </div>
      }
    </div>
  );
}