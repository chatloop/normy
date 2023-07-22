import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { QueryNormalizerProvider } from '@normy/react-query';

import App from './components/app';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const renderApp = () => {
  render(
    <QueryNormalizerProvider
      queryClient={queryClient}
      normalizerConfig={{ devLogging: true }}
    >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </QueryNormalizerProvider>,
    document.getElementById('root'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/app', renderApp);
}
