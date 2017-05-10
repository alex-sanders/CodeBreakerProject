let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
  answer.value = math.floor(math.random() * 10000).toString();
  while(answer.value.length < 4) {
      answer.value = "0" + answer.value;
  }
  return answer;

}
