export default function Title({ children } : { children: React.ReactNode }) {
    return (
        <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">{ children }</h2>
        </div>
    )
}
