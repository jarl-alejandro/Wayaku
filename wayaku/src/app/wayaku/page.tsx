import {Actions, Container, HeaderModule, Title} from '@/app/wayaku/components';

export default function Wayaku() {
    return (
        <>
            <HeaderModule>
                <Title>Dashboard</Title>
                <Actions />
            </HeaderModule>
            <Container>


                <table className="table-fixed min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Nombre
                            </th>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Cargo
                            </th>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Ciudad
                            </th>

                            <th scope="col" className="p-4">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="hover:bg-gray-100">

                            <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                                <div className="text-sm font-normal text-gray-500">
                                    <div className="text-base font-semibold text-gray-900">Alejandro Rivas</div>
                                    <div className="text-sm font-normal text-gray-500">
                                        jarlalejor@gmaill.com
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                                Backend developer
                            </td>
                            <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                                Ecuador
                            </td>
                            <td className="p-4 whitespace-nowrap space-x-2">
                            <button type="button"
                                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                    <path fill-rule="evenodd"
                                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                Editar
                            </button>
                            <button type="button"
                                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                Eliminar
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </Container>
        </>
    )
}
