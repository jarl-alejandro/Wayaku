export default function Container ({ children } : { children: React.ReactNode }) {
    return (
        <section className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
