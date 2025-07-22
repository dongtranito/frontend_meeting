import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { fetchWithAuth } from "../utils/fetchWithAuth";

const PublicRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetchWithAuth("http://localhost:3001/profile", {
          credentials: "include",
        });

        if (res.ok) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      } catch (err) {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div ></div>;

  if (isAuth) return <Navigate to="/" replace />;
  return children;
};

export default PublicRoute;
