import styled from 'styled-components';

const SSidebar = styled.header`
  width: 100%;
  height: 15vh;
  color: white;
  display: flex;
  justify-content: space-evenly;
  background-color: var(--blueColor);
  a {
    text-decoration: none;
    color: white;
  }
  li {
    line-height: 24px;
    margin: 5px;
  }
  .homeLogo,
  .logDiv {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .logoBox {
    width: 45px;
  }
  .logoPic {
    width: 100%;
  }
  .logoText {
  }
  @media only screen and (min-width: 700px) {
    height: 100vh;
    width: 20vw;
    position: sticky;
    top: 0;
    display: block;
    a {
      cursor: pointer;
    }
    li {
      line-height: 32px;
    }
    .homeLogo,
    .navMenu,
    .logDiv {
      height: auto;
      width: 80%;
      display: flex;
      margin: 50px auto;
    }
    .homeLogo {
      flex-direction: row;
    }
    .logoBox {
      width: 75px;
    }
    .logoPic {
      width: 100%;
    }
    .logoText {
      font-size: 24px;
      display: flex;
      flex-direction: column;
      margin: auto;
    }
    .logoText h3 {
      margin: 5px;
    }
    .navMenu {
      flex-direction: column;
      border-bottom: 1px solid white;
      margin-bottom: 20px;
    }
  }
`;

export default SSidebar;
