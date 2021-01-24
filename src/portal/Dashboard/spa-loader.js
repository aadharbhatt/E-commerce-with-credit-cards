import React from 'react';
import SPARouter from 'helpers/spaRouter';
import routes from './Dashboard.routes';
import store from './Dashboard.store';

const SPA = (props) => <SPARouter routes={routes} store={store} {...props} />;

export default SPA;
