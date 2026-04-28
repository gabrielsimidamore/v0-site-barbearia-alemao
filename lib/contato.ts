export const TELEFONE = "11983806066"
export const TELEFONE_FORMATADO = "(11) 98380-6066"
export const WHATSAPP_NUMERO = "5511983806066"

export const ENDERECO = {
  rua: "Av. Novo Osasco, n° 1512",
  bairro: "Novo Osasco",
  cidade: "Osasco - SP",
  cep: "06056-270",
  completo: "Av. Novo Osasco, 1512 - Novo Osasco, Osasco - SP, 06056-270",
}

export const MENSAGENS_WHATSAPP = {
  agendamento:
    "Olá! Gostaria de agendar um horário na Barbearia do Alemão. Pode me ajudar com os horários disponíveis?",
  workshop:
    "Olá! Tenho interesse no workshop/curso de barbearia do Alemão. Pode me passar mais informações sobre datas, valores e conteúdo?",
  geral: "Olá! Vim pelo site da Barbearia do Alemão e gostaria de mais informações.",
}

export function linkWhatsapp(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
}
