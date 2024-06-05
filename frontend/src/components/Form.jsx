import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Form = ({ isLogin, onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white px-4 py-8 shadow-md"
    >
      <div className="flex flex-col">
        <label className="text-gray-700 mb-2 font-bold">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>
      </div>
      {!isLogin && (
        <div className="flex flex-col">
          <label className="text-gray-700 mb-2 font-bold">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </label>
        </div>
      )}
      <div className="flex flex-col">
        <label className="text-gray-700 mb-2 font-bold">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            required
          />
        </label>
      </div>
      <Button
        text={isLogin ? "Log in" : "Sign up"}
        style="blue"
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          handleSubmit(event);
        }}
      />
    </form>
  );
};

Form.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
