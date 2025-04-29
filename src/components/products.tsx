import React from "react";

const ProductsSection = () => {
  return (
    <div>
      {/* Produtos */}
      <section id="produtos" className="py-16 px-6 md:px-24 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Produtos e Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quiz",
              description: "Teste seus conhecimentos com quizzes dinâmicos.",
            },
            {
              title: "Vídeo Aulas",
              description: "Acesso a conteúdos exclusivos e pagos.",
            },
            {
              title: "Aulas Interativas",
              description: "Agende aulas ao vivo com formadores.",
            },
            {
              title: "Mapa Mental",
              description: "Visualize resumos de conteúdo de forma clara.",
            },
            {
              title: "Apoio ao Cliente",
              description: "Suporte rápido para suas dúvidas.",
            },
            {
              title: "Avaliação",
              description: "Deixe sua opinião e nos ajude a melhorar.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductsSection;
