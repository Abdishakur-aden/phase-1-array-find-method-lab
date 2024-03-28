// code your solution here
function superbowlWin(kkk) {
    const yyy = kkk.find ( kkk => kkk.result === "W")
    if (yyy) {
        return yyy.year;      
    }else {
        return undefined
    }
}