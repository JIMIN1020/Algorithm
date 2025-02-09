function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((a, idx) => a + arr2[i][idx]));
}