import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@beyondcorp/beyond-ui/dist/styles.css';
import AppRoutes from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
