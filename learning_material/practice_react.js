//whoke App: 1,
// interfaces:1,2,3,4,5,6,7,8,9,10
// consts:1,2,3
//interface and const1

//useEffect: 1,2,3,
//prevpage nextPage: 1
//return div:1



import React, {useEffect,useState} from 'react';

interface Joke{
	id:string;
	joke:string;
}

interface JokesResponse {
	jokes:Joke[];
	total_pages:number;
}

const App:React.FC =()=>{
	const [page,setPage] =useState<number>(1);
	const [jokes,setJokes] = useState<Joke[]>([]);
	const [totalPages,setTotalPages] = useState<number>(1);
	const [loading,setLoading] = useState<boolean>(true);
	
	useEffect(()=>{
		setLoading(true);
		fetch(`https://icanhazdadjoke.com/search?page=${page}`,{
			headers: {Accept: "application/json"},
		}).
		then((res)=>res.json()).
		then((data:JokesResponse)=>{
			setJokes(data.results);
			setTotalPages(data.total_pages);
			setLoading(false);
		}).
		catch((error)=>{
			console.log("error while loading", error);
			setLoading(false);
		});
		
	},[page]);
	
	const prevPage =() =>{
		if(page>1) setPage((prev)=>prev-1);
	};
	const nextPage = ()=>{
		if(page<totalPages) setPage((pre)=>prev+1);
	};
	

return(
	<div>
		<h1> Dad Jokes (page: ) </h1>
		
		{loading? (
			<p>Loding...</p>
		):(
			<ul>
				{jokes.map((joke)=>(
					<li key={joke.id}>{joke}</li>
				))}
			</ul>
		)}
		
		<button onClick={prevPage} disabled={page===1}> PreviousPage </button>
		<button onClick={nextPage} disabled={page===total_pages}> NextPage </button>
	</div>
)
};

eport default App;
