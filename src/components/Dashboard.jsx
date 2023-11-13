import { useEffect, useState } from 'react'

function Dashboard() {

	const [count,setCount] = useState(2)
	function increment(){
	  setCount((prev)=>prev+1)
	}


	function decrement(){
	  setCount((prev)=>prev-1)
	}

	return (
		<>
			<div className="wrapper">
			<h1>Welcome To My App</h1>
			<p>This is going to be the coolest app in the world!</p>
			<h1>Counter</h1>
      <h2>Count is : {count}</h2>
      <button onClick={increment} >+</button>
      <button  onClick={decrement}>-</button>
		</div>
		</>
	);
}

export default Dashboard
