import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import Devices from "./pages/Devices";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">SDA QControl V1</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Ana Sayfa</Link>
            <Link to="/records" className="hover:underline">Kayıtlar</Link>
            <Link to="/devices" className="hover:underline">Cihazlar</Link>
          </nav>
        </header>
        <main className="flex-1 p-6 bg-gray-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/records" element={<Records />} />
            <Route path="/devices" element={<Devices />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
