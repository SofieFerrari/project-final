import Lottie from "lottie-react";
import loading from "../assets/animation/lottie-loading.json";

export const Loading = () => {
  return (
    <div className="flex justify-center">
      <Lottie
        animationData={loading}
        loop={true}
        style={{ width: 300, height: 300 }}
      />
    </div>
  );
};
