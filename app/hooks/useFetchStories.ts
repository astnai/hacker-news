import { useState, useCallback } from "react";

type Story = {
  objectID: string;
  title: string;
  url: string;
  points: number;
  author: string;
  created_at: string;
};

const useFetchStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStories = useCallback(async () => {
    try {
      const response = await fetch(
        "http://hn.algolia.com/api/v1/search?query=foo&tags=story"
      );
      const data = await response.json();
      setStories(data.hits);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchMoreStories = useCallback(async () => {
    setLoading(true);
    await fetchStories();
  }, [fetchStories]);

  return { stories, loading, fetchMoreStories };
};

export default useFetchStories;
