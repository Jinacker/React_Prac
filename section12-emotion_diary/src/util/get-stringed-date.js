// 타임 스탬프 => 날짜 규격으로 변경하는 놈 모듈

export const getStringDate = (targetDate) => { // 
    // 날짜 => YYYY-MM-DD (09 이런식으로 한자리 두자리로 표시하게 해야함 이건 밑에서 if 조건문으로 ㄱ)
    let year = targetDate.getFullYear();
    let month = targetDate.getMonth() + 1;
    let date = targetDate.getDate();

    // 이런식으로 $를 이용해서 한자리 수면 => 0붙여서 2자리 수로 만들어주기
    if (month < 10){
        month = `0${month}`;
    }
    if (date <10){
        date = `0${date}`;
    }
    return `${year}-${month}-${date}`; // 이런식으로 리턴.
}

