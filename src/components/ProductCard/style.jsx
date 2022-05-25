import styled from 'styled-components';

const SProductCard = styled.article`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 32px;
  background-color: white;
  box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
  -webkit-box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
  -moz-box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
  .cardTitle,
  .cardCategory,
  .cardPrice,
  .cardVAT {
    margin: 5px;
  }
  .cardTitle {
    width: 50%;
  }
  .cardCategory {
    width: 25%;
  }
  .cardPrice,
  .cardVAT {
    width: 10%;
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 700px) {
    margin: auto;
    width: 90%;
    border-radius: 2px;
    .cardTitle {
      width: 60%;
    }
    .cardCategory {
      width: 15%;
    }
    .cardPrice,
    .cardVAT {
      width: 10%;
    }
    .cardPrice {
      justify-content: center;
    }
  }
`;

export default SProductCard;
