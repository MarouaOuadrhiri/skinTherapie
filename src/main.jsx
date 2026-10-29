import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/style.css';
import '@fontsource/aileron/300.css';
import '@fontsource/aileron/400.css';
import '@fontsource/aileron/600.css';
import '@fontsource/aileron/700.css';

createRoot(document.getElementById('root')).render(<App />);
