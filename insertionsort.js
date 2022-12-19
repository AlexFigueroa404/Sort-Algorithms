const insertionSort = (array) => {
	let temp;
	for (let i = 1; i < array.length; i++) {
		temp = array[i];
		let j = i;

		while (j > 0 && array[j - 1] > temp) {
			array[j] = array[j - 1];
			j--;
		}
		console.log(array[j], temp)
		array[j] = temp;
	}
}

const array = [1, 8, 2, 4, 2, 0];
insertionSort(array)
console.log(array);