function displayAnswer(button) {
  var question_number = parseInt(button.id.split("-")[1]);
  const answers = [2, 1, 2, 3, 0, 0, 2, 0, 1, 3, 2, 0, 2, 0, 2, 3, 1, 0, 2, 2];
  var correct_answer='option-'+question_number+ '-'+answers[question_number];
  var incorrect_answers = [];
  var result_spans = [];
  for (i=0; i<4; i++) {
     result_spans.push('result-'+question_number+ '-'+i);
     if (i != answers[question_number]) {
       incorrect_answers.push('option-'+question_number+ '-'+i);
     }
  }
  if (document.getElementById(correct_answer).checked) {
    //document.getElementById(result_spans[answers[question_number]]).style.color = 'limegreen';
    //document.getElementById(result_spans[answers[question_number]]).innerHTML = 'Correct!';
    document.getElementById("question-card-"+question_number).style.background = "#b1eb86";
    }

  else {
    var option_checked;
    for (i in incorrect_answers) {
      var option_checked = parseInt(incorrect_answers[i].split("-")[2]);
      if (document.getElementById(incorrect_answers[i]).checked){
        //document.getElementById(result_spans[option_checked]).style.color = 'red';
        //document.getElementById(result_spans[option_checked]).innerHTML = 'Incorrect!';
        document.getElementById("question-card-"+question_number).style.background = "#f09081";
      }
    }
  }
}
