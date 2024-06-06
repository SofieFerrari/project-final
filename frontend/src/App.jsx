import { BrowserRouter } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AppRoute } from "./routes/AppRoute";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppRoute />
      <Footer />
    </BrowserRouter>
  );
};
