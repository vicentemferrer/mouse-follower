/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import FollowMouse from './components/FollowMouse.jsx';
import './App.css';

function App() {
	const [enabled, setEnabled] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const spanStyle = {
		color: enabled ? 'green' : 'red'
	};

	useEffect(() => {
		const handleMove = (event) => {
			const { clientX, clientY } = event;
			setPosition({ x: clientX, y: clientY });
		};

		if (enabled) {
			window.addEventListener('pointermove', handleMove);
		}

		return () => {
			window.removeEventListener('pointermove', handleMove);
		};
	}, [enabled]);

	useEffect(() => {
		document.body.classList.toggle('no-cursor', enabled);

		return () => {
			document.body.classList.remove('no-cursor');
		};
	}, [enabled]);

	return (
		<main>
			<FollowMouse position={{ ...position }} />
			<button onClick={() => setEnabled(!enabled)}>
				Seguir cursor: <span style={spanStyle}>{enabled ? 'Activo' : 'Inactivo'}</span>
			</button>
		</main>
	);
}

export default App;
