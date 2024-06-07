// //importera pcl när den är välkommen tillbaka in i main.
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

const cartItems = [
  { id: "", templateName: "", price: 150 },
  { id: "", templateName: "", price: 134 },
  { id: "", templateName: "", price: 3388 },
];

// eslint-disable-next-line react/prop-types
export const Cart = () => {
  const calculateOrderValue = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  // const calculateVAT = (ordervalue, vatRate = 0.25) => {
  //   return ordervalue * vatRate;
  // };

  // const calculateTotal = (ordervalue, vat) => {
  //   return ordervalue + vat;
  // };
  const orderValue = calculateOrderValue();
  const vat = orderValue * 0.25;
  const total = orderValue + vat;
  // const vat = calculateVAT(orderValue);
  // const total = calculateTotal(orderValue, vat);
  // const calculateOrderValue = () => {
  //   // eslint-disable-next-line react/prop-types
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0,
  //   );
  // };

  // const calculateVAT = (orderValue, vatRate = 0.25) => {
  //   return orderValue * vatRate;
  // };

  // const calculateTotal = (orderValue, vat) => {
  //   return orderValue + vat;
  // };

  return (
    <>
      <div className="text-blue">
        <div className="">
          <span>Order Value:</span>
          <span>€{orderValue.toFixed(2)}</span>
        </div>
        <div className="">
          <span>VAT:</span>
          <span>€{vat.toFixed(2)}</span>
        </div>
      </div>
      <div className="">
        <span>Total:</span>
        <span>€{total.toFixed(2)}</span>
      </div>
      <div className="flex justify-center">
        <Link to="/checkout">
          <Button text={"CONTINUE"} style="submit" />
        </Link>
      </div>
    </>
  );
};
