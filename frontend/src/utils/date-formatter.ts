export const dateFormatter = (value: Date) => {
  const formatter = Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }).format(value);
  return formatter;
};
