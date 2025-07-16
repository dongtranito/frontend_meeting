import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3001/profile", {
          credentials: "include", 
        });

        if (res.ok) {
          setIsAuth(true);
          console.log("✅ Đã đăng nhập");
        } else {
          setIsAuth(false);
          console.log("🚫 Chưa đăng nhập");
        }
      } catch (err) {
        console.error("❌ Lỗi kết nối khi kiểm tra login:", err);
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div></div>;

  if (!isAuth) return <Navigate to="/login" replace />;
  return children; 
};

export default ProtectedRoute;
