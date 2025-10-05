"use client";

import { useState } from 'react';
import {GreetService} from "../../bindings/changeme";
import { Window } from "@wailsio/runtime";

export default function Home() {
    const [name, setName] = useState<string>('');
    const [result, setResult] = useState<string>('Please enter your name below 👇');
    const doGreet = () => {
        const localName = name.trim() || 'anonymous';
        GreetService.Greet(localName).then((resultValue: string) => {
            setResult(resultValue);
        }).catch((err: any) => {
            console.log(err);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
            <div className="text-center space-y-8 max-w-md w-full">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Next.js + Wails3</h1>

                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                    <p className="text-lg text-gray-700 mb-4">{result}</p>

                    <div className="space-y-3">
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                            onKeyDown={(e) => e.key === 'Enter' && doGreet()}
                        />
                        <button
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition shadow hover:shadow-md"
                            onClick={doGreet}
                        >
                            Greet
                        </button>
                        <button
                            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg transition shadow hover:shadow-md"
                            onClick={() => Window.Minimise() }
                        >
                            Minimise
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}