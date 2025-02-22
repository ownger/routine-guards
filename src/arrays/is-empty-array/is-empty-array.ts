function isEmptyArray<ItemType = unknown>(array: ItemType[]): array is [] {
	return array.length === 0;
}

export { isEmptyArray };
