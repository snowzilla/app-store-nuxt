export function formatPrice (number) {
	return new Intl.NumberFormat('ru-RU', {
		style: 'currency',
		currency: 'RUB',
		maximumSignificantDigits: 1
	}).format(number)
}
