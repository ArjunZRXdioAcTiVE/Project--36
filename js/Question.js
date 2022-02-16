class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement("h2")
    var fMessage_1 = createElement ("h2");
    var fMessage_2 = createElement ("h2");
    var fMessage_3 = createElement ("h2");
    this.fMsgs = [fMessage_1, fMessage_2, fMessage_3];
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  fMsgs_hide () {
    this.fMsgs [0].hide ();
    this.fMsgs [1].hide ();
    this.fMsgs [2].hide ();
  }

  tMessage () {
    this.fMsgs_hide ();

    if(
        this.input1.value() !== "Enter Your Name Here...." && this.input1.value () !== null && 
        this.input2.value () !== "Enter Correct Option No.." && this.input2.value () !== null
      ) {
      var message = `Thank You, ${this.input1.value ()} Your Answer Has Been Submitted`;
      this.message.html(message);
      this.message.position (300, 300);
    } else {
      console.log ("Not entered");
      if (
        this.input1.value () === "Enter Your Name Here...." || this.input1.value () === null &&
        this.input2.value () === "Enter Correct Option No.." || this.input2.value () === null
        ) {  
        this.fMsgs [0].html ("Please Enter Your Name and the correct Option Number");
        this.fMsgs [0].position (250, 300);
        this.fMsgs [0].show ();
      } else if (this.input1.value () == "Enter Your Name Here...." || this.input1.value () == null) {
        this.fMsgs [1].html ("Please Enter Your Name");
        this.fMsgs [1].position (300, 300);
        this.fMsgs [1].show ();
      } else if (this.input2.value () == "Enter Correct Option No.." ||this.input2.value () == null) {
        this.fMsgs [2].html ("Please Enter the correct Option Number");
        this.fMsgs [2].position (300, 300);
        this.fMsgs [2].show ();
      }
    } 
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(150, 80);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 100);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 120);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 140);
    this.option4.html("4: Example" );
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(()=>{
      this.tMessage ()
    });
  }
}
