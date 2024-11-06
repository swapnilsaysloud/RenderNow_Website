import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhyRender from './pages/WhyRender';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-render" element={<WhyRender />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;