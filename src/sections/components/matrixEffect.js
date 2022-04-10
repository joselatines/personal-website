/*  To make this work you must:
1. Pass a context using useRef hook in the canvas tag with the id "Matrix"
2. Call matrix function inside a useEffectHook */
// <canvas ref={matrixRef} id='Matrix'></canvas>;

export const matrixEffect = (
	canvasRef,
	color = '#0F0',
	bg = 'rgba(0, 0, 0, 0.05)',
	time = 50
) => {
	const canvas = document.getElementById('Matrix');
	const context = canvasRef.current.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	const katakana =
		'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
	const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbs = '0123456789';

	const alphabet = katakana + latin + numbs;

	const fontSize = 16;
	const columns = canvas.width / fontSize;

	const rainDrops = [];

	for (let x = 0; x < columns; x++) {
		rainDrops[x] = 1;
	}

	const draw = () => {
		context.fillStyle = bg;
		context.fillRect(0, 0, canvas.width, canvas.height);

		context.fillStyle = color;
		context.font = fontSize + 'px monospace';

		for (let i = 0; i < rainDrops.length; i++) {
			const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
			context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

			if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				rainDrops[i] = 0;
			}
			rainDrops[i]++;
		}
	};

	setInterval(draw, time);
};
