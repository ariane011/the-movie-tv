import styled from "styled-components";

export const Styled = styled.div`
  background-image: linear-gradient(
      rgba(245, 246, 252, 0.52),
      rgb(151 52 13 / 60%)
    ),
    url("https://www.trollhattan.fh.se/wp-content/uploads/2022/04/topgunmaverick_channelart_cover-1600x900-1.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  color: #4b4b4b;
  .banner {
    width: 100%;
  }
`;

export const Container = styled.div`
  .input-search {
    display: flex;
    justify-content: center;
    margin: 30px auto 30px auto;
    .ant-btn-icon-only,
    .ant-input-group-addon {
      border-color: #57606f;
      border-radius: 0px 20px 20px 0px !important;
      background-color: #3d3d3d;
    }
    .anticon svg {
      color: #ced6e0;
    }
    input {
      border-color: #57606f;
      border-radius: 20px 0px 0px 20px !important;
      background-color: #3d3d3d;
      color: #ced6e0;
    }
  }
  h1 {
    font-family: Roboto;
    font-size: 32px;
    color: whitesmoke;
    margin: 60px 0px 40px 60px;
  }
`;
