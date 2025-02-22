function isFilledArray<ItemType = unknown>(
	array: ItemType[],
): array is [ItemType, ...ItemType[]] {
	return array.length > 0;
}

export { isFilledArray };
