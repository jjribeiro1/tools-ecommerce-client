import React from 'react';

export default function DeliveryPolict() {
  return (
    <article className="flex flex-col justify-center items-center gap-5 md:gap-10 py-3 md:py-7 mx-2 sm:mx-5 md:mx-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl">Política de Entrega</h1>

      <section className="flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-8">PRODUTO INTERNACIONAL</h2>

        <section>
          <h3 className="text-lg sm:text-xl my-8">1 - Declaração de origem</h3>
          <p className="text-base sm:text-lg my-4">
            Vários produtos produtos vendidos pela <strong>CASA DAS FERRAMENTAS</strong> são importados.
            Nossos fornecedores se encontram na <b>Europa</b>, <b>USA</b> e <b>China</b> e enviam as
            encomendas diretamente para o consumidor final.
          </p>
          <p className="text-base sm:text-lg my-4">
            Oferecemos <strong>FRETE GRÁTIS</strong> para todo Brasil nos produtos com estoque fora do Brasil
            no nosso fabricante.
          </p>
          <p className="text-base sm:text-lg my-4">
            Caso o seu pedido seja de <b>2 ou mais produtos</b>, os mesmos poderão ser{' '}
            <b>enviados em fretes separados</b>, portanto, você receberá um código de rastreamento para cada
            produto.
          </p>
        </section>

        <section>
          <h3 className="text-lg sm:text-xl my-8">2 - Prazo de entrega</h3>
          <p className="text-base sm:text-lg my-4">
            O prazo de entrega dos produtos é de <b>3 até 25 dias após o envio</b> pelo nossos fornecedores.
            No entanto, fatores fora do nosso controle como greve dos Correios, impossibilidade de entrega
            devido a fatores climáticos ou atraso no processamento pela Receita Federal podem causar atrasos.
            Nestes casos, será acrescido ao nosso prazo os dias necessários para a resolução dos problemas
            citados.
          </p>
          <p className="text-base sm:text-lg my-4">
            Se você já está preocupado(a), não fique! Baseado <b>em nossa experiência</b>, 95% dos nossos
            produtos são entregues em até 10 dias após o despacho.
          </p>
        </section>

        <section>
          <h3 className="text-lg sm:text-xl my-8">3 - Prazo de processamento</h3>
          <p className="text-base sm:text-lg my-4">
            Após confirmação do pagamento, seu produto passará pelo processo de separação, embalagem e
            despacho. Este processo leva no máximo até 7 dias. Assim que seu produto é despachado você será
            informado(a) por email e receberá o seu código de rastreamento.
          </p>
        </section>

        <section>
          <h3 className="text-lg sm:text-xl my-8">4 - Formas de envio</h3>
          <p className="text-base sm:text-lg my-4">
            A entrega é sempre feita pelos Correios, no entanto em alguns casos como: destinatário ausente,
            regiões com restrição de entrega, entre outros motivos, os Correios poderão deixar um aviso para
            retirar os produtos na agência mais próxima do endereço fornecido.
          </p>
          <p className="text-base sm:text-lg my-4">
            Pedimos <b>atenção no preenchimento do endereço</b> de entrega para garantir que a mesma seja
            feita dentro do prazo estabelecido. O endereço de entrega não pode ser alterado após 24 horas de
            efetuado o pedido no site. Revise o endereço antes de confirmar, havendo devolução do produto por
            endereço incorreto ou dados insuficientes, a responsabilidade será do cliente.
          </p>
          <p className="text-base sm:text-lg my-4">
            Os Correios realizam <b>três tentativas de entrega</b> do produto. Ocorrendo três tentativas de
            entrega sem sucesso o produto será enviado à agência mais próxima e ficará aguardando a retirada
            por 7 dias e após isso retornará para o fornecedor no exterior.
          </p>
        </section>

        <section>
          <h3 className="text-base sm:text-xl my-8">5 - Confirmação de envio e código de rastreamento</h3>
          <p className="text-base sm:text-lg my-4">
            Todas os pedidos possuem um código de rastreamento, que será enviado por e-mail ao cliente dentro
            do prazo médio 7 dias úteis após confirmação de pagamento.
          </p>
          <p className="text-base sm:text-lg my-4">
            Para rastrear seu produto basta entrar na página de rastreamento dos Correios e inserir o seu
            código. Segue o link:
          </p>
          <p className="text-base sm:text-lg my-4">
            <a href="http://www2.correios.com.br/sistemas/rastreamento/" className="text-cyan-950">
              http://www2.correios.com.br/sistemas/rastreamento/
            </a>
          </p>
          <p className="text-base sm:text-lg my-4">
            Por se tratar de encomenda internacional, as informações de rastreamento no site dos Correios
            poderão levar entre 5 a 20 dias para estarem disponíveis.
          </p>
          <p className="text-base sm:text-lg my-4">
            <b>IMPORTANTE</b>: A <strong>CASA DAS FERRAMENTAS</strong> se <b>RESPONSABILIZA</b> por taxas,
            encargos e impostos alfandegários.
          </p>

          <p className="text-base sm:text-lg my-4">
            Por se tratar de um serviço de importação, toda e qualquer mercadoria está sujeita a burocracias
            ou tributações alfandegárias. A <strong>CASA DAS FERRAMENTAS</strong> se <b>RESPONSABILIZA</b>{' '}
            pelos possíveis custos (taxas, encargos e impostos) acrescidos pelo governo. Caso seu produto
            tenha sido tributado:
          </p>

          <ul className="text-base sm:text-lg m-4 list-disc">
            <li>Envie um email em até 48h após a entrega para: example@gmail.com</li>
            <li>Providencie uma cópia do documento de tributação que foi preenchido pelos correios.</li>
            <li>Após recebimento do seu email entraremos em contato para ressarcir os custos ocorridos.</li>
          </ul>

          <p className="text-base sm:text-lg my-4">
            <b>Em caso de dúvidas entre em contato com o nosso SAC</b>: de segunda a sexta, das 9h às 18h
          </p>

          <ul className="text-base sm:text-lg m-4 list-disc">
            <li>E-mail: example@outlook.com</li>
            <li>WhatsApp: (21) 98888-7777</li>
          </ul>

          <p className="text-base sm:text-lg my-4">
            Ao efetuar uma compra o cliente <b>aceita</b> e <b>concorda</b> com a política de envio e prazo de
            entrega aqui apresentadas pela <strong>CASA DAS FERRAMENTAS</strong>.
          </p>
        </section>
      </section>
    </article>
  );
}
