import styles from './EndBlock.module.scss';

export const EndBlock = () => {
	return (
		<div className={styles.block}>
			<p className={styles.blockText}>
				Будем рады видеть Вас
				<br />
				на нашем празднике!
			</p>
			<p className={styles.blockText}>
				С уважением,
				<br />
				<span>Ильмитдин и Айнагуль</span>
			</p>
		</div>
	);
};
