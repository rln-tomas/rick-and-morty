import { useState, useEffect } from "react";
import { getCharacters } from "../services/getCharacters";

const INITIAL_PAGE = 1;

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCharacters()
      .then((res) => {
        setCharacters(res.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLoading, setCharacters]);

  useEffect(() => {
    console.log({ page });
    if (page > INITIAL_PAGE) {
      setLoadingNextPage(true);
      getCharacters(page)
        .then((res) => {
          setCharacters((prevCharacters) => [
            ...prevCharacters,
            ...res.results,
          ]);
        })
        .finally(() => setLoadingNextPage(false));
    }
  }, [page, setPage, setLoadingNextPage, loading]);

  return {
    loading,
    characters,
    setCharacters,
    loadingNextPage,
    setPage,
  };
};
