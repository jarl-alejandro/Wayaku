import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className="header w-full min-h-screen flex flex-col justify-between">
        <nav
            className="flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-6 py-1 bg-white sm:bg-transparent shadow sm:shadow-none">
            <div
                className="w-full sm:w-auto self-start sm:self-center flex flex-row sm:flex-none flex-no-wrap justify-between items-center">
                <Link href="/" className="no-underline">
                    <Image
                        src="/logo.svg"
                        width={40}
                        height={40}
                        alt="Wayaku"
                        className="h-10 mr-4"
                    />
                </Link>
                <button id="menuBtn" className="hamburger block sm:hidden focus:outline-none" type="button"
                        aria-label="Show Menu"><span className="hamburger__top-bun"></span><span
                    className="hamburger__bottom-bun"></span></button>
            </div>
            <div id="menu"
                 className="w-full sm:w-auto self-end sm:self-center hidden sm:flex flex-col sm:flex-row items-center h-full py-1 pb-4 sm:py-0 sm:pb-0">
                <a className="text-gray-800 font-bold hover:text-purple-600 text-lg text-center w-full no-underline sm:w-auto sm:pr-4 py-2 sm:py-1"
                   href="#about">Sobre mi</a>
                <Link
                    className="text-gray-800 border border-indigo-800 text-lg bg-gray-100 rounded-full w-auto no-underline text-center sm:text-left hover:border-purple-600 hover:text-purple-600 hover:bg-white hover:shadow-md px-6 py-1 my-2 sm:my-0 sm:ml-4"
                    href="/login">Entrar a Wayaku
                </Link>
            </div>
        </nav>


        <div className="flex flex-col justify-center h-full py-12">
            {/*
            <div className="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
                <div className="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8"><h1
                    className="tracking-wide text-purple-600 text-2xl mb-6">New Thing: <span
                    className="text-gray-800 font-bold tracking tracking-widest">AWE.SOME</span></h1><h2
                    className="font-bold tracking-widest text-4xl">Intro goes here...</h2><span
                    className="content__container block font-light text-browngray text-2xl my-6"><ul
                    className="content__container__list"><li className="content__container__list__item xl:pl-3">Cool Feature</li><li
                    className="content__container__list__item xl:pl-3">Another Feature</li><li
                    className="content__container__list__item xl:pl-3">Something Else</li><li
                    className="content__container__list__item xl:pl-3">Why Not</li><li
                    className="content__container__list__item xl:pl-3">Rotating</li><li
                    className="content__container__list__item xl:pl-3">List</li><li
                    className="content__container__list__item xl:pl-3">Items Here</li></ul></span><p
                    className="font-bold tracking-widest text-4xl">...think about it!</p></div>
                <div className="w-full sm:w-1/2">
                    <Image
                        src="/logo.svg"
                        width={100}
                        height={100}
                        alt="Wayaku"
                        className="h-10 mr-4"
                    />

                </div>
            </div>
            */}
        </div>

    </div>
  )
}
