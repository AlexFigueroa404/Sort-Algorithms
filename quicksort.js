const swap = (arr, i, j) => {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const partition = (arr, left, right) => {
	const pivot = arr[Math.floor((left + right) / 2)];
	let i = left;
	let j = right;
	while (i <= j) {
		while (arr[i] < pivot) {
			i++;
		}
		while (arr[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(arr, i, j);
			i++;
			j--;
		}
	}
	return i;
}

const quickSort = (arr, left, right) => {
	let index;
	if (arr.length > 1) {
		index = partition(arr, left, right);
		if (left < index - 1) {
			quickSort(arr, left, index - 1)
		}
		if (right > index) {
			quickSort(arr, index, right);
		}
	}

	return arr;
}


const arr = [3, 5, 1, 6, 4, 7, 2];
quickSort(arr, 0, arr.length - 1);

console.log(arr);
