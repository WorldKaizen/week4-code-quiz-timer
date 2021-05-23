var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var title1=document.getElementById("title1")


//


var time=60;
var id=setInterval(function(){
    
   var watch=title1.textContent=time--+'  seconds remaining'
   if(time===-1){
       clearInterval(id)
       title1.textContent="Your time is Up, Select answers and end game now"
   }
   
},1000)

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
        score += 10;
        time +=10;//increases time by 10 second each time answer is correct
	}
    selectedOption.checked = false;
    if(questions[currentQuestion].answer !== answer){
       
        time -=10;//decreases time by 10 second each time answer is correct
	}
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
        localStorage.setItem("score", score);
        localStorage.setItem("time",time);
	 window.location.href="final.html"
	//submit.addE
     return;}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);


// x.addEventListener('click',function(event){

//     event.preventDefault()
//     var name = document.querySelector('name').value;
//     localStorage.setItem('name',name );
//     window.location.href="fron.html"
//     h3.append(s);
//     h5.append(t)
