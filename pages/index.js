import Head from "next/head";

import requests from "../requests";

import MovieCategory from "../components/MovieCategory";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-[100%] bg-black">
        <MovieCategory fetchUrl={requests.fetchTrending} title="Trending" />
        <MovieCategory fetchUrl={requests.fetchTopRated} title="Top Rated" />
        <MovieCategory
          fetchUrl={requests.fetchNetflixOriginals}
          title="Netflix Originals"
        />
        <MovieCategory fetchUrl={requests.fetchActionMovies} title="Action" />
        <MovieCategory fetchUrl={requests.fetchComedyMovies} title="Comedy" />
        <MovieCategory
          fetchUrl={requests.fetchDocumentaries}
          title="Documentaries"
        />
        <MovieCategory fetchUrl={requests.fetchHorrorMovies} title="Horror" />

        <MovieCategory fetchUrl={requests.fetchRomanceMovies} title="Romance" />
      </main>
    </div>
  );
}
