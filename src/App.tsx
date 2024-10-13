import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import BackgroundLibrary from './pages/BackgroundLibrary';
import ComponentLibrary from './pages/ComponentLibrary';
import AboutPage from './pages/AboutPage';  // Import the new AboutPage
import ButtonsPage from '@/components/Library/ButtonsPage';
import FormsPage from '@/components/Library/FormsPage';
import CardsPage from '@/components/Library/CardsPage';
import ParallaxScrollPage from '@/components/Library/ParallaxScrollPage';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<BackgroundLibrary />} />
          <Route path="/backgrounds" element={<BackgroundLibrary />} />
          <Route path="/components" element={<ComponentLibrary />}>
            <Route index element={<ButtonsPage />} />
            <Route path="buttons" element={<ButtonsPage />} />
            <Route path="forms" element={<FormsPage />} />
            <Route path="parallax-scroll" element={<ParallaxScrollPage />} />
            <Route path="cards" element={<CardsPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />  {/* Add this line */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;