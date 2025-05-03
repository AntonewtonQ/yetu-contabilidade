"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Encontra aqui as respostas para as dúvidas mais comuns sobre a Yetu
          Contabilidade.
        </p>
      </div>

      <Accordion type="multiple" className="max-w-4xl mx-auto space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Como funciona a inscrição na plataforma?
          </AccordionTrigger>
          <AccordionContent>
            Basta criar uma conta com o teu e-mail, definir uma palavra-passe e
            escolher o nível de aprendizagem (básico, intermédio ou avançado).
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            O acesso aos conteúdos é gratuito?
          </AccordionTrigger>
          <AccordionContent>
            Os quizzes e mapas mentais têm acesso livre. Já as vídeo aulas e
            sessões com formadores requerem pagamento ou plano premium.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            Como posso marcar aulas com um formador?
          </AccordionTrigger>
          <AccordionContent>
            Após o login, terás acesso a um painel onde podes agendar aulas ao
            vivo com base na disponibilidade dos nossos formadores.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>
            Qual é o conteúdo dos níveis básico, intermédio e avançado?
          </AccordionTrigger>
          <AccordionContent>
            O nível básico cobre fundamentos de contabilidade, o intermédio
            aprofunda em práticas fiscais e relatórios, e o avançado foca em
            gestão financeira, auditoria e casos reais de empresas angolanas.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>
            Como posso obter suporte ou tirar dúvidas?
          </AccordionTrigger>
          <AccordionContent>
            Temos uma equipa de apoio ao cliente disponível via chat na
            plataforma e WhatsApp. Também podes enviar e-mails diretamente para
            a nossa equipa pedagógica.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
