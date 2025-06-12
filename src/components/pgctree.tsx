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
    <ul className="list-none pl-2">
      {data.map((conta) => (
        <li key={conta.conta} className="mb-1">
          <div className="flex items-start space-x-2">
            <div className="w-1 h-full border-l-2 border-gray-300"></div>
            <div className="bg-gray-100 rounded-md px-2 py-1 shadow-sm">
              <span className="font-semibold text-sm text-gray-800">
                {conta.conta}
              </span>{" "}
              <span className="text-gray-600 text-sm">– {conta.descricao}</span>
            </div>
          </div>
          {conta.subcontas && conta.subcontas.length > 0 && (
            <div className="ml-4 mt-1">
              <PgcTree data={conta.subcontas} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
