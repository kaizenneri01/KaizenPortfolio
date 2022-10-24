import Layout from "./components/layout/Layout";
import GlobalStyle from "./GlobalStyled";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}

export default App;
