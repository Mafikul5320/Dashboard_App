import axios from 'axios';
import React from 'react';

const Home = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  const Users = res.data;
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <div className="bg-white shadow-md rounded-lg w-10/13 p-6">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>

        {/* Search Bar */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name or email"
            className="flex-1 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-6 rounded-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3 font-medium">NAME</th>
                <th className="p-3 font-medium">EMAIL</th>
                <th className="p-3 font-medium">PHONE</th>
                <th className="p-3 font-medium">COMPANY</th>
              </tr>
            </thead>
            <tbody>
              {Users?.map(user => (
                <tr key={user.id} className="border-t border-gray-200 hover:bg-gray-100">
                  <td className="p-3">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">@{user.username}</div>
                  </td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;