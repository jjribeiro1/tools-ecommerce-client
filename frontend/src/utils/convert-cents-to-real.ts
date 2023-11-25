export const convertCentsToReal = (price: number) => {
  const priceInReal = price / 100;
  const formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    priceInReal
  );
  return formattedPrice;
};
