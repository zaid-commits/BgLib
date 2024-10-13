import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css';
import { AcceptCookies } from './components/AcceptCookies';
import ComponentLibrary from './pages/ComponentLibrary';
import ComponentHome from '@/components/Library/ComponentHome';
import ButtonsPage from '@/components/Library/ButtonsPage';
import FormsPage from '@/components/Library/FormsPage';
import CardsPage from '@/components/Library/CardsPage';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentLibrary />}>
            <Route index element={<ComponentHome />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="cards" element={<CardsPage />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
        <AcceptCookies />
      </div>
    </Router>
  );
}

export default App;
