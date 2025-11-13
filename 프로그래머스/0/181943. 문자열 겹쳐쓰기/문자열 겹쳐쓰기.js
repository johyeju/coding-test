function solution(my_string, overwrite_string, s) {
    let array = [...my_string];
    array.splice(s, overwrite_string.length, overwrite_string);
    
    return array.join('');
}