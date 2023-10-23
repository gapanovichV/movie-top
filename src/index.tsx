import { createRoot } from 'react-dom/client';
import {App} from "app/App";
import {ThemeProvider} from "app/providers/ThemeProviders";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App/>
  </ThemeProvider>

);