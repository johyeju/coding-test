function solution(x, n) {
    const array = [];
    let num = x;
    
    for (let i = 0; i < n; i++) {
        array.push(num);
        num += x;
    }
    
    return array;
}