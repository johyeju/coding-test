function solution(x) {
    let sum = 0;
    const num = String(x).split('').map(Number);

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    
    if (x % sum === 0) {
        return true;
    }
    
    return false;
}
