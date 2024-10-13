import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { AcceptCookies } from './components/AcceptCookies';
import ComponentLibrary from './pages/ComponentLibrary';
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
            <Route index element={<Navigate to="buttons" replace />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="cards" element={<CardsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
        <AcceptCookies />
      </div>
    </Router>
  );
}


export default App;
