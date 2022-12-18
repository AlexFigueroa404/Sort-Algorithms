const swap = (arr, i, j) => {
	[arr[i], arr[j]] = [arr[j], arr[i]]
}

const bubbleSort = (arr) => {

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - 1) - i; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}

}

const arr = [3, 5, 1, 6, 4, 7, 2];

bubbleSort(arr);
console.log(arr)