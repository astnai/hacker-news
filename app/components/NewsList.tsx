import { useState, useEffect } from "react";

type Story = {
  objectID: string;
  title: string;
  url: string;
  points: number;
  author: string;
  created_at: string;
};

const NewsList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?query=foo&tags=story")
      .then((response) => response.json())
      .then((data) => setStories(data.hits));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        <a
          href="https://news.ycombinator.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-500"
        >
          Hacker News
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
    </div>
  );
};

export default NewsList;
