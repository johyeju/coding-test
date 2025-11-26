function solution(a, b) {
    const array = [a, b].sort((a, b) => a - b);
    let answer = 0;
    
    for (let i = array[0]; i <= array[1]; i++) {
       answer += i;
    }
    
    return answer;
}