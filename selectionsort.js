

const swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]]
}


const selectionSort = (arr) => {

	let minIndex;

	for (let i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}

		if (minIndex != i) {
			swap(arr, i, minIndex)
		}
	}
}

const arr = [2, 1, 3, 4, 6, 9, 5, 8, 7];
selectionSort(arr);
console.log(arr)