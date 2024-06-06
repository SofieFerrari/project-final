import { BrowserRouter } from "react-router-dom";

import { AppRoute } from "./routes/AppRoute";

export const App = () => {
  return (
     <BrowserRouter>
      <h1 className="text-cyan-500 font-montserrat">Welcome to webify!!</h1>
       <AppRoute />
     </BrowserRouter>
  );
};
