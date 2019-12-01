alert("게임을 시작하겠습니까?");
console.log("신나는 야구 게임! \n첫 번째 타자가 타석에 입장했습니다.");

const RESULT = ["스트라이크", "볼", "안타"];

let strike = 0;
let ball = 0;
let hit = 0;
let out = 0;

const baseBallGame = result => {
  const random = Math.floor(Math.random() * result.length);
  const resultRandom = result[random];

  const STRIKE = () => {
    const STRIKECOUNT = 3;
    console.log("스트라이크!");
    ++strike;
    if (strike >= STRIKECOUNT) OUT();
  };

  const BALL = () => {
    const BALLCOUNT = 4;
    console.log("볼!");
    ++ball;
    if (ball >= BALLCOUNT) HIT();
  };

  const OUT = () => {
    const MAXOUTCOUNT = 3;
    if (out + 1 < MAXOUTCOUNT) {
      console.log("아웃! 다음 타자가 타석에 입장했습니다.");
      reset();
      ++out;
    } else {
      console.log(`최종안타수 : ${hit}\nGAME OVER`);
      reset();
      ++out;
      clearInterval(clear);
    }
  };

  const HIT = () => {
    console.log("안타! 다음 타자가 타석에 입장했습니다.");
    ++hit;
    reset();
  };

  const reset = () => {
    strike = 0;
    ball = 0;
  };

  if (resultRandom === "스트라이크") STRIKE();
  else if (resultRandom === "볼") BALL();
  else if (resultRandom === "안타") HIT();

  return `${strike}S ${ball}B ${out}O ${hit}Hits`;
};

const clear = setInterval(() => {
  console.log(baseBallGame(RESULT));
}, 300);
