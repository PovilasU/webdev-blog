//1,if(2,3,4,5,6,

import React {useState,useEffect} from "react";
interface Joke{
	id:string;
	joke: string;
}

interface JokeResponse {
	results: Joke[];
	total_pages: number;
}

const App: React.FC=()=>{
	const [jokes,setJokes] = useState<Joke[]>([]);
	const [page,setPage] = useState<number>(1);
	const [totalPages,setTotalPages] = useState<number>(1);
	const [loading,setLoading] = useState<boolean>(true);
	
	useEffect(()=>{
	setLoading(true);
	fetch(`http://icanhazdadjoke.com/search?page=${page}`,{
		headers: {Accept: "application/json"},
	}).
	then((res)=>res.json()).
	then((data:JokeResponse)=>{
		setJokes(data.results);
		setTotalPages(data.total_pages);
		setLoading(false);
	}).
	catch((error)=>{
		console.log("error message: ", error);
		
	});
	},[page]);
	
	const nextPage = () =>{
		if(page <totalPages) setPage((prev)=>prev+1);
	};
	const prePage=() => {
	if(page>1) setPage((prev)=>prev-1);
	};

	return (
	<div>
	<h1>Dad jokes (page {page}) </h1>
	{loading ?(
		<p>Loading... </p>
	
	):(
	<ul>
	{jokes.map((joke)=>(
		<li key={joke.id}> {joke.joke} </li>
	
	))}
	</ul>
	)
	
	
	}
	
	<button onClick={prevPage} disabled={page ===1}>
	previous
	
	</button>
	
	<button onClick={nextPage} disabled={page ===totalPages}>
	Next
	
	</button>
	
	</div>
	)
	
}