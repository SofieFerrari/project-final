import { Carousel } from "@material-tailwind/react";
import { ThemeProvider } from "@material-tailwind/react";

import arrowUp from "../assets/arrow-up-icon.svg";
import checkMark from "../assets/check-icon.svg";
import ctaImg from "../assets/ctaImg.jpg";
import pen from "../assets/pen-icon.svg";
import { Button } from "../components/Button";
import { Testimonial } from "../components/Testimonial";
import { CategoryCard } from "../components/CategoryCard";

// const category = [
//   {
//     name: "Business",
//     bgName: "business",
//   },
//   {
//     name: "Travel and Adventure",
//     bgName: "travel",
//   },
//   {
//     name: "Color",
//     bgName: "color",
//   },
//   {
//     name: "Health and Wellness",
//     bgName: "health",
//   },
// ];

export const Homepage = () => {
  const customTheme = {
    carousel: {
      defaultProps: {
        autoplay: true,
        autoplayDelay: 5000,
        transition: {
          type: "tween",
          duration: 0.5,
        },
        loop: true,
      },
    },
  };

  return (
    <main>
      <section className="flex h-[500px] flex-col items-center justify-center gap-7 bg-[url('/src/assets/heroBg.jpg')] bg-cover bg-right-top bg-no-repeat">
        <h1 className="w-3/4 px-2 text-center font-bold">
          Design Your Website with Ease
        </h1>
        <p className="w-3/4 text-center font-lato">
          Discover the perfect web template for you! No coding skills
          needed—just pick, customize, and launch. <br />
          Let&apos;s make website creation easy and fun!
        </p>
        <Button text="SHOP NOW" navTo="/products" />
      </section>
      <section className="my-20 flex flex-col items-center justify-normal space-y-3 text-center">
        <h2 className="font-bold">Best sellers</h2>
        <p className="mx-6 font-lato">
          Explore our most popular products! Tried, tested, and loved by many.
        </p>
        <div className="w-3/4 pt-4">
          <ThemeProvider value={customTheme}>
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-blue" : "w-4 bg-white"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="https://res.cloudinary.com/ddpsnaef5/image/upload/f_auto,q_auto/v1/mockups/mv7tzdlx7gjj6ccdvjsx"
                alt="image 1"
                className="h-full w-full object-cover"
              />
              <img
                src="https://res.cloudinary.com/ddpsnaef5/image/upload/f_auto,q_auto/v1/mockups/pp6ebzcgzfe5pvasabkd"
                alt="image 2"
                className="h-full w-full object-cover"
              />
              <img
                src="https://res.cloudinary.com/ddpsnaef5/image/upload/f_auto,q_auto/v1/mockups/de5w0rlxa3jawdrclcxa"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src="https://res.cloudinary.com/ddpsnaef5/image/upload/f_auto,q_auto/v1/mockups/lr3h435quxn0ytmcf7ml"
                alt="image 3"
                className="h-full w-full object-cover"
              />
              <img
                src="https://res.cloudinary.com/ddpsnaef5/image/upload/f_auto,q_auto/v1/mockups/ogurwv2tcafrnumt06r4"
                alt="image 3"
                className="h-full w-full object-cover"
              />
            </Carousel>
          </ThemeProvider>
        </div>
      </section>
      <section className="lg:gap-auto mx-auto my-20 flex flex-col items-center justify-center gap-6 bg-blue py-20 lg:flex-row lg:gap-4">
        <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
          <span className="mb-3 flex flex-row items-center gap-4">
            <img className="w-8" src={pen} alt="pen icon" />
            <p className="text-lg font-bold lg:text-2xl">Shape It Your Style</p>
          </span>
          <p className="font-lato">
            From concept to creation, our user-friendly editor lets you design
            effortlessly. Drag, drop, and done!
          </p>
        </div>
        <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
          <span className="mb-3 flex flex-row items-center gap-4">
            <img className="w-8" src={checkMark} alt="pen icon" />
            <p className="text-lg font-bold lg:text-2xl">Expand fast</p>
          </span>
          <p className="font-lato">
            Accelerate your growth with scalable, high-performance templates.
            Grow your business quickly and effortlessly.
          </p>
        </div>
        <div className="h-48 w-[300px] place-content-center rounded-[8px] bg-white px-4 lg:h-52 lg:w-[30%] lg:max-w-80 lg:place-content-start lg:pt-8">
          <span className="mb-3 flex flex-row items-center gap-4">
            <img className="w-8" src={arrowUp} alt="pen icon" />
            <p className="text-lg font-bold lg:text-2xl">SEO Supercharged</p>
          </span>
          <p className="font-lato">
            Boost your visibility with SEO-optimized templates. Climb search
            rankings and attract more organic traffic.
          </p>
        </div>
      </section>
      <section className="my-20 flex flex-col items-center justify-center">
        <div className="flex w-2/3 flex-col items-center justify-center gap-6 pb-8 text-center">
          <h2 className="font-bold">Build Your Dream Website Today!</h2>
          <p className="font-lato">
            Transform your vision into reality with our templates. Designed for
            success, these templates offer sleek designs and seamless
            functionality. Start creating a standout website effortlessly!
          </p>
          <Button text="SIGN UP" navTo="/signup" />
        </div>
        <div className="h-80 w-80 lg:h-96 lg:w-96">
          <img
            className="h-full w-full object-cover object-center"
            src={ctaImg}
          />
        </div>
      </section>
      <section className="my-20 flex flex-col items-center justify-center gap-6">
        <h2 className="font-bold">By Categories</h2>
        <p className="font-lato">
          Explore our most popular products! Tried, tested, and loved by many.
        </p>
        <div className="mt-8 grid w-full grid-cols-2 gap-6 px-6 lg:w-fit lg:grid-cols-[repeat(4,_minmax(0,_320px))] lg:gap-8">
          {/* {category.map((item) => (
            <div
              key={item.name}
              className="relative flex h-80 items-center justify-center rounded-md shadow-[2px_2px_2px_rgba(0,_0,_0,_0.25)] lg:h-96"
            >
              <CategoryCard category={item.name} bgName={item.bgName} />
            </div>
          ))} */}
          <CategoryCard />
          <div className="bg-health hidden"></div>
          <div className="bg-business hidden"></div>
          <div className="bg-color hidden"></div>
          <div className="bg-travel hidden"></div>
        </div>
      </section>
      <section className="mt-20 flex flex-col items-center gap-9 bg-light-blue py-14">
        <h2 className="font-bold">What Our Customers Say</h2>
        <div className="mx-6 rounded-sm">
          <Testimonial />
        </div>
      </section>
      <section className="flex h-[400px] flex-col items-center justify-center space-y-9 bg-[url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-bottom text-center text-white lg:h-[670px]">
        <p className="mb-5 font-montserrat font-bold">
          Explore our collection of customizable templates
        </p>
        <h2 className="font-bold">Create Beautiful Websites Effortlessly</h2>
        <Button text="LOG IN" navTo="login" />
      </section>
    </main>
  );
};
