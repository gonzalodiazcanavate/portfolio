import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import ProjectDetails from './pages/ProjectDetails';
import {LanguageProvider} from './context/LanguageContext';
import '@/App.css';

function App() {

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
          <Route path='/project/:id' element={<ProjectDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;