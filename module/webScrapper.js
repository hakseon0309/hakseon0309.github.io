// 이 모듈은 매개변수로 와우헤드의 Database / Spells / NPC Abilites 의 URL을 받으면
// 해당 능력의 정보들을 추출해서 변수에 저장해주는 모듈입니다.
// 이후 값을 보기 좋게 가공해 완성합니다.

// axios 모듈 : HTML 을 가져옵니다.
// cheerio 모듈 : cheerio 로 로드하면 DOM 객체 접근, 사용이 가능합니다.
const axios = require("axios");
const cheerio = require("cheerio");

// axios 모듈을 이용해 매개변수로 받은 URL 의 HTML 을 getHTML 변수에 저장합니다.
const getHTML = async(url) => {
    try {
        return await axios.get(encodeURI(url))
    }catch(err) {
        // console.log(err)
    }
}

// 정규식을 이용해 url 에서 spell="ID" 를 추출합니다.
function spellIdFromUrl(url) {
    const match = url.match(/\/spell=(\d+)\//);
    return match?.[1] ?? null;
}

// (await getHTML : 로드가 완료되면) cheerio 모듈로 로드합니다.
const parsingUrl = async(url) => {
    const html = await getHTML(url);
    const spellId = spellIdFromUrl(url);
    const $ = cheerio.load(html.data);
    // 모든 HTML 에서 인덱싱을 하지 않고, 특정 부분에서 인덱싱을 시작합니다.
    const $array = $("html");

    // results 배열을 만듭니다.
    let results = [];
    // $array(=.main-contents 클래스)의 자식부터 인덱싱을 시작합니다.
    // each 함수를 통해 모든 자식을 인덱싱 합니다.
    $array.each((idx,node) => {
        // 테스트용 코드 예시입니다.
        // const title = $(node).find(".heading-size-1").text();
        // results 배열에 json 형식으로 키와 값을 추가합니다.
        results.push({
            spellId     : spellIdFromUrl(url),
            name        : $(node).find(".heading-size-1").text(),
            icon        : $(node).find('#infobox-contents-0 > ul > li.icon-db-link > div > a').attr('href')
        })

    });
    // results 배열을 리턴합니다.
    // return results;
    // 테스트용 코드입니다.
    console.log(results)
}



// const parsingId = async(id, region = "") => {
//     const url = `https://www.wowhead.com/${region}/spell=${id}/`;
//     const html = await getHTML(url);
//     const $ = cheerio.load(html.data);
//     const $array = $("#main-contents");

//     let results = [];
//     $array.each((idx,node) => {
//         const title = $(node).find(".heading-size-1").text();
//         results.push({
//             spellId     : spellIdFromUrl(url),
//             name        : null ,
//             nameEn      : $(node).find(".heading-size-1").text(),
//             이거도되나: $(node).find('th:contains("Cost")').next().text(),
//             description : $(node).find(".q").text(),
//         })
//     });
//     // return results;
//     console.log(results);
// }
// const parsingId = async(id, region = "") => {
//     const url = `https://www.wowhead.com/${region}/spell=${id}/`;
//     const html = await getHTML(url);
//     const $ = cheerio.load(html.data);
//     const $array = $("#spelldetails");

//     let results = [];
//     $array.each((idx,node) => {
//         const spellDetails = ["Cost", "Range", "Cast time", "Cooldown", "GCD", "Duration", "School", "Mechanic", "Dispel type", "GCD category"];
//         const castTime = $(node).find('th:contains("Duration")').next().text().trim(); // Cast time 값을 추출하여 trim()을 이용해 공백 제거
//         var i;
//         results.push({
//             spellId     : spellIdFromUrl(url),
//             name        : null ,
//             nameEn      : $(node).find(".heading-size-1").text(),
//             exp : $(node).find('th:contains("School")').next().text(),
//             description : $(node).find(".q").text(),
//             castTime : castTime
//         })
//     });
//     // return results;
//     console.log(results);
// }

// parsingId(401319, "ptr");
parsingUrl("https://www.wowhead.com/ptr/spell=401319/hellsteel-carnage");