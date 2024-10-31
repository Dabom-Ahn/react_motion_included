export default function Visual({ Scroll }) {
	const style_h2 = {
		left: Scroll,
		top: Scroll
	};

	return (
		<section className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
		</section>
	);
}
