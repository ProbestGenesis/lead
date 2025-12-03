

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF', // Code ISO 4217 pour le Franc CFA (UEMOA)
    minimumFractionDigits: 0,
  })
    .format(price)
    .replace('XOF', 'FCFA'); // Remplacer le symbole générique par FCFA
};