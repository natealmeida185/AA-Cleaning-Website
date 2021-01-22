import './App.css';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import home from './components/pages/home-page';
import gallery from './components/pages/gallery-page';
import apply from './components/pages/apply-page';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/gallery' exact component={gallery} />
        <Route path='/apply' exact component={apply} />
      </Switch>
      <Footer />
    </Router>
    </>
  );
}

export default App;
