//1
import {useState} from 'react';

export default function App(){
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick=[()=> setCount(count+1)}>
			 Clicks: {count}
			</button>
		</div>
	);
}

//2
import {useState} from "react";

export default function App() {
  const [count, setCount] = useState(0);
  
  return (
	<div>
		<button onClick={()=>setCount(count+1)}>Clicks: 1 </button>
	</div>
	
	)  
}

//3
import {useState} from "react";

export default function App() {
	const [cont,setCount] = useState(0);
	return (
		<><button onClick={()=>setCount(count+1)}> Click: {count} </button> </>
	)
	
}

//4 import 
import {useState} from 'react';

export default function App(){
	const [count, setCount] = useState(0);
	return (
	<div><button onClick={()=>setCount(count+1)}> Clicks: {count}</button> <div>
	)
}

//5
import {useState} from 'react'
export default function App(){
const [count,setCount] =useState(0);
return(
	<><button onClick={()=>setCount(count+1)}>Clicks:{count}</button> </>
	);	
}

