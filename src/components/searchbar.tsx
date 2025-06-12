"use client";
import { useState } from "react";

interface Conta {
  conta: string;
  descricao: string;
  subcontas?: Conta[];
}

interface SearchBarProps {
  data: Conta[];
}

export default function SearchBar({ data }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const filterData = (query: string, contas: Conta[]): Conta[] => {
    let results: Conta[] = [];
    for (const conta of contas) {
      if (
        conta.conta.toLowerCase().includes(query.toLowerCase()) ||
        conta.descricao.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(conta);
      }
      if (conta.subcontas) {
        results = results.concat(filterData(query, conta.subcontas));
      }
    }
    return results;
  };

  const results = query ? filterData(query, data) : [];

  return (
    <div className="my-6">
      <input
        type="text"
        placeholder="Pesquisar conta ou descrição..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {results.length > 0 && (
        <ul className="mt-4 space-y-2">
          {results.map((conta, index) => (
            <li
              key={conta.conta + index}
              className="bg-gray-100 rounded-md px-3 py-2 shadow-sm"
            >
              <p className="text-sm font-medium text-gray-800">{conta.conta}</p>
              <p className="text-sm text-gray-600">{conta.descricao}</p>
            </li>
          ))}
        </ul>
      )}

      {query && results.length === 0 && (
        <p className="text-sm text-red-500 mt-4">Nenhuma conta encontrada.</p>
      )}
    </div>
  );
}
