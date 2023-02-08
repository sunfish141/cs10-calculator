document.getElementById("btn").addEventListener("click", calculateGrade);

function calculateGrade() {
  //input

  var client1 = +document.getElementById("client1").value;
  var programming1 = +document.getElementById("programming1").value;
  var programming2 = +document.getElementById("programming2").value;
  var client2 = +document.getElementById("client2").value;
  var project = +document.getElementById("project").value;

  //process

  let finalGrade =
    (client1 + programming1 + programming2 + client2 + project) / 5;

  if (finalGrade > 100) {
    finalGrade = 100;
  }
  let gradedisplay = `Final CS10 Grade: ${finalGrade.toFixed(2)}%`;

  //output

  if (
    client1 < 0 ||
    programming1 < 0 ||
    programming2 < 0 ||
    client2 < 0 ||
    project < 0
  ) {
    alert("Values must not be negative");
  } else {
    document.getElementById("finalgrade").innerHTML = gradedisplay;
  }
}
