import { Route, Routes } from 'react-router-dom';
import './assets/scss/main.scss';
import { Main } from './pages/Main';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
		</Routes>
	);
}

export default App;
