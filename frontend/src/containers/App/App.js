/* eslint-disable import/no-named-as-default */
import 'Assets/scss/app.scss';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Dashboard from '../Dashboard/index';
import Routes from './Routes/index';

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/home" component={Dashboard} />
      <Routes />
      <Route path="/" component={() => <Redirect to={{ pathname: '/home' }} />} />
    </BrowserRouter>
  );
}
