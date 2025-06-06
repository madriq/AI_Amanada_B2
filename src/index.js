// import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  "./css/main.css"; // Ensure your CSS file is imported
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

reportWebVitals();
