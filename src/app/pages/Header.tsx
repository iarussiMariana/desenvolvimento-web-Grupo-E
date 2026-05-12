import { Link } from "react-router";
import { useEffect, useState } from "react";

import { auth } from "../contexts/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  function fazerLogout() {
    signOut(auth)
      .then(() => {
        alert("Saiu da conta");
      })
      .catch(console.error);
  }

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Nome */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          PortPrev
        </Link>

        {/* Área direita */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-gray-700 text-sm">
                {user.email}
              </span>
              <button
                onClick={fazerLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Login
              </Link>
              <Link
                to="/cadastro"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Cadastro
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}