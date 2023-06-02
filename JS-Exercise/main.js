const { getUser, testCase } = require("./mock");

let done = true; // หากน้องๆทำเสร็จแล้วสามารถเปลี่ยนเป็น true เพื่อเช็คความถูกต้องก่อนเรียกพี่ๆได้เลย

let users = [];
// ข้อ 1 จงเรียกใช้ getUser ซึ่งฟังชั่นนี้จะให้ข้อมูล Array ของผู้ใช้กลับมา ภายใน 1 milliseconds
// แล้วนำข้อมูลผู้ใช้นั้นไปเก็บไว้ในตัวแปรที่ชื่อว่า users (ตัวแปรในบรรทัดที่ 5)
async function initUsers() {
  // เพิ่มโค้ดตรงนี้
  users = await getUser()
  return new Promise(async (resolve) => {
    setTimeout(() => {
      resolve(users)
    }, 1)
  })
}

// ข้อ 2
// จงเขียน Function signIn ซึ่งจะรับ Parameter เป็น username และ password
// เมื่อเรียกใช้งานแล้ว username และ password ตรงกับข้อมูลที่มีอยู่ใน Array users (ตัวแปรในบรรทัดที่ 5) ให้ return true
// หากไม่มีอยู่ใน Array users (ตัวแปรในบรรทัดที่ 5) หรือผิดให้ return false
// หมายเหตุ: username พิมพ์เล็กหรือพิมพ์ใหญ่จะเหมือนกัน เช่น adMiN จะเท่ากับ admin และต้องทำข้อที่ 1 ก่อนจึงจะทำข้อนี้ได้
function signIn(username, password) {
  // เพิ่มโค้ดตรงนี้
  return users.some((user) => {
    return user.username.toLowerCase() === username.toLowerCase() && user.password === password
  })
}

// ข้อ 3
// จงเขียน Function signUp ซึ่งจะรับ Parameter เป็น username และ password
// เมื่อเรียกใช้งานให้นำ username และ password ไปเพิ่มใหม่ลงใน Array users (ตัวแปรในบรรทัดที่ 5)
// โดยความยาวของ password ต้องไม่ต่ำกว่า 3 ตัวและ username ต้องไม่ซ้ำกับข้อมูลที่มีอยู่แล้วใน Array users
// หากเพิ่มสำเร็จให้ return true หากไม่เป็นไปตามเงื่อนไขที่กำหนดจะไม่ถูกเพิ่มแล้ว return false
// หมายเหตุ: username พิมพ์เล็กหรือพิมพ์ใหญ่จะเหมือนกัน เช่น adMiN จะเท่ากับ admin และต้องทำข้อที่ 1 ก่อนจึงจะทำข้อนี้ได้
function signUp(username, password) {
  // เพิ่มโค้ดตรงนี้

  // Check for the length of the password
  if (password.length < 3) {
    return false;
  }

  // Check if the user is already existed in the registry.
  const userExists = users.some((user) => {
    return user.username.toLowerCase() === username.toLowerCase()
  })

  if (userExists) {
    return false;
  }

  users.push({ username, password })
  return true;

}

// ข้อ 4 จงกรองข้อมูลใน Array users โดยให้เอาเฉพาะ username ที่มีคำว่า "it" อยู่ และความยาวมากกว่า 3 ตัวอักษร
// แล้ว return ค่าเป็น Array ของ users ที่ผ่านเงื่อนไขการกรองแล้ว
//
// - ข้อ 4.1 (ไม่อยู่ใน TestCase)
//   ให้ใช้ forEach และ console.log แสดง "ลำดับ", "ชื่อผู้ใช้", "รหัสผ่าน" ของแต่ละ user ที่ผ่านเงื่อนไขการกรอง
function filterUsers() {
  // เพิ่มโค้ดตรงนี้
  const filteredUsers = []
  users.forEach((user, i) => {
    const { username, password } = user
    if (username.toLowerCase().indexOf("it") !== -1 && username.length > 3) {
      console.log(`[filterUser] User ${i} pass filtered case:`, user)
      filteredUsers.push(user)
    }
  })
  return filteredUsers;
}

async function main() {
  if (!done) {
    // --- Start ตรงนี้ใช้สำหรับ debug น้องๆสามารถแก้ได้ตามที่น้องต้องการ ---
    console.log("------- Start initUsers Function -------");
    initUsers();
    console.log("------- End initUsers Function -------\n");

    console.log("------- Start signIn Function -------");
    signIn("username", "password");
    console.log("------- End signIn Function -------\n");

    console.log("------- Start signUp Function -------");
    signUp("username", "password");
    console.log("------- End signUp Function -------\n");

    console.log("------- Start filterUsers Function -------");
    filterUsers();
    console.log("------- End filterUsers Function -------");
    // --- End ตรงนี้ใช้สำหรับ debug น้องๆสามารถแก้ได้ตามที่น้องต้องการ ---

  } else {
    // --- Start โค้ดสำหรับใช้ทดสอบโปรแกรมห้ามแก้นะ ---
    const getUsr = () => users;
    testCase(initUsers, signIn, signUp, filterUsers, getUsr);
    // --- End โค้ดสำหรับใช้ทดสอบโปรแกรมห้ามแก้นะ ---
  }
}

main();
