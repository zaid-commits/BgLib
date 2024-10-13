import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/BackgroundLibrary';
import './App.css';
import { AcceptCookies } from './components/AcceptCookies';
import ComponentLibrary from './pages/ComponentLibrary';
import ComponentHome from '@/components/Library/ComponentHome';
import ButtonsPage from '@/components/Library/ButtonsPage';
import FormsPage from '@/components/Library/FormsPage';
import CardsPage from '@/components/Library/CardsPage';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import BackgroundLibrary from './pages/BackgroundLibrary';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BackgroundLibrary />} />
          <Route path="/backgrounds" element={<BackgroundLibrary />} />
          <Route path="/components" element={<ComponentLibrary />}>
            {/* <Route index element={<ComponentHome />} /> */}
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="cards" element={<CardsPage />} />
          </Route>
        </Routes>
        <AcceptCookies />
      </div>
    </Router>
  );
}

export default App;
