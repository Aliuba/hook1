import React, {memo, useState, useCallback, useMemo} from "react"
import "./App.css"


const Test = memo(({title, onClick, arrSum}) => {
    console.log("test is working")
    return <div> <h1 title={title} onClick={() => onClick(Math.random())}> title Test {arrSum} </h1>
    </div>


});

export default function App() {

    const [counter, setCounter] = useState(0);
    const [arr, setArr] = useState([2, 56, 566, 55, 2, 9, 2, 5, 99, 5, 6, 1, 4, 7, 8, 9, 55, 6644, 78, 0, 12, 2]);
    console.log(arr)

    const onclickTest = useCallback((num) => console.log(num), [])
    const arrSum = useMemo(() => arr.reduce((acc, el) => (acc += el), 0), [arr])
    const Ascending = useMemo(() => arr.sort((a, b) => a - b), [])
    const Descending = useMemo(() => arr.sort((a, b) => b - a), [])
console.log(arr)
    return <div className='App'>
        {arr.map(value => value + ",")}
        <h1 onClick={() => setCounter(prev => prev + 1)}>Test counter {counter}</h1>
        <h2 onClick={() => setArr(prev => [...prev, Math.floor(Math.random() * 1000)])}>change arr</h2>
<button onClick={()=>setArr(prev=>Ascending)}>Ascending order</button>
    <button onClick={()=>setArr(Descending)}>Descending order
    </button>

        <Test title="test test" onClick={onclickTest} arrSum={arrSum} />

    </div>

}