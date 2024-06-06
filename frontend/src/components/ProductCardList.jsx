import PropTypes from "prop-types";
import rubbish from "../assets/rubbish-bin-blue.svg";
import yellow from "../assets/yellow.webp";

export const ProductCardList = ({ image, name, price }) => {
  return (
    <div className="mx-20 flex h-[180px] w-[500px] flex-col justify-center p-3">
      <div className="flex flex-row mx-2">
        <img className="h-[130px] self-center" src={yellow} alt="image of our template" />
        <div className="flex w-60 flex-col gap-3">
          <p className="pl-2 pb-3 font-montserrat text-xl font-bold">
            Yellow happy wow {name}
          </p>
          <p className="font-montserrat text-sm pb-8 pl-2">€29.99{price}</p>
          <button className="text flex flex-row self-end font-montserrat text-xs pr-2 text-blue">
            Remove item
            <img className="h-4 w-4" src={rubbish} alt="remove item" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCardList.propTypes = {
  templateImg: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
