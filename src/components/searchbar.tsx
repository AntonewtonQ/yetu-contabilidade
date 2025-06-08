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
    <div className="my-4">
      <input
        type="text"
        placeholder="Pesquisar conta ou descrição..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded px-4 py-2 w-full"
      />
      {results.length > 0 && (
        <ul className="mt-4">
          {results.map((conta, index) => (
            <li key={conta.conta + index} className="mb-2">
              <a
                href={`/pgc/${conta.conta}`}
                className="text-blue-500 hover:underline"
              >
                {conta.conta} - {conta.descricao}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
