import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalStyles } from './shared/GlobalStyles';
import { Loader } from './shared/Loader';
const App = lazy(() => import('./App'));

const root = createRoot(document.getElementById('root'));

root.render(
	<StrictMode>
		<Suspense fallback={<Loader />}>
			<App />
		</Suspense>
		<GlobalStyles />
	</StrictMode>
);
