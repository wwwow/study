const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨',
  number: 0.333
};
const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카',
  number: 0.01101
}

// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
//   console.log(text);
// }

// function print(hero) {
//   const { alias, name, actor } = hero;
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
//   console.log(text);
// }

function print(hero) {
  const { alias, name, actor, number } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.\n
  ${number.toFixed(3)}`
    
  if(hero.number<0.5 && hero.number>0.1) {
    console.log(text);
    
  }else{
    console.log('타율의 값을 다시 입력해주세요.')
  }
}

print(ironMan);
print(captainAmerica);