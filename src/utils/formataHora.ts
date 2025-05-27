const formataHora = (rawDate: string) => {
  const date = new Date(rawDate)

  const datePtbr = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return datePtbr
}

export default formataHora
