"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        address: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSuccess, setFormSuccess] = useState(false);

    // Handle form input changes
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validate form data
    const validate = () => {
        const errors: { [key: string]: string } = {};

        if (!formData.email) errors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is not valid';

        if (!formData.username) errors.username = 'Username is required';

        if (!formData.password) errors.password = 'Password is required';
        else if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters';

        if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';

        if (!formData.name) errors.name = 'Name is required';
        if (!formData.surname) errors.surname = 'Surname is required';

        if (!formData.address) errors.address = 'Address is required';

        return errors;
    };

    // Handle form submission
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            // Send a POST request to your backend
            const response = await fetch('http://localhost:8080/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Handle unsuccessful registration
                const errorData = await response.json();
                setErrors(errorData.errors || {});
                setIsSubmitting(false);
                return;
            }

            // Handle success (e.g., show a success message or redirect to another page)
            setFormSuccess(true);
        } catch (error) {
            // Handle any errors that occur during the fetch request
            console.error('Error registering user:', error);
            setErrors({ general: 'An error occurred while registering. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen my-10 text-sm">
            <div className="flex bg-white p-8 rounded-xl shadow-lg w-full max-w-5xl">
                <div className="w-1/2 h-full center">
                    <img
                        src="images/register.jpg"
                        alt="Register Image"
                        className="w-full h-full object-cover rounded-l-xl"
                    />
                </div>
                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6 drop-shadow-[0_1.1px_1.1px_rgba(0,0,0,0.5)]">
                        Create Your Account
                    </h2>

                    {formSuccess ? (
                        <div className="text-green-700 text-center mb-6 border-2 rounded-lg text-lg font-bold p-4">
                            <p>Account created successfully! Please check your email to activate your account.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="block text-gray-600 ">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="surname" className="block text-gray-600 ">Surname</label>
                                <input
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleInputChange}
                                    placeholder="Enter your surname"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address" className="block text-gray-600 ">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter your address"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="block text-gray-600 ">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="username" className="block text-gray-600 ">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    placeholder="Enter your username"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="block text-gray-600">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="block text-gray-600">Confirm
                                    Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-800"
                                />
                                {errors.confirmPassword &&
                                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                            </div>


                            <button
                                type="submit"
                                className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Submitting...' : 'Register'}
                            </button>
                        </form>
                    )}
                    <hr className="border-t border-gray-300 my-4"/>
                    <div className="mt-4 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="text-green-800 hover:underline">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
            }
