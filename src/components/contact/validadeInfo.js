export default function validateInfo(values) {
  let errors = {}

  if (values.nome == null) {
    return errors.nome = "É necessário informar seu nome!"
    if (!values.nome.trim()) {errors.nome = "É necessário informar seu nome!"}
  }

  if (values.email == null) {errors.email = "É necessário informar seu e-mail!"}
  if (!values.email.trim()) {errors.email = "É necessário informar seu e-mail!"}
  if (!/\S+@\S+\.\S+/.test(values.email)) {errors.email = "Você precisa informar um e-mail válido!"}

  if (values.tel == null) {errors.tel = "É necessário informar um número de telefone"}
  if (!values.tel.trim()) {errors.tel = "É necessário informar um número de telefone"} 
  if (!/(\(?\d{2}\)?\s?)?(\d{4,5}\-?\d{4})/.test(values.tel)) {errors.tel = "Você precisa informar um número de telefone válido"}

  return errors;
}