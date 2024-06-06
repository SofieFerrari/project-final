import { ProductCard } from "../components/ProductCard";

export const ProductList = () => {
  return (
    <div className="lg:mx-[minmax(20px, auto)] mx-10 grid grid-cols-1 justify-center justify-items-center gap-10 lg:grid-cols-[repeat(3,_minmax(0,_500px))] lg:gap-x-[5%]">
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
        category="Health and Wellness"
      />
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
      />
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
      />
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
      />
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
      />
      <ProductCard
        templateImg="https://res.cloudinary.com/ddpsnaef5/image/upload/v1717358234/cld-sample-5.jpg"
        tags="Health, Wellness, Holistic"
        name="Health and Wellness"
        price={34.99}
      />
    </div>
  );
};
