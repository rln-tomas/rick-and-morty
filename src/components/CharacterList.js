import React, { useCallback, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import debounce from "just-debounce-it";
import { Context } from "../Context";

import CharacterItem from "./CharacterItem";
import { useNearScreen } from "../hooks/useNearScreen";

export const CharacterList = () => {
  const { characters, loading, setPage } = useContext(Context);
  const externalRef = useRef();
  const { isNearScreen: isNear } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 200),
    [setPage]
  );

  useEffect(() => {
    if (isNear) {
      debounceHandleNextPage();
    }
  }, [isNear, setPage, loading, debounceHandleNextPage]);

  return (
    <CharactersContainerStyled>
      {characters.map((character) => {
        return <CharacterItem key={character.id} {...character} />;
      })}

      {!loading && <div ref={externalRef}></div>}
    </CharactersContainerStyled>
  );
};

const CharactersContainerStyled = styled.div``;

// example with: Context.Consumer:

// export class CharacterList extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <Context.Consumer>
//         {(value) => {
//           return value.characters.map((item) => (
//             <CharacterItem key={item.id} {...item} />
//           ));
//         }}
//       </Context.Consumer>
//     );
//   }
// }
