import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundLibrary from './pages/BackgroundLibrary';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './components/Library/404.tsx';
import { FiGithub, FiTwitter } from 'react-icons/fi'; 
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow overflow-y-auto relative">
          <div className="flex justify-end p-4 absolute top-4 right-4 z-10">
            <a
              href="https://github.com/zaid-commits/bglib"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 mr-4"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/zaidcommits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              <FiTwitter className="w-5 h-5" />
            </a>
          </div>
          <Routes>
            <Route path="/" element={<BackgroundLibrary />} />
            <Route path="/backgrounds" element={<BackgroundLibrary />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
