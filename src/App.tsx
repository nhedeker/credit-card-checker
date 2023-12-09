import React from "react";
import { ThemeProvider } from "@mui/material/styles";

import "./styles"
import CreditCardForm from "components/CreditCardForm";
import themeOptions from "styles/theme";

function App() {
  return (
      <div className="app">
        <ThemeProvider theme={themeOptions}> </ThemeProvider>
        <h1>
          Natasha Hedeker's Credit Card Checker
        </h1>
        <p>For easy valid numbers to test, use <a href="https://www.dcode.fr/luhn-algorithm">https://www.dcode.fr/luhn-algorithm</a></p>
        <div className="app-body">
          <CreditCardForm />
        </div>
      </div>
  );
}

export default App;
