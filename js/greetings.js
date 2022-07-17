const loginArea = document.querySelector("#login-area");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const btnLogOut = document.querySelector("#btn-logout");
const wrapper = document.querySelector("#wrapper");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginArea.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function handleLogOut() {
  localStorage.removeItem(USERNAME_KEY);
  loginArea.classList.remove(HIDDEN_CLASSNAME);
  wrapper.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  wrapper.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginArea.classList.remove(HIDDEN_CLASSNAME);
  wrapper.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginArea.classList.add(HIDDEN_CLASSNAME);
  wrapper.classList.remove(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
  btnLogOut.addEventListener('click', handleLogOut);
}
