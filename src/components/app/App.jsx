import React from 'react';
import styles from './app.module.sass';

import Footer from '../footer/footer';
import Header from '../header/header';

import Main from '../main/main';

function App() {
	return (
		<div className={styles.app}>
			<Header />

			<Main />

			<Footer />
		</div>
	);
}

export default App;
