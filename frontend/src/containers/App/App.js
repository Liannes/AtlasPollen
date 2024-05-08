/* eslint-disable import/no-named-as-default */
import 'Assets/scss/app.scss';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/index';
import PageView from '../Shared/pageView';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/1" component={PageView} />
        <Route path="/2" component={PageView} />
        <Route path="/3" component={PageView} />
        <Route path="/4" component={PageView} />
        <Route path="/5" component={PageView} />
        <Route path="/6" component={PageView} />
        <Route path="/7" component={PageView} />
        <Route path="/8" component={PageView} />
        <Route path="/9" component={PageView} />
        <Route path="/10" component={PageView} />
        <Route path="/11" component={PageView} />
        <Route path="/12" component={PageView} />
        <Route path="/13" component={PageView} />
        <Route path="/14" component={PageView} />
        <Route path="/15" component={PageView} />
        <Route path="/16" component={PageView} />
        <Route path="/17" component={PageView} />
        <Route path="*" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
