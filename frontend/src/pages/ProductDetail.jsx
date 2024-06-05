import { ProductDetailsCard } from "../components/ProductDetailsCard";

export const ProductDetail = () => {
  return (
    <div>
      <ProductDetailsCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
        numOfLikes={3}
        description="A mouth-watering web template for foodies and culinary experts. Display your recipes and culinary creations in style."
      />
    </div>
  );
};
