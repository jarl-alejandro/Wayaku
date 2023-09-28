import Link from 'next/link';
import Image from 'next/image'

export default function Login() {
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
                    <form className="mt-8 space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                            <input type="email" name="email" id="email"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                   placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Contraseña</label>
                            <input type="password" name="password" id="password" placeholder="••••••••"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                   required="" />
                        </div>
                        <button type="submit"
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
