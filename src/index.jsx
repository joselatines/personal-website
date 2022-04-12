import { StrictMode } from 'react';
import { Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { GlobalStyles } from './shared/GlobalStyles';
import { Loader } from './shared/Loader';

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
		<GlobalStyles />
	</StrictMode>
);
