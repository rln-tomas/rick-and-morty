import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../Context";

function CharacterItem(props) {
  const { setCharacters } = useContext(Context);

  const handleClick = () => {
    setCharacters((prevState) => {
      return prevState.filter((item) => item.id !== props.id);
    });
  };

  return <ImageStyled alt="#" src={props.image} onClick={handleClick} />;
}

const ImageStyled = styled.img`
  border-radius: 50%;
  background-color: white;
  border: 2px black solid;
  padding: 5px;
  margin: 10px;
`;

export default CharacterItem;
