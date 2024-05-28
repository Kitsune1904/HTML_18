const questions = [
  "Write your name",
  "Write your surname",
  "Write your email",
  "Write your year of birth",
];
const defaultAnswers = [" Anna ", "  Ratovska ", "  @sfo  jsdio.com ", "2000"];
const userInfo = {
  name: "",
  surname: "",
  email: "",
  age: 0,
};

Object.keys(userInfo).forEach((item, index) => {
    let answer = prompt(`${questions[index]}`, `${defaultAnswers[index]}`);
    userInfo[item] = item === "age" ?  (new Date().getFullYear() - Number(answer)): userInfo[item] = answer.replace(/ /g, "");
});

const userUl = document.getElementById("userInfo");

const createLiElement = (conteiner, text) => {
  let liEl = document.createElement("li");
  liEl.innerHTML = text;
  conteiner.appendChild(liEl);
}; 

createLiElement(userUl, `Full name: <span>${userInfo.name} ${userInfo.surname}</span>`)

if (userInfo.email.startsWith("@")) {
    createLiElement(
        userUl,
        `Email: not valid email - <span>${userInfo.email}</span> (symbol @ find on first place)`
      );
} else if (userInfo.email.endsWith("@")) {
    createLiElement(
        userUl,
        `Email: not valid email - <span>${userInfo.email}</span> (symbol @ find on last place)`
      );
} else if (!userInfo.email.includes("@")) {
    createLiElement(
        userUl,
        `Email: not valid email - <span>${userInfo.email}</span> (symbol @ not find)`
      );
}

createLiElement(userUl, `Age: <span>${userInfo.age}</span>`)

