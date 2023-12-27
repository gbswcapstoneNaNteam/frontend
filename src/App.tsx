import { Routes, Route } from 'react-router-dom'
import Main from './pages/main';
import Lotto from './pages/lotto';
import Sora from './pages/sora/sora';
import Question from './pages/sora/Question';
import Output from './pages/sora/output';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/lotto" element={<Lotto/>}></Route>
        <Route path="/sora" element={<Sora/>}></Route>
            <Route path="/sora/Question" element={<Question/>}></Route>
            <Route path="/sora/Question/output/:id" element={<Output/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
