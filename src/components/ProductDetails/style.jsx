import styled from 'styled-components';

const SProductDetails = styled.section`
  width: 100%;
  background-color: var(--greyColor);
  .productHead {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
  }
  .arrowDiv {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 60px;
  }
  .arrowBtn {
    border: none;
    text-decoration: none;
    background-color: transparent;
  }
  .productTitle {
    width: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: var(--blueColor);
  }
  .productDetails h3 {
    color: var(--blueColor);
    font-size: 20px;
    margin: 10px 0;
  }
  .productDetails p {
    color: grey;
  }
  .productPictureBox {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    background-color: white;
    box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
    -webkit-box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
    -moz-box-shadow: 2px 2px 10px 1px rgba(220, 220, 220, 0.75);
  }
  .productPicture {
    width: 50%;
  }
  .productRightBox {
    padding: 10px;
  }
  .productDescription {
    line-height: 20px;
  }
  .productCategory p {
    background: orange;
    padding: 8px;
    width: fit-content;
    color: white;
    border-radius: 40px;
    font-size: 12px;
  }
  .productPriceBox {
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  }
  .priceLabel {
    border: 1px solid var(--blueColor);
    border-radius: 2px;
    padding: 5px;
    margin-right: 20px;
    width: 70%;
  }
  .productVAT {
    display: flex;
    align-items: flex-end;
  }
  .updateBtn {
    background-color: var(--blueColor);
    color: white;
    border: none;
    text-decoration: none;
    border-radius: 2px;
    width: 125px;
    height: 30px;
  }
  @media only screen and (min-width: 700px) {
    width: 80vw;
    .productHead {
      height: 15vh;
      margin: none;
    }
    .arrowDiv {
      height: auto;
      margin: 5px;
    }
    .arrowBtn {
      cursor: pointer;
    }
    .productTitle {
      font-size: 28px;
    }
    .productDetails {
      display: flex;
      flex-direction: row;
      margin: 50px;
    }
    .productDetails h3 {
      font-size: 24px;
    }
    .productPictureBox {
      width: 400px;
      height: 400px;
    }
    .productRightBox {
      width: 40vw;
      padding: none;
    }
    .productText {
      display: flex;
      flex-direction: row;
    }
    .productDescription {
      width: 75%;
      line-height: 24px;
      margin-bottom: 30px;
    }
    .productCategory {
      margin: 0 10px;
      width: 20%;
    }
    .productPrice {
      width: 40%;
    }
    .priceLabel {
      margin: none;
      width: 33%;
    }
    .updateBtn {
      cursor: pointer;
    }
  }
`;

export default SProductDetails;
