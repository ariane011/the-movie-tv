import styled from "styled-components";

export const StyleHeader = styled.div`
  background-color: #3d3d3d;
  width: 100%;
  height: 100px;
`;

export const Container = styled.div`
  .img-background {
    width: 100%;
    background-size: cover;
    -webkit-mask-image: linear-gradient(
      to bottom,
      #a422283b 25%,
      #d9363e00 100%
    );
  }
  .div-img-bg img {
    position: relative;
  }
  .div-img-bg {
    background: black;
  }
  .div-infos {
    display: flex;
    position: absolute;
    top: 0px;
    img {
      width: 300px;
      margin: 150px 50px 50px 50px;
      border-radius: 10px;
    }
    .div-details {
      color: whitesmoke;
      margin-top: 150px;
      font-family: "Roboto", sans-serif;
    }
    h1 {
      color: whitesmoke;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 28px;
    }
    h2 {
      color: whitesmoke;
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 20px;
    }
    .txt-tagline {
      font-style: italic;
    }
    .txt-overview {
      width: 600px;
    }
    p {
      font-size: medium;
    }
  }
`;
