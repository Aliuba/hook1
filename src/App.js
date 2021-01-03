import React, {memo, useState} from "react"
import "./App.css"
import {useDispatch, useSelector} from "react-redux"

const Test = memo(() => {
    console.log("test is working")
    const storeCounter= useSelector(({counter})=>counter)
    const dispatch=useDispatch();
    const  inc=()=>dispatch({type: "INC"})
    const  dec=()=>dispatch({type: "DEC"})
    const  res=()=>dispatch({type: "RES"})
    return <div>
        <h1>{storeCounter}</h1>
        <button onClick={inc}>Inc</button>
        <button onClick={dec}>Dec</button>
        <button onClick={res}>Res</button>
    </div>


});

export default function App() {
const storeCounter= useSelector(({counter})=>counter)

return     (
    <div className="App">
        {storeCounter}
        <Test  />
        < /div>);



}

