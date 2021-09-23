export const updateObjectInArray = (
	items: Array<any>,
	itemId: any,
	objPropName: string,
	newObjProps: any
) => {
	items.map(item =>
		item[objPropName] === itemId ? { ...item, ...newObjProps } : item
	)
}
