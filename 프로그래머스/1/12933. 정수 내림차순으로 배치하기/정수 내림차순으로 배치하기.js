function solution(n) {
    const numArr = String(n).split(''); 
    
    numArr.sort((a, b) => b - a);
    
    const sortedNum = numArr.join('');
    
    return Number(sortedNum);
}