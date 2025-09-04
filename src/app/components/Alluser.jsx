"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { motion, AnimatePresence } from "framer-motion";

const Alluser = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setLoading(true)
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data)
                setLoading(false)
            });
    }, []);

    const handleSearch = async () => {
        if (!search) return;
        setLoading(true)
        try {
            const res = await axios.get(
                `https://jsonplaceholder.typicode.com/users`
            );
            const user = res.data.find((u) => u.name.toLowerCase() === search.toLowerCase() || u.email.toLowerCase() === search.toLowerCase());

            if (user) {
                setUsers([user]);
                setError("");
            } else {
                setUsers([]);
                setError("User not found");
            }
        } catch (err) {
            setError("Something went wrong!");
            setUsers([]);
        } finally {
            setLoading(false)
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center py-6 sm:py-10">
            <div className="bg-white shadow-md rounded-lg w-10/12 p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold mb-4">User Management</h1>

                {/* Search Bar */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        placeholder="Search by name or email"
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full sm:flex-1 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Search
                    </button>
                </div>

                {loading && <Spinner />}
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm sm:text-base">
                        <thead>
                            <tr className="bg-gray-100 text-gray-700">
                                <th className="p-2 sm:p-3 font-medium">NAME</th>
                                <th className="p-2 sm:p-3 font-medium">EMAIL</th>
                                <th className="p-2 sm:p-3 font-medium">PHONE</th>
                                <th className="p-2 sm:p-3 font-medium">COMPANY</th>
                            </tr>
                        </thead>
                        <tbody>
                            <AnimatePresence>
                                {users?.map((user) => (
                                    <motion.tr
                                        key={user.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        onClick={() => router.push(`/user/${user.id}`)}
                                        className="border-t border-gray-200 hover:bg-gray-100 cursor-pointer"
                                    >
                                        <td className="p-2 sm:p-3">
                                            <div className="font-medium text-gray-700">{user.name}</div>
                                            <div className="text-xs sm:text-sm text-gray-500">@{user.username}</div>
                                        </td>
                                        <td className="p-2 sm:p-3">{user.email}</td>
                                        <td className="p-2 sm:p-3">{user.phone}</td>
                                        <td className="p-2 sm:p-3">{user.company.name}</td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );
};

export default Alluser;
