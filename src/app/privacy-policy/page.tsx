import React from 'react';

export default function PrivacyPolicy() {
  return (
    <article className="flex flex-col justify-center items-center gap-5 md:gap-10 py-3 md:py-7 mx-2 sm:mx-5 md:mx-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Política de Privacidade</h1>

      <header className="text-xl md:text-2xl">
        Esta Política de privacidade descreve como suas informações pessoais são coletadas, usadas e
        compartilhadas quando você visita ou faz uma compra no www.casadasferramentas.com.br
      </header>

      <section className="flex flex-col">
        <section>
          <h3 className="text-lg md:text-xl my-8">1 - Informações pessoais que coletamos</h3>
          <p className="text-base md:text-lg my-4">
            Quando você efetua ou tenta fazer uma compra no site, nós coletamos algumas informações suas,
            incluindo seu nome, endereço de faturamento, endereço de entrega, informações de pagamento,
            endereço de e-mail e número de telefone. Nós chamamos essas informações de “Informações do
            pedido”.
          </p>
        </section>

        <section>
          <h3 className="text-lg md:text-xl my-8">2 - Como usamos suas informações pessoais?</h3>
          <p className="text-base md:text-lg my-4">
            Em geral, nós usamos as informações do pedido que coletamos para processar quaisquer pedidos
            feitos por meio do site (incluindo o processamento das suas informações de pagamento, a
            organização do frete e o fornecimento de faturas e/ou confirmações de pedidos).
          </p>

          <p className="text-base md:text-lg my-4">Além disso, usamos essas Informações do pedido para:</p>
          <ul className="list-disc text-base md:text-lg m-4">
            <li>Nos comunicarmos com você.</li>
            <li>Rastrear nossos pedidos para identificar possíveis riscos ou fraudes.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg md:text-xl my-8">3 - Menores de idade</h3>
          <p className="text-base md:text-lg my-4">O Site não é destinado para pessoas com menos de 18 anos.</p>
        </section>

        <section>
          <h3 className="text-lg md:text-xl my-8">4 - Mudanças</h3>
          <p className="text-base md:text-lg my-4">
            Nós podemos atualizar esta Política de privacidade periodicamente para refletir, por exemplo,
            mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares.
          </p>
        </section>
      </section>
    </article>
  );
}
