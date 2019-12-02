function main() {
    const MEMBER = 9;
    let firstTeamInfo = "";
    let firstTeamData = [];
  
    let secondTeamInfo = "";
    let secondTeamData = [];
  
    console.log(secondTeamData[3]);
    const firstTeamName = prompt("1팀의 이름을 입력하세요.");
  
    for (let i = 0; i <= MEMBER; i++) {
      const name = firstTeamInfo.split(",")[0] || "1번팀 투수";
      const average = firstTeamInfo.split(",")[1] || "투수";
  
      firstTeamInfo = prompt(
        `${i +
          1}번 타자 정보 입력 - ex) 권은지, 0.499 \n단, 확률로 타율(h)은 0.1 < h < 0.5. 타율은 소숫점 셋째자리까지 입력가능.`
      );
      firstTeamData.push({ id: i, name, average });
    }
  
    const secondTeamName = prompt("2팀의 이름을 입력하세요.");
  
    for (let i = 0; i <= MEMBER; i++) {
      const name = secondTeamInfo.split(",")[0] || "2번팀 투수";
      const average = secondTeamInfo.split(",")[1] || "투수";
  
      secondTeamInfo = prompt(
        `${i}번 타자 정보 입력 - ex) 권은정, 0.499 \n단, 확률로 타율(h)은 0.1 < h < 0.5`
      );
      secondTeamData.push({ id: i, name, average });
    }
  
    console.log(firstTeamName);
    console.log(firstTeamData);
  
    console.log(secondTeamName);
    console.log(secondTeamData);
  }
  
  // main();
  // function ex(){
  //   var obj = {
  //     "1": 0.33333,
  //     "2": "권은지"
  //   };
  
  //   var first_key = Object.keys(obj)[0];
  //   var first_value = obj[Object.keys(obj)[0]].toFixed(3);
  //   var first_rangeValue = 0.1 > obj[Object.keys(obj)[0]] > 0.5;
  //   if (0.1 > first_rangeValue && first_rangeValue > 0.5) {
  //     console.log("222");
  //   }
  //   console.log(first_key);
  //   console.log(first_value);
  //   console.log(first_rangeValue);
  // }
  // console.log(ex());