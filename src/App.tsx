import { Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div>
      <Outlet />
    </div>
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/character/:id' element={<Detail />} />
    // </Routes>
  );
}

export default App;
