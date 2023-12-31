import { Routes, Route } from 'react-router-dom'
import Main from './pages/main';
import Lottos from './pages/lotto';
import Sora from './pages/sora/sora';
import Question from './pages/sora/Question';
import Output from './pages/sora/output';
import Tree from './pages/tree/tree';
import TreeDetail from './pages/tree/treeDetail';
import TreeInput from './pages/tree/treeInput';
import TreeUpdate from './pages/tree/treeUpdate';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/lotto" element={<Lottos/>}></Route>
        <Route path="/sora" element={<Sora/>}></Route>
        <Route path="/sora/Question" element={<Question/>}></Route>
        <Route path="/sora/Question/output/:id" element={<Output/>}></Route>
        <Route path="/tree" element={<Tree/>}></Route> 
        <Route path="/tree/create" element={<TreeInput/>}></Route>
        <Route path="/tree/:id" element={<TreeDetail/>}></Route>
        <Route path="/tree/update/:id" element={<TreeUpdate/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
