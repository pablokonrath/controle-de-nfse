import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
export default function AddCliente() {
  const { register, handleSubmit, reset } = useForm();
  const [clientes, setClientes] = useState('');

  function cadastrarCliente(dados) {
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push({
      empresa: dados.empresa,
      responsavel: dados.responsavel,
      telefone: dados.telefone,
      email: dados.email,
    });

    setClientes(clientes);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    toast.success('Ok! Cliente Registrado', {
      position: 'top-right',
    });
    reset();
  }

  return (
    <>
      <div className="p-5">
        <h2 className="text-center py-5 text-3xl">Cadastro de Empresa</h2>

        <form onSubmit={handleSubmit(cadastrarCliente)}>
          <div className="grid gap-6 mb-6 md:grid-cols-1">
            <div>
              <label
                htmlFor="empresa"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nome da Empresa
              </label>
              <input
                type="text"
                id="empresa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                {...register('empresa')}
              />
            </div>
            <div>
              <label
                htmlFor="Responsavel"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nome do Responsavel
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                {...register('responsavel')}
              />
            </div>
            <div>
              <label
                htmlFor="telefone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                required
                {...register('telefone')}
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
              {...register('email')}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-800"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </>
  );
}
