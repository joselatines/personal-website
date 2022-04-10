export const typingVar = {
	hidden: { width: '0%' },
	show: {
		width: '100%',
		transition: { duration: 1, delay: 0.5 },
	},
};

export const containerVar = {
	hidden: {},
	show: {
		transition: {
			duration: 1,
			ease: 1,
		},
	},
};

export const stagger = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.5,
		},
	},
};
export const scaleUp = {
	hidden: { scale: 0 },
	show: {
		scale: 1,
		transition: { duration: 1 },
	},
};
export const fromTop = {
	hidden: { y: 100, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};
export const fromRight = {
	hidden: { x: 200, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};
export const fromLeft = {
	hidden: { x: -200, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: { duration: 1 },
	},
};
