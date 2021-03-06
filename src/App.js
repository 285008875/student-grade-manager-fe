import React, { Suspense, lazy } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Store from './store/index';
import Login from './container/login';
import Forget from './container/forget';
import Nprogress from './components/nprogress/index';
const Student = lazy(() => import('./role/student'));
const Admin = lazy(() => import('./role/admin'));
const Teacher = lazy(() => import('./role/teacher'));
const Monitor = lazy(() => import('./role/monitor'));
function App() {

  return (

    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <BrowserRouter>
          <Switch>
            <Suspense fallback={<Nprogress animationDuration={3000} incrementDuration={5500} />}>
              <Route path="/admin" component={Admin} />
              <Route path="/student" component={Student} />
              <Route path="/monitor" component={Monitor} />
              <Route path="/teacher" component={Teacher}/>
              <Route exact strict path="/login" component={Login} />
              <Route exact strict path="/forget" component={Forget} />
              <Route exact path="./common/state"/>
              <Route exact path="./common/new"/>
            </Suspense>
          </Switch>
        </BrowserRouter >
      </PersistGate>
    </Provider >

  )
}
export default App;
