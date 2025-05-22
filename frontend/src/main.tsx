
import './index.css'; // Aquí debe estar Tailwind importado
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContentProvider } from './contexts/ContentContext';  // <- importa el provider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContentProvider>          {/* <-- envuelve aquí */}
      <App />
    </ContentProvider>
  </React.StrictMode>
);

