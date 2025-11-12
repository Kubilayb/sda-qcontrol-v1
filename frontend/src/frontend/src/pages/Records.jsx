import React from "react";

export default function Records() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Kayıt Girişi</h2>
      <form className="space-y-4">
        <input className="border p-2 w-full rounded" placeholder="Ürün Adı" />
        <input className="border p-2 w-full rounded" placeholder="Parti No" />
        <input className="border p-2 w-full rounded" placeholder="Ağırlık (g)" />
        <input className="border p-2 w-full rounded" placeholder="Reject Sayısı" />
        <textarea className="border p-2 w-full rounded" placeholder="Notlar"></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Kaydet</button>
      </form>
    </div>
  );
}
