import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpeechToText from "./components/SpeechToText";
import SummaryReport from './components/SummaryReport';
import NoteViewReadOnly from './components/NoteViewReadOnly';
import PDFViewer from './components/PDFViewer';
import BienBanCuocHop from './components/bienBanCuocHop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router className="flex flex-col h-screen">
      <Header /> {/* Header cố định, ở tất cả page */}

      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
        {/* <Route path="/records" element={<RecordList />} /> */}
      </Routes>
      {/* <Footer /> Footer cũng ở tất cả page */}
    </Router>
  );
}

export default App
