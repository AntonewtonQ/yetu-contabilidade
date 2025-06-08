import Link from "next/link";

interface Conta {
  conta: string;
  descricao: string;
  subcontas?: Conta[];
}

interface PgcTreeProps {
  data: Conta[];
}

export default function PgcTree({ data }: PgcTreeProps) {
  return (
    <ul className="list-none">
      {data.map((conta) => (
        <li key={conta.conta} className="mb-2">
          <Link
            href={`/pgc/${conta.conta}`}
            className="text-blue-500 hover:underline"
          >
            {conta.conta} - {conta.descricao}
          </Link>
          {conta.subcontas && conta.subcontas.length > 0 && (
            <div className="ml-4 border-l pl-4">
              <PgcTree data={conta.subcontas} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
