import { useState } from "react";
import { useForm } from "react-hook-form";

import { AccountInfo } from "../components/AccountInfo";
import { Breadcrumb } from "../components/Breadcrumb";
import { Button } from "../components/Button";
import { CartItem } from "../components/CartItem";
import { Dropdown } from "../components/Dropdown";
import { EmptyCart } from "../components/EmptyCart";
import { Form } from "../components/Form";
import { PaymentForm } from "../components/PaymentForm";
import { ShippingForm } from "../components/ShippingForm";
import { useProductStore } from "../stores/useProductStore";
import { useUserStore } from "../stores/useUserStore";

export const Checkout = () => {
  const { cart, clearCart } = useUserStore((state) => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));
  const products = useProductStore((state) => state.products);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    formState: { isSubmitting, isDirty, isValid }, // check if data fulfills the requirements and filled
  } = useForm();
  const onSubmit = (data) => {
    clearCart();
    console.log(data);
  };
  const fillDummyData = () => {
    reset(
      {
        firstName: "Alice",
        lastName: "Test",
        email: "customer@email.se",
        phone: "+46701740615",
        address: "Södra Blasieholmshamnen 2",
        zipCode: "11 148",
        city: "Stockholm",
        country: "SE",
        cardHolder: "Alice Test",
        cardNumber: "4111 1111 1111 1111",
        expiry: "12/28",
        cvc: "123",
      },
      { keepTouched: false },
      // { keepIsSubmitted: true, keepDirtyValues: false },
    );
  };
  return (
    <div>
      <Breadcrumb />
      <form
        className="mx-auto my-4 flex w-fit flex-col items-center gap-8 text-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold">Checkout</h1>
        <h2 className="w-3/4 text-xl">
          Please fill out the form below to complete your purchase.
        </h2>
        <Dropdown text="YOUR ACCOUNT" content={<AccountInfo />} />
        <Dropdown
          text="DELIVERY DETAILS"
          content={<ShippingForm register={register} />}
        />
        <Dropdown
          text="YOUR ORDER"
          content={
            cart.length > 0 ? (
              products
                .filter((product) => cart.includes(product._id))
                .map((product) => (
                  <CartItem
                    key={product._id}
                    name={product.templateName}
                    id={product._id}
                    image={product.image}
                    price={product.price}
                    className="sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
                  />
                ))
            ) : (
              <EmptyCart />
            )
          }
        />
        <Dropdown
          text="PAYMENT METHOD"
          content={<PaymentForm register={register} />}
        />

        <div className="flex flex-col items-center gap-8">
          <Button
            text="Use Dummy Data"
            type="button"
            onClickFunc={fillDummyData}
          />
          <Button
            text="PAY NOW"
            onClickFunc={handleSubmit(onSubmit)}
            navTo="/order-confirmation"
            disabled={cart.length === 0 || !isValid}
          />
          <Button
            text="CONTINUE SHOPPING"
            style="white"
            navTo="/products"
            type="button"
          />
        </div>
        <p className="w-3/4 font-lato text-base">
          *Please remember, this is not an actual shop, no money will be drawn,
          and unfortunately no products will be sent. But thank you for testing
          it out!
        </p>
      </form>
    </div>
  );
};
