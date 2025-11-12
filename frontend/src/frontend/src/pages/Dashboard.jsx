import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Vardiya Bilgileri</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Vardiya</th>
            <th className="p-2 border">Saat</th>
            <th className="p-2 border">Personel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">1. Vardiya</td>
            <td className="p-2 border">08:00 - 16:00</td>
            <td className="p-2 border">Hasan, Cemal</td>
          </tr>
          <tr>
            <td className="p-2 border">2. Vardiya</td>
            <td className="p-2 border">16:00 - 00:00</td>
            <td className="p-2 border">Şevval, Belgin</td>
          </tr>
          <tr>
            <td className="p-2 border">3. Vardiya</td>
            <td className="p-2 border">00:00 - 08:00</td>
            <td className="p-2 border">Ceyda, Zeynep</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
