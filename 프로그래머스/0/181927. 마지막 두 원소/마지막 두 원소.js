function solution(num_list) {
    let answer = [...num_list];
    const lastIndex = num_list.length - 1;
    
    if (num_list[lastIndex] > num_list[lastIndex - 1]) {
        answer.push(num_list[lastIndex] - num_list[lastIndex - 1]);
    } else {
        answer.push(num_list[lastIndex] * 2);
    }
    
    return answer;
}