import { Route, Routes } from 'react-router-dom';
import Home from './day6-7/Home';
import Detail from './day6-7/Detail';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/character/:id' element={<Detail />} />
    </Routes>
  );
}

export default App;
