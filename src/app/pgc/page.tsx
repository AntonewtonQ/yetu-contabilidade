// src/app/page.tsx
import PgcTree from "@/components/pgctree";
import SearchBar from "@/components/searchbar";
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

export default async function Home() {
  const data = await getPgcData();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">Plano Geral de Contabilidade</h1>
      <SearchBar data={data} />
      <PgcTree data={data} />
    </div>
  );
}
