import React from "react";
import Footer from "../Layout/Footer/Footer";
import Header from "../Layout/Header/Header";
import Main from "../Layout/Main/Main";
import { Layout } from "./app.styles";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
