import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import styles from './Main.module.scss';
import { DesktopView } from '../../components/DesktopView';
import { StartBlock } from '../../components/StartBlock';
import { InviteBlock } from '../../components/InviteBlock';
import { LocationBlock } from '../../components/LocationBlock';
import { PhotoBlock } from '../../components/PhotoBlock';
import { TimerBlock } from '../../components/TimerBlock';
import { EndBlock } from '../../components/EndBlock';

export const Main = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className={styles.main}>
			<DesktopView />
			<div className={styles.mainMobile}>
				<StartBlock />
				<InviteBlock />
				<LocationBlock />
				<PhotoBlock />
				<TimerBlock />
				<EndBlock />
			</div>
		</div>
	);
};
