export default function HeaderModule({ children } : { children: React.ReactNode }) {
    return (
        <section className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
            <div className="mb-1 w-full">
                { children }
            </div>
        </section>
    )
}
