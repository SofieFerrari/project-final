import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import { useUserStore } from "../stores/useUserStore";
import { Button } from "./Button";
import { AnimationSuccess } from "./AnimationSuccess";

export const Form = ({ isLogin }) => {
  const navigate = useNavigate();

  const { logInUser, registerUser, loading, error } = useUserStore();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    loading(true);
    // setLoadingForm(true)
    try {
      const response = isLogin
        ? await logInUser(formData)
        : await registerUser(formData);
      if (response) navigate(`${isLogin ? "/mypage" : "/login"}`);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      loading(false);
    const response = isLogin
      ? await logInUser(formData)
      : await registerUser(formData);
    if (response) {
      setShowSuccess(true);
      setTimeout(() => {
        navigate(`${isLogin ? "/mypage" : "/login"}`);
      }, 4000);
    }
  };

  return (
    <div className="mb-20 mt-10 flex items-center justify-center lg:mb-32 lg:mt-20">
      {loading ? (

        <Loading />
      ) : showSuccess ? (
        <AnimationSuccess isVisible={showSuccess} />
      ) : (
        <form onSubmit={handleSubmit} className="w-80 max-w-sm lg:w-96">
          <div className="mb-6 lg:mb-8">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="USERNAME"
              value={formData.username}
              onChange={handleChange}
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-sm border border-light-blue bg-light-gray p-3 font-montserrat font-bold placeholder-blue focus:ring focus:ring-opacity-50 lg:p-4"
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-6 lg:mb-8">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                value={formData.email}
                onChange={handleChange}
                className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-sm border border-light-blue bg-light-gray p-3 font-montserrat font-bold placeholder-blue focus:ring focus:ring-opacity-50 lg:p-4"
                required
              />
            </div>
          )}

          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="PASSWORD"
              value={formData.password}
              onChange={handleChange}
              className="focus:border-blue-500 focus:ring-blue-500 w-full rounded-sm border border-light-blue bg-light-gray p-3 font-montserrat font-bold placeholder-blue focus:ring focus:ring-opacity-50 lg:p-4"
              required
            />
          </div>
          <div className="flex justify-center p-10 lg:p-16">
            <Button text={isLogin ? "LOG IN" : "SIGN UP"} />
          </div>
          <div className="mt-4 text-center">
            {isLogin ? (
              <div className="font-montserrat font-bold text-blue">
                <p className="lg:mb-4lg:text-base mb-2 text-sm">
                  Don’t have an account?
                </p>
                <Link
                  to="/signup"
                  className="block text-base underline lg:text-xl"
                >
                  Become a member!
                </Link>
              </div>
            ) : (
              <div className="font-montserrat font-bold text-blue">
                <p className="mb-2 text-sm lg:mb-4 lg:text-base">
                  Already have an account?
                </p>
                <Link
                  to="/login"
                  className="block text-base underline lg:text-xl"
                >
                  Log in here!
                </Link>
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

Form.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
