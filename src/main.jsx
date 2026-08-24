import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/index.css';
import './styles/panel.css';
import './styles/preview.css';
import { Profilize } from './profilize.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profilize />
  </StrictMode>
);
