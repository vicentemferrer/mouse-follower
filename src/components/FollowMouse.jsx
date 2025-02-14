export default function FollowMouse({ position: { x, y } }) {
	const style = {
		position: 'absolute',
		backgroundColor: '#09f',
		borderRadius: '50%',
		opacity: 0.8,
		pointerEvents: 'none',
		top: -20,
		left: -20,
		width: 40,
		height: 40,
		transform: `translate(${x}px, ${y}px)`
	};

	return (
		<>
			<div style={style} />
		</>
	);
}
