export default function Visual({ Scroll }) {
	// 미션 : 첫번쨰 red수치가 200이상 올라가지 않도록 처리
	const style_frame = {
		backgroundColor: `rgb(${170 + Scroll / 10}, ${210 - Scroll / 10}, ${230})`
	};
	const style_h2 = {
		transform: `translateX(${Scroll}px) translateY(${Scroll}px) scale(${1 + Scroll / 400})`,
		opacity: 1 - Scroll / 400
	};

	return (
		<section style={style_frame} className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
		</section>
	);
}
