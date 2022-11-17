import Layout from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyled";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import { IconContext } from "react-icons";

function App() {
  return (
    <div>
      <GlobalStyle />
      <IconContext.Provider value={{ color: "#E7D429", size: "4rem" }}>
        <Layout>
          <HomePage />
          <AboutPage />
        </Layout>
      </IconContext.Provider>
    </div>
  );
}

export default App;
