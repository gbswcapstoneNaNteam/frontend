import { Routes, Route } from 'react-router-dom'
import Main from './pages/main';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
