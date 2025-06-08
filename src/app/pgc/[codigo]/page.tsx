// src/app/pgc/[codigo]/page.tsx
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";

interface Conta {
  conta: string;
  descricao: string;
  subcontas?: Conta[];
}

async function getPgcData(): Promise<Conta[]> {
  const filePath = path.join(process.cwd(), "public", "pgc_data.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

function findConta(codigo: string, contas: Conta[]): Conta | null {
  for (const conta of contas) {
    if (conta.conta === codigo) return conta;
    if (conta.subcontas) {
      const found = findConta(codigo, conta.subcontas);
      if (found) return found;
    }
  }
  return null;
}

export default async function ContaPage({
  params,
}: {
  params: { codigo: string };
}) {
  const data = await getPgcData();
  const conta = findConta(params.codigo, data);

  if (!conta) {
    notFound();
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Conta {conta.conta}</h1>
      <p className="mt-2">{conta.descricao}</p>
      {conta.subcontas && conta.subcontas.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Subcontas:</h2>
          <ul className="list-disc pl-6">
            {conta.subcontas.map((sub, index) => (
              <li key={sub.conta + index} className="mt-2">
                <a
                  href={`/pgc/${sub.conta}`}
                  className="text-blue-500 hover:underline"
                >
                  {sub.conta} - {sub.descricao}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
