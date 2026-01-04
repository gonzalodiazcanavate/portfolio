import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import ProjectDetails from './pages/ProjectDetails';
import '@/App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/project/:id' element={<ProjectDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
