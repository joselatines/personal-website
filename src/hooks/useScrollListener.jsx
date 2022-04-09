import { createContext, useState, useEffect } from 'react';

// Conditions
// 	whenScrollHide: y > 150 && y - lastY > 0

export const useScrollListener = () => {
	const [data, setData] = useState({
		x: 0,
		y: 0,
		lastX: 0,
		lastY: 0,
	});

	// set up event listeners
	useEffect(() => {
		const handleScroll = () => {
			setData(last => {
				return {
					x: window.scrollX,
					y: window.scrollY,
					lastX: last.x,
					lastY: last.y,
				};
			});
		};

		handleScroll();
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return data;
};

export const ScrollContext = createContext(null);
