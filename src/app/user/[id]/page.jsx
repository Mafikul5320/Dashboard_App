"use client"
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const page = () => {
    const { id } = useParams();
    const router = useRouter();
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => setUser(res?.data))
    }, [])

    return (
        <div className='bg-gray-200 min-h-screen'>
            <div className=" flex justify-center items-center p-6">
                <div className="bg-white rounded-lg shadow-md  w-10/12 p-6">
                    <div className='flex items-center justify-between'>
                        <button onClick={()=>router.push('/')} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mb-6 hover:bg-gray-300">
                            ← Back to Users
                        </button>
                        <h2 className="text-3xl  font-bold text-gray-800 mb-6">User Details</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Personal Information */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Personal Information
                            </h3>
                            <h1 >Name</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.name}
                            </p>

                            <h1 className='mt-3'>Username</h1>
                            <p className="text-lg text-black font-semibold">
                                @{user?.username}
                            </p>

                            <h1 className='mt-3'>Email</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.email}
                            </p>

                            <h1 className='mt-3'>Phone</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.phone}
                            </p>

                            <h1 className='mt-3'>Website</h1>
                            <p className="text-lg text-blue-600 font-semibold">
                                {user?.website}
                            </p>

                        </div>

                        {/* Address */}
                        <div className="bg-gray-50 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Address</h3>
                            <h1 className='mt-3'>Street</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.address?.street}
                            </p>
                            <h1 className='mt-3'>Suite</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.address?.suite}
                            </p>
                            <h1 className='mt-3'>City</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.address?.city}
                            </p>
                            <h1 className='mt-3'>Zipcode</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.address?.zipcode}
                            </p>
                            <h1 className='mt-3'>Geo Location</h1>
                            <p className="text-lg text-black font-semibold">
                                {user?.address?.geo?.lat}
                            </p>
                        </div>
                    </div>

                    {/* Company Info */}
                    <div className="bg-gray-50 rounded-lg p-6 ">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 ">Company</h3>
                            <div className='flex items-center justify-between w-[80%]'>
                                <div>
                                    <h1 className='mt-3'>Company Name</h1>
                                    <p className="text-lg text-black font-semibold">
                                        {user?.company?.name}
                                    </p>
                                </div>
                                <div>
                                    <h1 className='mt-3'>Catch Phrase</h1>
                                    <p className="text-lg text-black font-semibold">
                                        {user?.company?.catchPhrase}
                                    </p>
                                </div>
                                <div>
                                    <h1 className='mt-3'>Business</h1>
                                    <p className="text-lg text-black font-semibold">
                                        {user?.company?.bs}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;