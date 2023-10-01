function solution(arr) {
    let len = arr.length;
    arr[len-1] > arr[len-2] ? arr.push(arr[len-1] - arr[len-2]) : arr.push(arr[len-1] * 2);
    return arr;
}