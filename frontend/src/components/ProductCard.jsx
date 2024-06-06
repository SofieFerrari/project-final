import PropTypes from "prop-types";

import cart from "../assets/cart-blue.svg";
import favorite from "../assets/favorite-icon.svg";

export const ProductCard = ({ templateImg, tags, name, price, category }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={templateImg} alt="image of the template" />
      <div className="flex flex-row justify-between font-montserrat">
        <div className="flex flex-col">
          <span className="mb-1 flex flex-row">
            {tags.split(", ").map((tag) => (
              <button key={tag} className="mr-2 text-sm text-blue">
                #tag
              </button>
            ))}
          </span>
          <p className="mb-2 text-sm font-bold text-blue">{category}</p>
          <p className="font-montserrat text-xl font-bold">{name}</p>
          <p className="text-sm">€{price}</p>
        </div>
        <div className="mr-3 flex flex-row items-center gap-6">
          <button className="h-6 w-6">
            <img src={favorite} alt="add to favorite button" />
          </button>
          <button className="h-6 w-6">
            <img src={cart} alt="add to cart button" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  templateImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
