import Footer from "../layout/Footer/Footer";
import Header from "../layout/Header/Header";
import Main from "../layout/Main/Main";
import { Layout } from "./app.styles";

export function App() {
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
