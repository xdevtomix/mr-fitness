import styled, { StyleSheetManager } from "styled-components";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <StyleSheetManager disableVendorPrefixes>
      <Container data-component="app">
        <Header />
        <Home />
        <About />
        <Features />
        <Pricing />
      </Container>
    </StyleSheetManager>
  )
}

const Container = styled.div``;