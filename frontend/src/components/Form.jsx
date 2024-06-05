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
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {!isLogin && (
        <div>
          <label>
            Emai:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <Button
        text={isLogin ? "Log in" : "Sign up"}
        style="blue"
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
