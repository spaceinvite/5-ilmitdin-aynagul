import { useState, useEffect, useRef } from 'react';

import styles from './StartBlock.module.scss';
import audioHighIcon from '../../assets/img/circum_volume-high.svg';
import audioMuteIcon from '../../assets/img/circum_volume-mute.svg';
import music from '../../assets/audio/music.mp3';

export const StartBlock = () => {
	const audioRef = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);

	const togglePlay = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
			setIsPlaying(true);
		} else {
			audioRef.current.pause();
			setIsPlaying(false);
		}
	};

	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = 0.3;
		}
	});

	return (
		<div className={styles.block}>
			<p
				className={styles.blockNames}
				data-aos='zoom-in'
				data-aos-duration='3000'
				data-aos-once='true'
			>
				Ильмитдин
				<br />и Айнагуль
			</p>
			<p
				className={styles.blockText}
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-once='true'
			>
				Приглашают Вас
				<br />
				на свадьбу
			</p>
			<div className={styles.blockAudio} onClick={togglePlay}>
				{isPlaying ? (
					<img
						className={styles.blockAudio__item}
						src={audioHighIcon}
						alt='high'
					/>
				) : (
					<img
						className={styles.blockAudio__item}
						src={audioMuteIcon}
						alt='mute'
					/>
				)}
				<audio src={music} ref={audioRef} autoPlay loop controls hidden />
			</div>
		</div>
	);
};
