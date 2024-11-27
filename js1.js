const queryStiring = window.location.search;
const params = new URLSearchParams(queryStiring);

const price = params.get('price');
const alcohol = params.get('alcohol');
const type = params.get('type');
const smoky = params.get('smoky');

const numstr = price + alcohol + type + smoky;

const whiskydic = {
    "0000": {
        name: "라가불린 16",
        description: "깊은 스모키와 피트향, 강렬한 알코올, 상큼한 과일의 균형을 가진 고급 싱글 몰트."
    },
    "0001": {
        name: "더 페이머스 그라우스",
        description: "부드러운 과일향과 약간의 스파이시함, 가성비 좋은 블렌디드 위스키."
    },
    "0010": {
        name: "아드벡 10",
        description: "진한 초콜릿과 스모키한 피트향, 강렬한 몰트의 풍미가 매력적."
    },
    "0011": {
        name: "와일드 터키 101",
        description: "바닐라와 초콜릿의 부드러움과 강렬한 알코올이 어우러진 가성비 위스키."
    },
    "0100": {
        name: "라프로익 쿼터캐스크",
        description: "피트와 과일의 독특한 조화를 보여주는 스모키 위스키."
    },
    "0101": {
        name: "글렌그랜트 12",
        description: "가볍고 상큼한 과일향, 부드럽고 마시기 쉬운 가성비 싱글 몰트."
    },
    "0110": {
        name: "탈리스커 10",
        description: "스모키한 초콜릿향과 고소함, 부드러운 피니쉬를 가진 균형 잡힌 위스키."
    },
    "0111": {
        name: "메이커스 마크",
        description: "바닐라와 초콜릿의 달콤함, 약한 알코올과 가성비의 조화."
    },
    "1000": {
        name: "아드벡 우가달",
        description: "깊은 피트향과 과일의 다채로운 맛, 제대로 된 스모키 싱글 몰트."
    },
    "1001": {
        name: "맥캘란 더블캐스크 12",
        description: "과일향과 고급스러운 몰트향, 약한 스모키함과 부드러운 맛."
    },
    "1010": {
        name: "라가불린 12",
        description: "고급 싱글 몰트의 초콜릿과 스모키 풍미의 진수를 보여줌."
    },
    "1011": {
        name: "부커스 버번",
        description: "강렬한 알코올 맛과 바닐라, 초콜릿 풍미가 조화를 이루는 하이엔드 버번."
    },
    "1100": {
        name: "보모어 15 다크 프룻",
        description: "과일과 스모키함의 절묘한 조화, 부드럽고 달콤한 피니쉬가 매력적."
    },
    "1101": {
        name: "글렌모렌지 오리지널",
        description: "복숭아와 오렌지의 과일향, 섬세하고 부드러운 피니쉬를 가진 싱글 몰트."
    },
    "1110": {
        name: "킬호만 마키어 베이",
        description: "초콜릿과 피트의 완벽한 조화, 부드러움 속에 강렬함을 품은 위스키."
    },
    "1111": {
        name: "맥캘란 셰리 오크 12",
        description: "셰리 오크 숙성의 달콤한 바닐라와 초콜릿향, 고급스러운 싱글 몰트의 대표작."
    }
};

let recommendation = '당신에게 추천하는 위스키는 ';
let explanation = '';

recommendation += whiskydic[numstr]['name'];
explanation += whiskydic[numstr]['description'];

const result = document.getElementById("result");
result.innerHTML = `<p>${recommendation} : ${explanation}</p>`