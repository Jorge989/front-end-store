import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
