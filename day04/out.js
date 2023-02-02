// 함수는 여러절차가 있는 처리를 묶어, 이름을 부여하여 기능을 정의
// out.js
function 빨래하다() {
    console.log('1. 먼지를 턴다')
    console.log('2. 물에 집어 넣는다.')
    console.log('3. 비누를 바른다.')
    console.log('4. 오물조물 비빈다.')
    console.log('5. 물에 여러번 헹군다.')
    console.log('6. 짠다.')
    console.log('7. 넌다.')
}

function 청소하다() {
    console.log('1. 버릴 물건, 버리지 않을 물건을 분류한다.')
    console.log('2. 분류한 물건들을 따로 두고 청소할 공간을 환기를 시킨다.');
    console.log('3. 먼지를 없앤다')
    console.log('4. 닦을 부분을 물수건으로 닦는다')
    console.log('5. 버리지 않을 물건 내에서 그 종류를 따로 분류하고 위치시킨다.')
    console.log('6. 버릴 물건을 분리수거해 정리한다.')
}

function 여행하다(목적지){
    document.write(목적지 + "로 떠납니다. 좋은 여행되시길 바랍니다.<br>")
}

function 쉬다(장소){
    document.write(장소 + "에서 휴식을 취합니다.<br>")
}