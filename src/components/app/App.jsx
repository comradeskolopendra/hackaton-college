import React from "react";
import styles from "./app.module.sass";

import Footer from "../footer/footer";
import Header from "../header/header";

function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
