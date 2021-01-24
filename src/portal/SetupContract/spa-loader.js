import React from 'react';
import SPARouter from 'helpers/spaRouter';
import routes from './SetupContract.routes';
import store from './SetupContract.store';

const SPA = (props) => <SPARouter routes={routes} store={store} {...props} />;

export default SPA;
