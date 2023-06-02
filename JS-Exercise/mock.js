// --------------- ห้ามแก้โค้ดส่วนนี้แต่แอบดูได้ ---------------
const testCases = require("./testCases.json");
function getUser() {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      const users = [
        { username: "itcamp", password: "itcamp19" },
        { username: "it", password: "kmitl" },
        { username: "iti", password: "kmitl" },
        { username: "admitn", password: "123r" },
        { username: "admin", password: "123" },
        { username: "adminit", password: "1233d" },
      ];
      resolve(users);
    }, 1);
  });
}
function testCase(mainCode, signIn, signUp, filterUsers, users) {
  let passCount = 0;
  mainCode()
    .then(async () => {
      const result = users();
      const result2 = await getUser();
      const isPass = result2.every((user, index) => {
        return user.username === result[index].username;
      });
      if (isPass) {
        console.log("--------------------");
        console.log("Test Case 1 : Pass");
        passCount++;
      } else {
        console.log("--------------------");
        console.log("Test Case 1 : Fail");
        console.log(
          `Your output length: ${result2.length}, Expected length: ${result.length}, Function: setUser`
        );
      }
    })
    .then(() => {
      testCases.forEach((test) => {
        const result =
          test.type === "signIn"
            ? signIn(test.input[0], test.input[1])
            : signUp(test.input[0], test.input[1]);
        const isPass = test.expect === result;

        console.log("--------------------");
        if (isPass) {
          console.log(`${test.name} : Pass`);
          passCount++;
        } else {
          console.log(`${test.name} : Fail`);
          console.log(
            `Your output: ${result}, Expected: ${test.expect}, Function: ${test.type}`
          );
        }
      });
    })
    .then(() => {
      const result = users().filter(
        (user) => user.username.includes("it") && user.username.length > 3
      );
      const result2 = filterUsers();
      const isPass = result2.every((user, index) => {
        return user.username === result[index].username;
      });
      if (isPass) {
        console.log("--------------------");
        console.log("Test Case 10 : Pass");
        passCount++;
      } else {
        console.log("--------------------");
        console.log("Test Case 10 : Fail");
        console.log(
          `Your output length: ${result2.length}, Expected length: ${result.length}, Function: filterUsers`
        );
      }
    })
    .catch((err) => {
      console.log("--------------------");
      console.log("ทำอะไรผิดรึเปล่านะะะ 🤔");
    })
    .finally(() => {
      console.log("--------------------");
      console.log(
        `ผลการทดสอบ ${passCount}/${testCases.length + 2} ${
          passCount === testCases.length + 2 ? "🎉" : ""
        }`
      );
    });
}

module.exports = { getUser, testCase };
// --------------- ห้ามแก้โค้ดส่วนนี้แต่แอบดูได้ ---------------
