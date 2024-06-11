import PropTypes from "prop-types";

import favorite from "../assets/favorite-icon.svg";
import { Button } from "./Button";

export const ProductDetailsCard = ({
  numOfLikes,
  image,
  tags,
  price,
  templateName,
  description,
  category,
}) => {
  return (
    <div className="mx-auto flex w-4/5 min-w-[300px] flex-col gap-6 font-montserrat lg:flex-row lg:place-content-center lg:gap-10">
      <div className="relative lg:h-fit">
        <span className="absolute left-5 top-5 flex h-8 w-fit flex-row items-center gap-2 rounded-3xl border-none bg-light-gray p-3 font-bold text-blue">
          <img className="h-3 w-3" src={favorite} alt="favorite icon" />
          <p>{numOfLikes} likes</p>
        </span>
        <img
          className="lg:max-w-[600px]"
          src={image}
          alt="image of the template"
        />
        <button className="absolute bottom-5 right-5 rounded-full bg-white p-3 hover:bg-light-gray">
          <img src={favorite} />
        </button>
      </div>
      <div className="flex w-full flex-col gap-3 lg:w-96 lg:flex-none lg:justify-between">
        <span className="flex flex-row">
          {tags.split(", ").map((tag) => (
            <button key={tag} className="mr-2 text-sm text-blue">
              #{tag}
            </button>
          ))}
        </span>
        <p className="mb-2 text-sm font-bold text-blue">{category}</p>
        <h1 className="font-montserrat font-bold">{templateName}</h1>
        <p className="text-sm">€{price}</p>
        <p>{description}</p>
        <div className="mt-6 w-fit self-center lg:self-start">
          <Button text="ADD TO CART" />
        </div>
      </div>
    </div>
  );
};

ProductDetailsCard.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  templateName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numOfLikes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
