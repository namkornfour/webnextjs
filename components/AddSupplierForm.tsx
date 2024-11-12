// @/components/AddSupplierForm.tsx
'use client';

import React, { useState } from 'react';
import { addSupplier } from '@/lib/supplier';
import mongodbConnect from '@/lib/mongodb';

export default function AddSupplierForm() {
    const [name, setName] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<{ text: string; error: boolean }>({
        text: '',
        error: false,
    });

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        try {
            await mongodbConnect();
            await addSupplier({ name, location });
            setMessage({ text: 'Supplier added successfully!', error: false });
            setName('');
            setLocation('');
        } catch (error: any) {
            setMessage({ text: error.message, error: true });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex justify-center mx-auto w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border border-blue-500 p-2"
                    />
                </div>
                <div>
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        className="border border-blue-500 p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary text-white"
                    disabled={isLoading}
                >
                    {isLoading ? 'Adding...' : 'Add Supplier'}
                </button>
                {message.text && (
                    <div className={message.error ? 'text-red-500' : 'text-green-500'}>
                        {message.text}
                    </div>
                )}
            </form>
        </div>
    );
}
