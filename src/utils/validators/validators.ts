export const requiredField = (value: string) => {
	if (!value) {
		return 'Field is required'
	}
	return undefined
}

export const maxLength = (maxCharacters: number) => (value: string) => {
	if (value && value.length > maxCharacters) {
		return `Must be ${maxCharacters} characters or less`
	}
	return undefined
}

export const email = (value: string) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined
