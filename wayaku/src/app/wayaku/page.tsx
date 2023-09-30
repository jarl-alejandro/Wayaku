'use client'
import {Actions, Container, HeaderModule, Title} from '@/app/wayaku/components';
import config from '@/config';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import NewBudget from '@/app/wayaku/NewBudget';

async function getBudgets(token: string) {
    const res = await fetch(`${config.API}${config.ENDPOINTS.budgets}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    })

    return res.json()
}

export interface Budget {
    id: string;
    emoji: string;
    name: string;
    description: string;
    budget: number;
}


export default function Wayaku() {
    const [budgets, setBudgets]  = useState<Budget[]>([]);
    const [budgetEdit, setBudgetEdit]  = useState<Budget>(null);
    const [isOpen, setOpen]  = useState<boolean>(false);

    useEffect(() => {
        const accessToken = localStorage.getItem("access_token");
        getBudgets(accessToken).then(data => setBudgets(data))
    }, [])


    const handleDelete = (id: string) => async  () => {
        const accessToken = localStorage.getItem("access_token");

        const res = await fetch(`${config.API}${config.ENDPOINTS.budgets}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        })
        getBudgets(accessToken).then(data => setBudgets(data))
    }

    const handleOpenForm = () => {
        setOpen(is => !is);
        setBudgetEdit(null);
    }

    const handleSaveResource = () => {
        const accessToken = localStorage.getItem("access_token");
        setOpen(is => !is);
        getBudgets(accessToken).then(data => setBudgets(data))

    }

    const handleEdit = (budget: Budget) => () => {
        setOpen(true);
        setBudgetEdit(budget)
    }

    return (
        <>
            <HeaderModule>
                <Title>Presupuesto</Title>
                <Actions openForm={handleOpenForm} />
            </HeaderModule>
            {!!isOpen && <NewBudget closeForm={handleOpenForm}
                                    budget={budgetEdit}
                                    onSaveResource={handleSaveResource} /> }
            <Container>
                <table className="table-fixed min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Nombre
                            </th>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Descripcion
                            </th>
                            <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                                Presupuesto
                            </th>

                            <th scope="col" className="p-4">
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {budgets.map(item => (
                        <tr className="hover:bg-gray-100" key={item.id}>
                                <td className="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                                    <div className="text-sm font-normal text-gray-500">
                                        <div className="text-base font-semibold text-gray-900">
                                            {item.emoji} {item.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                                    { item.description }
                                </td>
                                <td className="p-4 whitespace-nowrap text-base font-medium text-gray-900">
                                    { item.budget }
                                </td>
                                <td className="p-4 whitespace-nowrap space-x-2">
                                <button
                                    onClick={handleEdit(item)}
                                    className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                        <path fillRule="evenodd"
                                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Editar
                                </button>
                                <button type="button"
                                        onClick={handleDelete(item.id)}
                                        className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

            </Container>
        </>
    )
}
