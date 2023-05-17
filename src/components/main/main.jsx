import { useEffect, useState } from 'react';
import { getColleges } from '../../services';
import Hero from './hero/hero';
import styles from './main.module.sass';

const Main = () => {
	const [colleges, setColleges] = useState([]);

	useEffect(() => {
		getColleges().then(data => {
			setColleges(data);
		});
	}, []);

	console.log(colleges);

	return (
		<main className={styles.main}>
			<Hero />
		</main>
	);
};

export default Main;
