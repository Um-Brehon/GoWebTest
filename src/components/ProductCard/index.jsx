import PropTypes from 'prop-types';
import SProductCard from './style';

function ProductCard({ title, price, category }) {
  return (
    <SProductCard>
      <p className="cardTitle">{title}</p>
      <p className="cardCategory">{category}</p>
      <p className="cardPrice">{price}€</p>
      <p className="cardVAT">?</p>
    </SProductCard>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
