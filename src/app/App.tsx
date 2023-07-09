import React, {useEffect} from 'react';
import logo from '../logo.svg';
import './App.css';
import {storeApi} from "../api/store-api";
import {useAppDispatch} from "./store";
import {getCards} from "../store/card-reducer";
import CardList from "../features/CardList";

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=> {

    // storeApi.getData().then(res=> console.log(res.data))
    dispatch(getCards())
      },[])
  return (
    <CardList/>
  );
}

export default App;
