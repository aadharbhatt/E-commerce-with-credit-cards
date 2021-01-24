import React from 'react';
import SPARouter from 'helpers/spaRouter';
import routes from './Inventory.routes';
import store from './Inventory.store';

const SPA = (props) => <SPARouter routes={routes} store={store} {...props} />;

export default SPA;
