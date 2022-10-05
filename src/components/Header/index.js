import React from "react";
import iconTV from "../../assets/icons/icon-tv.png";
import { Container } from "./Header.styled";

export const Header = () => {
  return (
    <a href={"/"}>
      <Container>
        <div>
          <img src={iconTV} alt="Icone TV" />
        </div>
        <div>TheMovieTV</div>
      </Container>
    </a>
  );
};
