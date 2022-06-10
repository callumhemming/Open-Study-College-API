/* 

Example course: https://www.openstudycollege.com/courses/a-level-psychology

Looking at the open study college the information the Courses table will need is:

Course name : String

Results Tag : String

The course at a glance : text[]

Course overview :text

course duration:
course outcome:
entry requirements: text
assessment:text



Reviews

 Q and As 

*/

const coursesData = [
  {
    code: "OSC1293",
    name: "A Level Psychology",
    tag: "We have a 94% pass rate ** with our A Levels. Study A Level Psychology from home and earn up to 56 UCAS points.",
    atAGlance: [
      "Gain an official A Level Psychology qualification from AQA.",
      "Achieve up to 56 UCAS points to help you land your dream place at university.",
      "Nationally recognised accredited A Level qualification that is the same course offered in schools and colleges.",
      "No waiting around for term to start - you can enrol today and start studying as soon as you are ready.",
      "Study this online A Level from home at your own pace.",
      "Benefit from the full support of your personal tutor via email.",
      "Choose to include exams and save up to £400*.",
    ],
    overview:[
        `During this A Level Psychology course, you'll delve into psychological concepts such as types of conformity in social settings; the behavioural, emotional, and cognitive characteristics of phobia, depression and OCD; and the divisions of the nervous system. You will also have the chance to choose between three optional areas of study as detailed below to suit your areas of interest.

        Depending on the path you hope to take after your studies, the A Levels we recommend that you study alongside this course are A Level Sociology, A Level Business Studies, or A Level Philosophy.
        
        DEGREES THIS SUBJECT COULD LEAD TO
        As a subject, A Level Psychology feeds into many different areas and will come in useful for a wide variety of degrees including marketing, criminology, education, publishing, social sciences, and business, as well as specialist psychology degrees such as child psychology, clinical psychology, forensic psychology, and sport psychology.`
    ],
    extraInfo:[
        `You will have two years to complete your A Level Psychology course.

        The only deadlines involved in studying this course are concerning the A Level exam timetables. Please see the exams and assessments section for more information on this.`
    ],
    examDetails:JSON.stringify( [
        {name:"Paper 1", points:["Type: written examination","Duration: two hours","Weighting: 33.3% of A Level","Total marks: 96","Assessed: content from the following topics - social influence, memory, attachment, and psychopathology","Assessment format: a mixture of multiple-choice, short answer, and extended writing"]},
        {name:"Paper 2",points:["Type: written examination","Duration: two hours","Weighting: 33.3% of A Level","Total marks: 96","Assessed: content from the following topics: approaches in psychology, biopsychology, and research methods.","Assessment format: a mixture of short and long answer questions and multiple-choice questions"]},
        {name:"Paper 3", points:["Type: written examination","Duration: two hours","Weighting: 33.3% of A Level","Total marks: 96","Assessed: content from the issues and debates in psychology topic as well as content from your chosen optional topic.","Assessment format: a mixture of short and long answer questions and multiple-choice questions"]}
    ])

  },
];

/* 
Tables:

Courses:
    SERIAL PRIMARY KEY
    Code: string
    Name: string: 
    Tag: string
    Overview: string[]
    Extra Info: String[]
    At a glance
    Exam details: [{Title, Content},{}] // JSON


Reviews:
    SERIAL PRIMARY KEY
    Course code
    Timestamp
    Comment
    Star Rating
    Name
QandAs:
    SERIAL PRIMARY KEY
    Course Code
    Question
    Answer
Course Options



*/
