import { createBrowserHistory, createMemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el, { onNaviagate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNaviagate) {
    history.listen(onNaviagate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
