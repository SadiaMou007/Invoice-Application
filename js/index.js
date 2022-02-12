// date
const date = new Date();
document.getElementById("date").innerText = date.toLocaleDateString();

const submitBtn = document.getElementById("user-info-submit");
const deletetBtn = document.getElementById("user-info-cancel");
const userInfo = document.getElementById("user-info");
const userInfoCard = document.getElementById("user-info-card");

submitBtn.addEventListener("click", function () {
  if (userInfo.value == "") {
    return;
  }
  userInfoCard.innerText = userInfo.value;
  userInfo.value = "";
});
deletetBtn.addEventListener("click", function () {
  userInfo.value = "";
});
