import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";

import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
