import {Aside, Header} from '@/app/wayaku/components';

export default function LayoutWayaku({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <section className="flex overflow-hidden bg-white pt-16">
                <Aside />
                <div className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                <section className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                    {children}
                </section>
            </section>
        </>
    )
}
