var allQuestions = [{question: ["Q1: Who is Prime Minister of the United Kingdom?"],
                    choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"],
                    correctAnswer:0},
    {question: ["Q2: When did Columbus found America?"],
     choices: ["1492", "1200", "0", "1493"],
    correctAnswer:0},
    {question: ["Q3: What is the Capital of Holland?"],
    choices: ["The Hague", "Amsterdam", "Rotterdam", "Utrecht"],
    correctAnswer:1},
    {question: ["Q4: How many centimeters are there in a meter?"],
    choices: ["30", "40", "50", "100"],
    correctAnswer:3},
    {question: ["Q5: How many universities does Amsterdam have?"],
    choices: ["1", "2", "3", "6"],
    correctAnswer:0}];

 
    var Score = 0;

    function PopulateQuestion (number){
        var answerContainer =  document.getElementById("answer")
       answerContainer.innerHTML = "";
   var q = allQuestions[number].question
        var a = allQuestions[number].choices
    		for(j=0; j<= a.length -1 ; j++){
    			var radioButton = document.createElement('input');
    			radioButton.type = "radio";
				radioButton.name = "answer";
				radioButton.value = j;
				radioButton.id = a[j];
                radioButton.className = "answers"
				var text = document.createTextNode(a[j] );
    		document.getElementById("answer").appendChild(radioButton )
    		document.getElementById("answer").appendChild(text)

    }


		document.getElementById("question").innerHTML = q


    }
    PopulateQuestion(0)

    document.getElementById("score").innerHTML = Score
    function CheckAnswer(){
    	var a = document.getElementsByClassName("answers")
        var answerChosen = null;
        for (i=0; i<= a.length - 1; i ++){
           if (a[i].checked){
               // alert(a[i].value)
                answerChosen = a[i].value
              // break
             }
        }
        for(h=0; h<= allQuestions.length -1; h++){
           var q = allQuestions[h].question
           var allAnswer = allQuestions[h].choices

           if(q ==  document.getElementById("question").innerHTML && h != allQuestions.length -1 ){
          //  console.log( allQuestions[h].correctAnswer)
           // console.log(answerChosen)
            if(answerChosen == allQuestions[h].correctAnswer ){
                       console.log( allQuestions[h].question)
               PopulateQuestion(h+1)
                Score ++
      document.getElementById("score").innerHTML = Score
                 break
            }else{
                PopulateQuestion(h+1)
                document.getElementById("score").innerHTML = Score
                break
            }
          
        } else if (h == allQuestions.length -1){
            console.log(answerChosen)
            console.log( allQuestions[h].question)
            if(answerChosen == allQuestions[h].correctAnswer){
               Score++
               alert(Score)
           }
            document.getElementById("question").innerHTML = Score
            document.getElementById("answer").innerHTML = ''
            document.getElementById("score").innerHTML = Score
            return
        }
    
    }


    }