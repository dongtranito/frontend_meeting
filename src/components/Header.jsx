import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:3001/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        navigate("/login", { replace: true });
      } else {
        alert("❌ Đăng xuất thất bại!");
      }
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error);
    }
  };
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full h-12">
      <div className="w-full px-20 py-2 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-blue-600 hover:text-blue-700 transition">
          LogoApp
        </Link>

        {/* Navigation Menu */}
        <nav className="flex space-x-8 text-gray-700 font-medium">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/records"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Record List
          </Link>
          <button
            onClick={handleLogout}
            className="hover:text-red-500 transition-colors duration-200"
          >
            Đăng Xuất
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
