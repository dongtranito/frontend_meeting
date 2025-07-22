
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
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
              {/* <Records /> */}
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
