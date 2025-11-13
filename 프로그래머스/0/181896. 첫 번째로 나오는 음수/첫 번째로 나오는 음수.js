function solution(num_list) {
    var answer = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] < 0) {
            answer = i;
            break;
        }
    }
    
    if (answer === 0 && num_list[0] >= 0) {
        return -1;
    }
    
    return answer;
}