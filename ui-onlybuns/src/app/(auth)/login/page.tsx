"use client"

import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen my-10 text-sm ">
            <div className="flex bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl">
                <div className="w-1/2 h-full">
                    <img
                        src="images/login.jpg" // Replace with your image path
                        alt="Register Image"
                        className="w-full h-full object-cover rounded-l-xl"
                    />
                </div>
                <div className="w-1/2 p-8 content-center-ns">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 drop-shadow-[0_1.1px_1.1px_rgba(0,0,0,0.5)]">
                        Login to Your Account
                    </h2>
                    <form action="#" method="POST">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                placeholder="Enter your password"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                        >
                            Login
                        </button>
                    </form>
                    <hr className="border-t border-gray-300 my-4"/>
                    <div className="mt-4 text-center tracking-tighter">
                        <p className="text-gray-700">
                            Don't have an account?{" "}
                            <Link href="/register" className="text-green-800 hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
            }