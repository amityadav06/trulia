import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './data/routes.json';
import { NavigationMenuDemo } from './components/Navigation';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Help from './components/Help';
import NewHome from './components/NewHome';

// @ts-ignore
const MainPage = ({ title }) => <h2>{title} Page</h2>;

const App = () => {
  return (
    <Router>
      <div>
        <NavigationMenuDemo />
        <Routes>
          {routes.map((route) =>
            route.links.map((link) => (
              <Route
                key={link.label}
                path={link.url}
              />
            ))
          )}
        </Routes>
      </div>
      <Hero />
      <Gallery />
      <NewHome />
      <Help />
    </Router>
  );
};

export default App;
