import { useState, useEffect } from 'react';

import styles from './TimerBlock.module.scss';

export const TimerBlock = () => {
	const targetDate = new Date(`2024-09-22T17:00:00`);

	const calculateTimeLeft = () => {
		const difference = +targetDate - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const formatNumber = number => {
		return number < 10 ? `0${number}` : number;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	return (
		<div className={styles.block}>
			<h3
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				До свадьбы
				<br />
				осталось
			</h3>
			<div
				className={styles.blockTimer}
				data-aos='zoom-in'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				<div className={styles.blockTimer__item}>
					<p className={styles.blockTimer__itemValue}>
						{formatNumber(timeLeft.days || 0)}
					</p>
					<p className={styles.blockTimer__itemName}>дней</p>
				</div>
				<div className={styles.blockTimer__item}>
					<p className={styles.blockTimer__itemValue}>
						{formatNumber(timeLeft.hours || 0)}
					</p>
					<p className={styles.blockTimer__itemName}>часов</p>
				</div>
				<div className={styles.blockTimer__item}>
					<p className={styles.blockTimer__itemValue}>
						{formatNumber(timeLeft.minutes || 0)}
					</p>
					<p className={styles.blockTimer__itemName}>минут</p>
				</div>
				<div className={styles.blockTimer__item}>
					<p className={styles.blockTimer__itemValue}>
						{formatNumber(timeLeft.seconds || 0)}
					</p>
					<p className={styles.blockTimer__itemName}>секунд</p>
				</div>
			</div>
		</div>
	);
};
