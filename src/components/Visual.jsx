/*
	미션 - 제목요소가 확대되면서 완전 투명해지도록 스크롤값 연동
*/

export default function Visual({ Scroll }) {
	const style_h2 = {
		transform: `translateX(${Scroll}px) translateY(${Scroll}px) rotate(${Scroll * 1.5}deg)`
	};

	return (
		<section className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
		</section>
	);
}
