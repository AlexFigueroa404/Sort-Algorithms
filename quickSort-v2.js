
const quickSort = (arr) => {
	if (arr.length > 1) {
		const left = [];
		const right = [];
		let pivotIndex = Math.floor((arr.length) / 2);
		let pivot = arr[pivotIndex]

		for (let i = 0; i < arr.length; i++) {
			if (i === pivotIndex) continue;
			arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
		}

		return [...quickSort(left), pivot, ...quickSort(right)]
	}
	return arr;
}

const arr = [3, 5, 1, 6, 4, 7, 2];
console.log(quickSort(arr))