import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const API_URL = import.meta.env.VITE_API_URL;
console.log ("login",API_URL);
console.log("import", import.meta.env)
const firebaseConfig = {
    apiKey: "AIzaSyDHdcsvn-HGr2BAPWKCxLZSedIKK-3VdWs",
    authDomain: "metting-fcbcf.firebaseapp.com",
    projectId: "metting-fcbcf",
    storageBucket: "metting-fcbcf.firebasestorage.app",
    messagingSenderId: "872922744229",
    appId: "1:872922744229:web:2c149e701ac46d415e944c",
    measurementId: "G-W8H5DSWSBW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Login = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        setError("");
        setLoading(true);

        try {

            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            const idToken = await user.getIdToken();

            const res = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ idToken }),
                credentials: "include",
            });

            if (res.ok) {
                const data = await res.json();
                console.log("✅ Server xác minh:", data);
                navigate("/"); 
            } else {
                const errorData = await res.json();
                setError(errorData.message || "Đăng nhập thất bại.");
            }

        } catch (err) {
            console.error("❌ Đăng nhập thất bại:", err);
            setError("Đăng nhập thất bại. Vui lòng thử lại.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h2 className="text-2xl font-semibold mb-6">Đăng nhập bằng Google</h2>

            <button
                onClick={handleLogin}
                disabled={loading}
                className="flex items-center px-5 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl shadow hover:shadow-md hover:bg-gray-50 transition duration-200 disabled:opacity-60"
            >
                <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-6 h-6 mr-3"
                />
                <span className="text-sm font-medium">
                    {loading ? "Đang đăng nhập..." : "Login with Google"}
                </span>
            </button>

            {error && (
                <p className="mt-4 text-red-500 text-sm">{error}</p>
            )}
        </div>
    );
};

export default Login;
