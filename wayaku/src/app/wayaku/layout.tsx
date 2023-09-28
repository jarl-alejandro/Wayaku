import {Aside, Header} from '@/app/wayaku/components';

export default function LayoutWayaku({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <section className="flex overflow-hidden bg-white pt-16">
                <Aside />
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <section className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    <section className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                        <div className="mb-1 w-full">
                            <div className="mb-4">
                                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Wayaku [modulo]</h2>
                            </div>
                            <section className="sm:flex">
                                {children}
                            </section>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}
