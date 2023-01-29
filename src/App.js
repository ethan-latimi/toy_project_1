import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { RecoilRoot } from 'recoil';
import Landing from './pages/landing'
import CharacterCounter from "./pages/characterCounter";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/counter" element={<CharacterCounter />}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
