import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

const Pagina404 = () => (<div>Página 404</div>);

const Routing = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route component={Pagina404} />
      </Switch>
  </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
