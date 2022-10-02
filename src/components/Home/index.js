import React from "react";
import { Container, Styled } from "./Home.styled";
import { Movies } from "../Movies";
import { Row, Col } from "antd";
import { Search } from "../Search";

export const Home = () => {
  return (
    <>
      <Styled />
      <Container>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col span={16}>
            <Search />
          </Col>
        </Row>
        <h1>Mais populares...</h1>
        <Movies />
      </Container>
    </>
  );
};
