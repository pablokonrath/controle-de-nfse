import React from 'react';

export default function Inicio() {
  return (
    <>
      <nav
        className="mt-4 mr-3 p-4 sm:ml-72 flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4 borderPadrao"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              <span className="text-lg">Inicio</span>
            </a>
          </li>
        </ol>
      </nav>
      <div className="p-4 sm:ml-72  bg-white borderPadrao mr-3 py-10">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center flex-col  rounded bg-gray-50 dark:bg-gray-800 cardPadrao gap-5 pb-5">
            <h1 className="confirmada">Notas Confirmadas</h1>
            <p>R$ 15.000,00</p>
          </div>
          <div className="flex items-center justify-center flex-col  rounded bg-gray-50 dark:bg-gray-800 cardPadrao gap-5 pb-5">
            <h1 className="emAberto">Notas em aberto</h1>
            <p>R$ 70.000,00</p>
          </div>
          <div className="flex items-center justify-center flex-col  rounded bg-gray-50 dark:bg-gray-800 cardPadrao gap-5 pb-5">
            <h1 className="cancelada">Notas canceladas</h1>
            <p>R$ 10.000,00</p>
          </div>
        </div>
        <h2>Ultimas notas registradas</h2>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome da Empresa
                </th>
                <th scope="col" className="px-6 py-3">
                  Responsavel
                </th>
                <th scope="col" className="px-6 py-3">
                  Nº Nfs-e
                </th>
                <th scope="col" className="px-6 py-3">
                  Situação
                </th>
                <th scope="col" className="px-6 py-3">
                  Valor
                </th>
                <th scope="col" className="px-6 py-3">
                  Data
                </th>
                <th scope="col" className="px-6 py-3">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Oderich
                </th>
                <td className="px-6 py-4">Paulo</td>
                <td className="px-6 py-4">210</td>
                <td className="px-6 py-4">Em aberto</td>
                <td className="px-6 py-4">R$50.000,00</td>
                <td className="px-6 py-4">12-10-2024</td>
                <td className="flex items-center px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                  >
                    Remove
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
