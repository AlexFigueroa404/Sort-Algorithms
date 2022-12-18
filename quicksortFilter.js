
function quickSort(arr) {
	if (arr.length > 1) {
		const pivot = arr[arr.length - 1]
		left = arr.filter(x => x < pivot);
		right = arr.filter(x => x > pivot);
		return [...quickSort(left), pivot, ...quickSort(right)]
	}
	return arr;
}

const arr = [3, 5, 1, 6, 4, 7, 2];
console.log(quickSort(arr))
