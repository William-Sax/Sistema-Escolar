import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompShow from './blog/show';
import CompCrearEstudiante from './blog/crearestudiante';
import EditarAlumno from './blog/editarestudiante';
import Login from './estudiantes/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CompShow/>} />
        <Route path='/create' element={<CompCrearEstudiante/>}/>
        <Route path='/edit/:id' element={<EditarAlumno/>}/>
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
