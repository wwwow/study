console.log('--------------------------');
function main() {
  let firstTeamData = [
    {id: 1, name: '일은지', average: 0.41},
    {id: 2, name: '이은지', average: 0.49},
    {id: 3, name: '삼은지', average: 0.35},
    {id: 4, name: '사은지', average: 0.15},
    {id: 5, name: '오은지', average: 0.155},
    {id: 6, name: '육은지', average: 0.355},
    {id: 7, name: '칠은지', average: 0.378},
    {id: 8, name: '팔은지', average: 0.499},
    {id: 9, name: '구은지', average: 0.215}
  ]

  let secondTeamData = [
    {id: 1, name: '1은지', average: 0.151},
    {id: 2, name: '2은지', average: 0.35},
    {id: 3, name: '3은지', average: 0.45},
    {id: 4, name: '4은지', average: 0.151},
    {id: 5, name: '5은지', average: 0.415},
    {id: 6, name: '6은지', average: 0.351},
    {id: 7, name: '7은지', average: 0.111},
    {id: 8, name: '8은지', average: 0.222},
    {id: 9, name: '9은지', average: 0.323}
  ]

  let firtTeamPoint = 0;
  let secondTeamPoint = 0;

  const playGround = (teamData, index) => {

    let hit = 0;
    let strike = 0;
    let ball = 0;
    let out = 0;

    if (teamData === firstTeamData) console.log(`\n\n'${index + 1}초' 코드 스쿼드 공격`);
    if (teamData === secondTeamData) console.log(`\n\n'${index + 1}말' 레고 마블스의 공격`);

    teamData.forEach(({ id, name, average }, index) => {

      if (out < 3) console.log(`\n${id}번 ${name}`);

      const play = () => {
        const random = Math.random();
        const h = average;
        const proHit = Math.random() * 0.4 + 0.1;
        const proStrike = (1 - h) / 2 - 0.05;
        const proBall = (1 - h) / 2 - 0.05;
        const proOut = 0.1;

        const reset = () => {
          strike = 0;
          ball = 0;
        }

        const print = () => {
          return console.log(`${strike}S ${ball}B ${out}O ${hit}Hits`);
        }

        const HIT = () => {
          // console.log('안타!\n');
          ++hit;
          reset();
          print();
          if (hit % 4 === 0) {
            if (teamData === firstTeamData) ++firtTeamPoint;
            if (teamData === secondTeamData) ++secondTeamPoint;
          }
        }

        const STRIKE = () => {
          const STRIKECOUNT = 3;
          // console.log('스트라이크!\n');
          ++strike;
          print();
          if (strike % STRIKECOUNT  === 0) OUT();
          else play();
        }

        const BALL = () => {
          const BALLCOUNT = 4;
          // console.log('볼!\n');
          ++ball;
          print();

          if (ball % BALLCOUNT === 0) {
            reset();
            ++hit;
          } else play();
        }

        const OUT = () => {
          // console.log(`아웃!`);
          reset();
          ++out;
          print();
        }

        if (out >= 3) return;

        if (random < proStrike) STRIKE();
        else if (random < proStrike + proBall) BALL();
        else if (random < proStrike + proBall + proOut) OUT();
        else if (random > proHit) HIT();
      }
      play();
    })
  }
  for (let i = 0;i < 6; i ++) {
    playGround(firstTeamData, i);
    playGround(secondTeamData, i);
  }

  console.log('\n\n\n코드스쿼드 VS 레고 마블스');
  console.log(`${firtTeamPoint} : ${secondTeamPoint}`);
  console.log('Thank you');
}
main();
console.log('--------------------------');