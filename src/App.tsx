import { Routes, Route } from 'react-router-dom'
import Main from './pages/main';
import Lotto from './pages/lotto';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/lotto" element={<Lotto/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
