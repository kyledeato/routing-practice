import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayKeyword from './components/DisplayKeyword';
import DisplayColor from './components/DisplayColor';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:keyword" element={<DisplayKeyword/>}/>
        <Route path="/:keyword/:textColor/:backgroundColor" element={<DisplayColor/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
