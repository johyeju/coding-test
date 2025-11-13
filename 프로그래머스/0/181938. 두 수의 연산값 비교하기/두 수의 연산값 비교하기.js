function solution(a, b) {
    const num1 = String(a) + String(b);
    const num2 = 2 * a * b;
    
    if (num1 < num2) {
        return num2;
    } else {
        return Number(num1);
    }
    
}