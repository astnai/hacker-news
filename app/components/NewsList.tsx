import useFetchStories from "../hooks/useFetchStories";
import { useState, useEffect } from "react";

const NewsList: React.FC = () => {
  const { stories, loading, fetchMoreStories } = useFetchStories();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isFetching
      ) {
        return;
      }
      setIsFetching(true);
      fetchMoreStories();
      setIsFetching(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, fetchMoreStories]);

  if (loading) {
    return <div className="text-center">loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-left">
        <a
          href="https://news.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          hacker news
        </a>
      </h1>
      <ul>
        {stories.map((story) => (
          <li key={story.objectID} className="mb-4">
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:text-gray-500"
            >
              {story.title}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              by {story.author} | {story.points} points |{" "}
              {new Date(story.created_at).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
      {isFetching && (
        <div className="text-center mt-4">loading more articles...</div>
      )}
    </div>
  );
};

export default NewsList;
