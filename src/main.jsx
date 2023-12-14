import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </>
)
