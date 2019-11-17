import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ClienteCreate from './clientes/Create'
import ClientesAdmin from './ClientesAdmin';

import AcueductoCreate from './acueductos/Create';
import AcueductosAdmin from './AcueductosAdmin';

import MedicionCreate from './mediciones/Create';
import MedicionesAdmin from './MedicionesAdmin';

ReactDOM.render(
  <Router>
      <div>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/clientes' component={ClientesAdmin} />
              <Route path='/clientes/create' component={ClienteCreate} />
            <Route exact path='/acueductos' component={AcueductosAdmin} />
              <Route path='/acueductos/create' component={AcueductoCreate} />
            <Route exact path='/mediciones' component={MedicionesAdmin} />
              <Route path='/mediciones/create' component={MedicionCreate} />
          </Switch>
      </div>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();