import { useEffect, useState } from 'react';
import News from '../components/News';
import Pics from '../components/Pics';
import Visual from '../components/Visual';

export default function Home() {
	const [Scroll, setScroll] = useState(0);

	const handleScroll = () => {
		setScroll(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Visual Scroll={Scroll} />
			<News />
			<Pics />
		</>
	);
}
