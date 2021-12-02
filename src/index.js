import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {EmployeesApp} from './EmployeesApp';
import {store} from './redux/store'

ReactDOM.render(
  <Provider store={store}>
 <EmployeesApp/>
 </Provider>,
  document.getElementById('root')
);

