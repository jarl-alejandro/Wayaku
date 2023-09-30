'use client'

import {useState} from 'react';
import {Budget} from '@/app/wayaku/page';
import { v4 as uuidv4 } from 'uuid';
import config from '@/config';

export interface BudgetCDM {
    emoji: string;
    name: string;
    description: string;
    budget: number;
}

export default function NewBudget({ closeForm, onSaveResource, budget  }: { closeForm: any, budget: Budget }) {
    const [form, setForm]  = useState<BudgetCDM>({
        emoji: budget?.emoji || '',
        name: budget?.name || '',
        description: budget?.description || '',
        budget: budget?.budget || 10
    });

    const handleChangeForm = ({ target: { value, name } }) => {
        setForm(Object.assign({}, form, {
            [name]: value
        }));
    }

    const handelSaved = async () => {
        const accessToken = localStorage.getItem("access_token");
        const res = await fetch(`${config.API}${config.ENDPOINTS.budgets}/${!budget ? uuidv4() : budget.id}`, {
            method: 'PUT',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        })

        onSaveResource()
    }

    return(
        <>
            <div
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
                className="overflow-x-hidden overflow-y-auto fixed top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center h-modal sm:h-full flex"
                 aria-modal="true" role="dialog">
                <div className="relative w-full max-w-2xl px-4 h-full md:h-auto">

                    <div className="bg-white rounded-lg shadow relative">

                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">
                                Nuevo presupuesto
                            </h3>
                            <button type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    onClick={closeForm}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                          clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <form action="#">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="emoji"
                                               className="text-sm font-medium text-gray-900 block mb-2">Emoji</label>
                                        <input type="text" name="emoji" id="emoji"
                                               onChange={handleChangeForm} value={form.emoji}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                               placeholder="Bonnie" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Nombre</label>
                                        <input type="text" name="name" id="name"
                                               onChange={handleChangeForm} value={form.name}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                               placeholder="Green" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="description"
                                               className="text-sm font-medium text-gray-900 block mb-2">Descripcion</label>
                                        <input type="text" name="description" id="description" value={form.description}
                                               onChange={handleChangeForm}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                               placeholder="Transporte" required="" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="budget"
                                               className="text-sm font-medium text-gray-900 block mb-2">Presupuesto</label>
                                        <input type="number" name="budget" id="budget"
                                               onChange={handleChangeForm} value={form.budget}
                                               className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                                               placeholder="123456" required="" />
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="items-center p-6 border-t border-gray-200 rounded-b">
                            <button
                                onClick={handelSaved}
                                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                type="submit">Guardar
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="  hidden fixed inset-0 z-10"></div>
        </>
    )
}
