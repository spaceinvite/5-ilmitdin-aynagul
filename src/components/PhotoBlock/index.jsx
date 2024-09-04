import { Link } from 'react-router-dom';
import styles from './PhotoBlock.module.scss';

export const PhotoBlock = () => {
	return (
		<div className={styles.block}>
			<h1
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				Фото со
				<br />
				свадьбы
			</h1>
			<div className={styles.blockWrapper}>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					После свадьбы мы опубликуем фотографии, сделанные в день торжества.
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Если у вас будут снимки с мероприятия, вы также можете поделиться ими
					с нами.
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1500'
					data-aos-once='true'
				>
					Чтобы присоединиться к нашей группе, нажмите на кнопку ниже.
				</p>
			</div>
			<Link
				className={styles.blockLink}
				to='https://t.me/+qgNHfojRXmw2ZjYy'
				target='_blanc'
				data-aos='zoom-in'
				data-aos-duration='1500'
				data-aos-once='true'
			>
				СМОТРЕТЬ ФОТО
			</Link>
		</div>
	);
};
