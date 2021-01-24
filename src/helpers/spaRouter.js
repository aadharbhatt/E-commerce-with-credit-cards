import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ErrorBoundary } from 'components/';
import SideNav from 'common/SideNav';
import theme from '../theme';

const SPARouter = (spaProps) => {
  const store = spaProps.store();
  const paths = (
    <Switch>
      {spaProps.routes.map(({ path, exact, component: View, ...rest }) => (
          <Route
          key={path}
          path={path}
          exact={exact}
          render={(props) => <View {...props} {...rest} content={spaProps.content} />}
          />
      ))}
      <Route path="*" render={() => <div>Nothing found for url</div>} />
    </Switch>
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <BrowserRouter>
            <SideNav />
            <Route render={() => paths} />
          </BrowserRouter>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
};

export default SPARouter;
