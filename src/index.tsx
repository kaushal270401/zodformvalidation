import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { FormPageContext} from "./component/context";
import theme from './Theme'
import { ThemeProvider } from "@emotion/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FormPageContext>
      
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </FormPageContext>
);
