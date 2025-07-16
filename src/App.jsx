
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router className="flex flex-col h-screen">
      <Header />


      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />

        {/* <Route path="/auth" element={<Auth />} /> */}
        {/* <Route path="/records" element={<RecordList />} /> */}
        <Route path="/login" element={<Login />} />

      </Routes>
      {/* <Footer /> Footer cũng ở tất cả page */}
    </Router>
  );
}

export default App
