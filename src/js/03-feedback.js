const formRef = document.querySelector(".feedback-form");

formRef.addEventListener("input", onInput);
formRef.addEventListener("submit", onSubmit);

const userInfo = "feedback-form-state";
checkStorage();

function onInput(e) {
  e.preventDefault();
  const el = e.target.form.elements;
  const userData = {
    email: el.email.value,
    message: el.message.value,
  };
  const setDataStorage = JSON.stringify(userData);
  localStorage.setItem(userInfo, setDataStorage);

  //   if (e.target.form.elements[2].type === "submit") {
  //     localStorage.clear();
  //     formRef.elements.email.value = "";
  //     formRef.elements.message.value = "";
  //   }
}

function checkStorage() {
  if (!localStorage.getItem(userInfo)) {
    return console.log("localStorage is empty");
  } else {
    const getDataStorage = localStorage.getItem(userInfo);
    const dataStogrageUnparce = JSON.parse(getDataStorage);
    formRef.elements.email.value = dataStogrageUnparce.email;
    formRef.elements.message.value = dataStogrageUnparce.message;
  }
}

function onSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  formRef.elements.email.value = "";
  formRef.elements.message.value = "";
}
