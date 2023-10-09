function convertToSeconds(event) {
  event.preventDefault();

  var hoursInput = document.getElementById('hours');
  var resultDiv = document.getElementById('result');

  var hours = parseInt(hoursInput.value, 10);
  var seconds = hours*60**2;

  resultDiv.textContent = hours + ' hours is equal to ' + seconds + ' seconds.';
}