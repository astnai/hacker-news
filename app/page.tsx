"use client";

import type { NextPage } from "next";
import Head from "next/head";
import NewsList from "./components/NewsList";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hacker News Clone</title>
        <meta
          name="description"
          content="A modern and minimalistic clone of Hacker News using Next.js, TypeScript, and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <NewsList />
      </main>
    </div>
  );
};

export default Home;
