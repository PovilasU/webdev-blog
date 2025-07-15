import React, { useEffect, useState } from "react";

interface Joke {
  id: string;
  joke: string;
}

interface JokeResponse {
  results: Joke[];
  total_pages: number;
}

const App: React.FC = () => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://icanhazdadjoke.com/search?page=${page}`, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data: JokeResponse) => {
        setJokes(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      });
  }, [page]);

  const nextPage = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Dad Jokes (Page {page})</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      )}
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <button onClick={nextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default App;
