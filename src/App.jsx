
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import MainLayout from './layouts/MainLayout';
import MeetingListDemo from './pages/RecordList/MeetingList';
console.log('API_URL:', import.meta.env.VITE_API_URL);
function App() {
  return (
    <Router>
      <Routes>
        <Route path="meeting/:meetingID" element={
          //dùng mainLayout để cho nó có header cho từng thằng trừ thằng cần đăng nhập 
          <MainLayout>
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </MainLayout>
        } />
        <Route path="/" element={
          //dùng mainLayout để cho nó có header cho từng thằng trừ thằng cần đăng nhập 
          <MainLayout>
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </MainLayout>
        } />

        <Route path="/records" element={
          //dùng mainLayout để cho nó có header cho từng thằng trừ thằng cần đăng nhập 
          <MainLayout>
            <ProtectedRoute>
              <MeetingListDemo />
            </ProtectedRoute>
          </MainLayout>
        } />


        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App
