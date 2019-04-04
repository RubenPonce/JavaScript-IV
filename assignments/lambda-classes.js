// CODE here for your Lambda Classes
class Person {
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
        
    }
    speak(){
        return `Hello, my name is ${this.name}, I am from ${this.location}`;
    }
   
}

class Instructor extends Person {
    constructor(props){
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase = props.age;
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}`
    }
    extraCredit(student){
        if(student.grade <50){
            student.grade += 40; 
            return `${student.name} earned extra credit and now has a score of ${student.grade}`
        }
        else if(student.grade >90){
            student.grade -=20;
            return `${student.name} needs to be humbled and now has a score of ${student.grade}`
        } else{
            return `${student.name} doesn't receive extra credit`
        }
    }
}
class ProjectManager extends Instructor{
    constructor(props){
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }
    standUp(slack){
        return `${this.name} announces to ${slack} @channel stand up time!`
    }
    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}

class Student extends Person {
    constructor(props){
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
        this.grade = Math.floor(Math.random() * 100 + 1);

    }
    listSubjects(){
        return `favorite subjects: \n${this.favSubjects.join(' \n')}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
}

const ruben = new Person({
    name: "Ruben",
    age: 25,
    location: 'Pico Rivera',
    gender: 'male'

});
console.log()

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the homies`
  });

const wilma = new ProjectManager({
    name: 'Wilma',
    location: 'San Francisco',
    age: 2004,
    gender: 'female',
    favLanguage: 'Ruby',
    specialty: 'Front-end',
    catchPhrase: `Omae wa mou shinderu`,
    gradClassName: "WEB19",
    favInstructor:"josh knell"

  });// log standUp and debugsCode

const jerry = new Student({
    name: 'Jerry',
    location: 'New York',
    age: 80,
    gender: 'male',
    previousBackground: "a background",
    className:"WEB 19",
    favSubjects: ['JavaScript','Chemical Engineering','Quantum Physics']
  });//log listSubjects and PRAssignment
console.group('LambdaClass.js \n')
console.log(ruben);
console.log(fred);

console.log(fred.demo('Psuedo Classical Inheritigial Quantum Physics'));
console.log(fred.grade(jerry,"quantum physics"));
console.log(fred.extraCredit(jerry));
console.log(wilma);
console.log(wilma.debugsCode(ruben,'chemical engineering'));
console.log(wilma.standUp('WEB 19'));
console.log(jerry);
console.log(jerry.listSubjects(jerry.favSubjects));
console.log(jerry.PRAssignment('JavaScript IV'));
console.groupEnd(); 

