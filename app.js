function checkAndBuild(start, end, num, str) {
    //Length wil always be given number multiple 2(two brackets == 1 digit)
    str.length == 2 * num && console.log(str);
    start >= end && start != num && checkAndBuild(start + 1, end, num, str + '[');
    end < start && checkAndBuild(start, end + 1, num, str + ']');
}

function init(num) {
    let start = 0;
    end = 0;
    str = '';
    checkAndBuild(start, end, num, str);
}
init(4);