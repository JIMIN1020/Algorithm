function solution(array, n) {
    const arr = [...array, n].sort((a, b) => a-b);
    const idx = arr.indexOf(n);
    return idx === 0 ? arr[idx+1] : idx === arr.length-1 ? arr[idx-1] : arr[idx] - arr[idx-1] > arr[idx+1] - arr[idx] ? arr[idx+1] : arr[idx-1]
}