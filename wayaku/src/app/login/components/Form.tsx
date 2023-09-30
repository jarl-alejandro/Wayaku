'use client'

import Link from 'next/link';
import Image from 'next/image'

import {useState} from 'react';
import config from '@/config';
import { useRouter } from 'next/navigation'

export default function Form() {
    const router = useRouter()

    const handleChangeForm = ({ target: { value, name } }) => {
        setLoginForm(Object.assign({}, loginForm, {
            [name]: value
        }));
    }
    const [ loginForm, setLoginForm ] = useState({ username: '', password: ''  });

    const handleLogin = async (event) => {
        event.preventDefault();
        const res = await fetch(config.oauth.AUTH, {
            method: "POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                client_id: config.oauth.CLIENT_ID,
                client_secret: config.oauth.CLIENT_SECRET,
                grant_type: config.oauth.GRANT_TYPE,
                ...loginForm
            }).toString(),
        });
        const data = await res.json();

        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("token_type", data.token_type);
        router.push('/wayaku')
    }

    return (
        <div className="mx-auto md:h-screen flex flex-col justify-center items-center px-6 pt-8 pt:mt-0">
            <a href="https://demo.themesberg.com/windster/"
               className="text-2xl font-semibold flex justify-center items-center mb-8 lg:mb-10">
                <Image
                    src="/logo.svg"
                    width={40}
                    height={40}
                    alt="Wayaku"
                    className="h-10 mr-4"
                />
                <span className="self-center text-2xl font-bold whitespace-nowrap">Wayaku</span>
            </a>

            <div className="bg-white shadow rounded-lg md:mt-0 w-full sm:max-w-screen-sm xl:p-0">
                <div className="p-6 sm:p-8 lg:p-16 space-y-8">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">Iniciar sesión</h2>
                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username" className="text-sm font-medium text-gray-900 block mb-2">Username</label>
                            <input type="username" name="username" id="username"
                                   onChange={handleChangeForm}
                                   value={loginForm.username}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                   placeholder="username" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   onChange={handleChangeForm}
                                   value={loginForm.password}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                   required="" />
                        </div>
                        <button type="submit"
                                id="entryWayaku"
                                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center">
                            Entrar a Wayaku
                        </button>
                        <div className="text-sm font-medium text-gray-500">
                            ¿No está registrado? <Link href="/register" className="text-teal-500 hover:underline">crear una cuenta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
