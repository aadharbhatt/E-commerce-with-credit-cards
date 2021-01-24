import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import routes from './dev-routes';
import configureStore from './dev-store';
import SideNav from './common/SideNav';

const App = () => {
  const store = configureStore();
  const paths = (
    <Switch>
      {routes.map(({ path, exact, component: View, ...rest }) => {
        const pathName = path;

        return (
          <Route
            key={path}
            path={pathName}
            exact={exact}
            render={(props) => <View {...props} {...rest} />}
          />
        );
      })}
      <Route path="*" render={() => <Redirect to='/inventory' />} />
    </Switch>
  );

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <SideNav />
          <Route render={() => paths} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
