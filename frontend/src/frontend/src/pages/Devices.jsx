import React from "react";

const devices = [
  { code: "XR-07", brand: "TECHIK", type: "X-RAY", building: "DOYPACK" },
  { code: "MT-07", brand: "LOMA", type: "METAL", building: "DOYPACK" },
  { code: "XR-01", brand: "TECHIK", type: "X-RAY", building: "FİTFİT" },
  { code: "MT-05", brand: "MESUTRONIC", type: "METAL", building: "FİTFİT" },
];

export default function Devices() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Cihaz Listesi</h2>
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Kod</th>
            <th className="p-2 border">Marka</th>
            <th className="p-2 border">Tür</th>
            <th className="p-2 border">Bina</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d, i) => (
            <tr key={i}>
              <td className="p-2 border">{d.code}</td>
              <td className="p-2 border">{d.brand}</td>
              <td className="p-2 border">{d.type}</td>
              <td className="p-2 border">{d.building}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
