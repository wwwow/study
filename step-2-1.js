function main() {
  const MEMBER = 9;
  let firstTeamInfo = "";
  let firstTeamData = [];

  let secondTeamInfo = "";
  let secondTeamData = [];

  // console.log(secondTeamData[3]);
  const firstTeamName = prompt("1팀의 이름을 입력하세요.");

  for (let i = 0; i <= MEMBER; i++) {
    const name = firstTeamInfo.split(",")[0] || "1번팀 투수";
    const average = firstTeamInfo.split(",")[1] || "투수";

    firstTeamInfo = prompt(
      `${i}번 타자 정보 입력 - ex) 권은지, 0.499 \n단, 확률로 타율(h)은 0.1 < h < 0.5. 타율은 소숫점 셋째자리까지 입력가능.`
    );
    firstTeamData.push({ id: i, name, average });
    // firstTeamData[Object.keys(average)[1]].toFixed(3);
  }

  const secondTeamName = prompt("2팀의 이름을 입력하세요.");

  for (let i = 0; i <= MEMBER; i++) {
    const name = secondTeamInfo.split(",")[0] || "2번팀 투수";
    const average = secondTeamInfo.split(",")[1] || "투수";

    secondTeamInfo = prompt(
      `${i}번 타자 정보 입력 - ex) 권은정, 0.399 \n단, 확률로 타율(h)은 0.1 < h < 0.5`
    );
    secondTeamData.push({ id: i, name, average });
  }

  console.log(firstTeamName);
  console.log(firstTeamData);

  console.log(secondTeamName);
  console.log(secondTeamData);
}

main();
