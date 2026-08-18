// TODO: Pedro deve substituir pelo número real de WhatsApp (formato: código do país + DDD + número, só dígitos)
export const WHATSAPP_NUMBER = "5511999999999";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildExpeditionWhatsAppLink(destino: string): string {
  return buildWhatsAppLink(
    `Oi Pedro! Vi a expedição para ${destino} no site e quero garantir minha vaga 🌍✈️`
  );
}
