import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalStyles";

// Pages
import Home from "./pages/Home";
import SignUp from "./pages/SignupPage";
import Pricing from "./pages/PricingPage";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
