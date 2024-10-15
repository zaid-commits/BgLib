import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundLibrary from './pages/BackgroundLibrary';
import ComponentLibrary from './pages/ComponentLibrary';
import AboutPage from './pages/AboutPage';
import ButtonsPage from '@/components/Library/ButtonsPage';
import FormsPage from '@/components/Library/FormsPage';
import CardsPage from '@/components/Library/CardsPage';
import ParallaxScrollPage from '@/components/Library/ParallaxScrollPage';
import NotFoundPage from './components/Library/404';
import Navbar from './components/Navbar';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow overflow-y-auto">
          <Routes>
            <Route path="/" element={<BackgroundLibrary />} />
            <Route path="/backgrounds" element={<BackgroundLibrary />} />
            <Route path="/components" element={<ComponentLibrary />}>
              <Route index element={<ButtonsPage />} />
              <Route path="buttons" element={<ButtonsPage />} />
              <Route path="forms" element={<FormsPage />} />
              <Route path="parallax-scroll" element={<ParallaxScrollPage />} />
              <Route path="cards" element={<CardsPage />} />
              <Route path="not-found" element={<NotFoundPage />} />
            </Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
