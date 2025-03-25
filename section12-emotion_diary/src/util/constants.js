// emotionList 별도의 모듈화 (export 하기 편하게) => 상수값들 저장.

export const emotionList = [ // 하나씩 설정해서 일일이 입력해주는건 안좋은 방법 => 이렇게 리스트로 만들어서 물려주는게 나중에 유지보수에 좋음/
    {
        emotionId: 1,
        emotionName: "완전 좋음"
    },
    {
        emotionId: 2,
        emotionName: "좋음"
    },
    {
        emotionId: 3,
        emotionName: "그럭저럭"
    },
    {
        emotionId: 4,
        emotionName: "나쁨"
    },
    {
        emotionId: 5,
        emotionName: "끔찍함"
    },
];