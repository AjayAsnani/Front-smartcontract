import Head from "next/head";
import styles from "../styles/Home.module.css";
//import ManualHeader from "../Components/ManualHeader";
import Header from "../Components/Header";
import LotteryEntrance from "../Components/LotteryEntrance";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta name="description" content="Our Smart Contract Lottery App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<ManualHeader />*/}
      <Header />
      <LotteryEntrance />
    </div>
  );
}
