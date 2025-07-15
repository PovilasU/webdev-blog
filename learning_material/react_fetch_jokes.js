import React, { useEffect, useState } from "react";

interface Joke {
  id: string;
  joke: string;
}

interface JokeResponse {
  current_page: number;
  limit: number;
  next_page: number | null;
  previous_page: number | null;
  results: Joke[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: number;
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://icanhazdadjoke.com/search?page=${page}`, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json() as Promise<JokeResponse>;
      })
      .then((data) => {
        setJokes(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, [page]);

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div>
      <h1>
        Dad Jokes (Page {page} of {totalPages})
      </h1>
      {loading && <p>Loading jokes...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {jokes.length === 0 ? (
            <p>No jokes found.</p>
          ) : (
            jokes.map((joke) => <li key={joke.id}>{joke.joke}</li>)
          )}
        </ul>
      )}
      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <button onClick={handleNext} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
}

export default App;
