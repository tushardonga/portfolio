import { Helmet } from "react-helmet";
import Bio from "./components/Bio";
import Layout from "./components/Layout";
import { headerData } from "./data/headerData";
import "./App.css";

function App() {
  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>
      <Layout>
        <Bio />
      </Layout>
    </div>
  );
}

export default App;
