"use client";

import { NextPage } from "next";
import Head from "next/head";
import NewsList from "./components/NewsList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>hacker news clone</title>
        <meta
          name="description"
          content="a modern and minimalistic clone of hacker news using next.js, typescript, and tailwind css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background-start-rgb text-foreground-rgb">
        <NewsList />
      </main>
    </div>
  );
};

export default Home;
