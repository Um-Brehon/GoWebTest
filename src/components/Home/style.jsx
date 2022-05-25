import styled from 'styled-components';

const SHome = styled.section`
  width: 100vw;
  background-color: var(--greyColor);
  a {
    text-decoration: none;
    color: #777777;
  }
  .pageTitle {
    width: 100%;
    height: 100px;
    font-size: 24px;
    color: var(--blueColor);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .listHeader {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 5px auto;
    background-color: var(--blueColor);
    color: white;
    line-height: 32px;
    font-size: 14px;
  }
  @media only screen and (min-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 80vw;
    .pageTitle {
      height: 150px;
      font-size: 32px;
    }
    .listHeader {
      position: sticky;
      top: 0;
      width: 90%;
      margin: 5px auto;
      line-height: 32px;
      font-size: 14px;
      border-radius: 2px;
    }
    .listHeader .itemTitle,
    .listHeader .itemCategory,
    .listHeader .itemPrice,
    .listHeader .itemVAT {
      margin: 5px;
    }
    .listHeader .itemTitle {
      width: 60%;
    }
    .listHeader .itemCategory {
      width: 15%;
    }
    .listHeader .itemPrice,
    .listHeader .itemVAT {
      width: 10%;
    }
    .productItem {
      margin: 5px;
    }
  }
`;

export default SHome;
