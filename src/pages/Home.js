import React from "react";
import { CharacterProvider } from "../Context";
import { CharacterList } from "../components/CharacterList";

export const Home = () => {
  return (
    <CharacterProvider>
      <CharacterList />
    </CharacterProvider>
  );
};
