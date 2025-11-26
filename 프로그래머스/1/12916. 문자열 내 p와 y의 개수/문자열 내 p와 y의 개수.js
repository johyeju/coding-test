function solution(s){
    const upperCaseP = s.toUpperCase().split('P').length - 1;
    const upperCaseY = s.toUpperCase().split('Y').length - 1;
    
    if (upperCaseP !== upperCaseY) {
        return false
    } else {
        return true;
    }
}
