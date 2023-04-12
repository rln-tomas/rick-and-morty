import { createContext } from "react";
import { useCharacters } from "./hooks/useCharacters";

export const Context = createContext({});

export const CharacterProvider = ({ children }) => {
  const { setCharacters, characters, loading, setPage } = useCharacters();

  return (
    <Context.Provider
      value={{
        setCharacters,
        characters,
        loading,
        setPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
