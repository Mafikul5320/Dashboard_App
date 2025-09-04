"use client"
import Spinner from '@/app/components/Spinner';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

const page = () => {
    const { id } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState();
    useEffect(() => {
        setLoading(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
            setUser(res?.data)
            setLoading(false)
        })
    }, [])

    return (
        <div className="bg-gray-200">
            <div className="flex justify-center items-center p-4 sm:p-6 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-lg shadow-md w-full max-w-6xl p-4 sm:p-6"
                >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <button
                            onClick={() => router.push("/")}
                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
                        >
                            ← Back to Users
                        </button>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            User Details
                        </h2>
                    </div>

                    {loading && <Spinner />}

                    {/* Personal Info + Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 mt-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="bg-gray-50 rounded-lg p-4 sm:p-6"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Personal Information
                            </h3>
                            <h1>Name</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">{user?.name}</p>

                            <h1 className="mt-3">Username</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                @{user?.username}
                            </p>

                            <h1 className="mt-3">Email</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">{user?.email}</p>

                            <h1 className="mt-3">Phone</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">{user?.phone}</p>

                            <h1 className="mt-3">Website</h1>
                            <p className="text-base sm:text-lg text-blue-600 font-semibold">
                                {user?.website}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-gray-50 rounded-lg p-4 sm:p-6"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Address</h3>
                            <h1>Street</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                {user?.address?.street}
                            </p>

                            <h1 className="mt-3">Suite</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                {user?.address?.suite}
                            </p>

                            <h1 className="mt-3">City</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                {user?.address?.city}
                            </p>

                            <h1 className="mt-3">Zipcode</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                {user?.address?.zipcode}
                            </p>

                            <h1 className="mt-3">Geo Location</h1>
                            <p className="text-base sm:text-lg text-black font-semibold">
                                {user?.address?.geo?.lat}, {user?.address?.geo?.lng}
                            </p>
                        </motion.div>
                    </div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="bg-gray-50 rounded-lg p-4 sm:p-6"
                    >
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Company</h3>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-4 sm:gap-6 mt-4">
                            <div>
                                <h1>Company Name</h1>
                                <p className="text-base sm:text-lg text-black font-semibold">
                                    {user?.company?.name}
                                </p>
                            </div>
                            <div>
                                <h1>Catch Phrase</h1>
                                <p className="text-base sm:text-lg text-black font-semibold">
                                    {user?.company?.catchPhrase}
                                </p>
                            </div>
                            <div>
                                <h1>Business</h1>
                                <p className="text-base sm:text-lg text-black font-semibold">
                                    {user?.company?.bs}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    );
};

export default page;