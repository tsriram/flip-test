import List from "../components/List";
import Head from "next/head";
import Test from "../components/Test";

const Home = () => (
  <div className="container">
    <Head>
      <title>FLIP Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <List />
      {/* <Test /> */}
    </main>
  </div>
);

export default Home;
