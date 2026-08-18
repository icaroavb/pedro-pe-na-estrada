// WhatsApp do Pedro: +55 62 9129-3459 → 55 (país) + 62 (DDD) + 9 + 91293459
export const WHATSAPP_NUMBER = "5562991293459";

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function buildExpeditionWhatsAppLink(destino: string): string {
  return buildWhatsAppLink(
    `Oi Pedro! Vi a expedição para ${destino} no site e quero garantir minha vaga 🌍✈️`
  );
}
