import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<h1
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				Место
				<br />
				проведения
			</h1>
			<div className={styles.blockWrapper}>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Наш праздник пройдёт
					<br />
					по адресу:
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					г. Сургут
					<br />
					ул. 30 лет Победы, д. 88
					<br />
					«Оскар»
				</p>
				<p
					className={styles.blockWrapper__time}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					17:00
				</p>
			</div>
		</div>
	);
};
