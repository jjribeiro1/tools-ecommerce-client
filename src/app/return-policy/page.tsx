import React from 'react';

export default function ReturnPolicy() {
  return (
    <article className="flex flex-col justify-center items-center gap-10 py-7 mx-20">
      <h1 className="text-4xl lg:text-5xl ">Política de troca e devolução</h1>

      <header className="text-2xl">
        Na <strong>CASA DAS FERRAMENTAS</strong>, valorizamos a satisfação de nossos clientes e buscamos
        fornecer produtos de alta qualidade. Entendemos que, às vezes, você pode precisar trocar ou devolver
        um produto. Esta política de troca e devolução foi criada para garantir que o processo seja simples,
        justo e transparente para ambas as partes envolvidas. Por favor, leia atentamente as diretrizes a
        seguir:
      </header>

      <section className="flex flex-col">
        <section>
          <h3 className="text-xl my-8">1 - Trocas e devoluções gerais:</h3>
          <ul className="list-disc text-lg">
            <li>Aceitamos trocas e devoluções de produtos não utilizados e em perfeitas condições.</li>
            <li>
              O prazo para solicitar trocas ou devoluções é de até 30 dias. Passados os 30 dias da compra,
              infelizmente não é possível solicitar reembolso ou troca.
            </li>
            <li>
              É necessário apresentar o comprovante de compra ou recibo original para qualquer troca ou
              devolução.
            </li>
            <li>
              Para iniciar um pedido de troca ou devolução, entre em contato com nosso SAC por WhatsApp ou
              e-mail
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg my-8">2 - Condições para trocas e devoluções:</h3>
          <ul className="list-disc text-lg">
            <li>O produto deve estar em sua embalagem original, sem danos ou sinais de uso.</li>
            <li>Todos os acessórios, manuais e peças que acompanham o produto devem ser devolvidos.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg my-8">3 - Trocas:</h3>
          <ul className="list-disc text-lg">
            <li>Apenas substituímos produtos se estiverem com defeito de fabricação ou danificados</li>
            <li>
              Em caso de troca, você poderá escolher um produto equivalente de valor igual ou pagar a
              diferença caso o novo item seja mais caro.
            </li>
            <li>
              Se você precisar trocá-lo pelo mesmo item, envie-nos um e-mail example@gmail.com e envie seu
              item para: Rua exemplo, São Gonçalo, RJ, 99876543, Brasil.
            </li>
            <li>
              Reservamo-nos o direito de recusar trocas ou devoluções caso o produto tenha sido danificado por
              mau uso, negligência ou alterações não autorizadas.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg my-8">4 - Devoluções:</h3>
          <ul className="list-disc text-lg">
            <li>O reembolso será efetuado após a verificação e aprovação da condição do produto devolvido</li>
            <li>
              Dependendo de onde você mora, o tempo de frete de devolução pode variar (confira nossa página de
              política de entrega).{' '}
            </li>
            <li>
              Se você ainda não recebeu o reembolso, primeiro verifique sua conta bancária novamente. Em
              seguida, entre em contato com sua operadora de cartão de crédito, já que pode levar algum tempo
              até o reembolso ser efetuado. Depois entre em contato com o seu banco. Em geral, existe um tempo
              de processamento antes de um reembolso ser efetuado.
            </li>
            <li>
              Se você já fez tudo isso e ainda não recebeu seu reembolso, entre em contato conosco pelo e-mail
              example@gmail.com
            </li>
            <li>
              Apenas itens com preços normais podem ser reembolsados, infelizmente os produtos em promoção não
              podem ser reembolsados.
            </li>
            <li>
              Você será responsável pelo pagamento do custo de frete para devolver o produto. Os custos de
              frete não são reembolsáveis. Se você receber um reembolso, o custo do frete de devolução será
              deduzido do seu reembolso.
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
}
