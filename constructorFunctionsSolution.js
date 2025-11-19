/**
 * Define the Course and Assignment concepts using the constructor functions
 */

// constructor function for creating the Assignment object
function Assignment(title, dueDate){

    // assignment title 
    this.title = title;

    // assignment due date
    this.dueDate = dueDate;

};

// adding a method to the assignment prototype to print out the assignment details
Assignment.prototype.printAssignment = function(){

    console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
};


// constructor function for creating the Course object
function Course(courseName, instructor, creditHours, assignments = []) {

    // all the course info
    this.courseName = courseName;

    this.instructor = instructor;

    this.creditHours = creditHours;

    this.assignments = assignments


    // adding a method to the Course  prototype to print out the course info
Course.prototype.courseInfo = function(){

    console.log( 'Course: ' + this.courseName +
        ' | Instructor: ' + this.instructor +
        ' | Credit Hours: ' + this.creditHours);
    };

    // loop through the assignments array and print each assignment
console.log('Assignments >>>');

    for (let a of this.assignments) {
        a.printAssignment();
    }
};


// create the objects using the constructor functions

// creating instances of Assignment

let a1 = new Assignment('Project Proposal', 'Jan 15');

let a2 = new Assignment('Midterm Report', 'Feb 20');

let a3 = new Assignment('Final Report', 'Mar 30');

let a4 = new Assignment('Presentation', 'Apr 10');


// creating instances of Course, each with an array of Assignment objects

let c1 = new Course(
    "Software Engineering",
    "Dr. Pepper",

    3,

    [a1,a2]
);


let c2 = new Course(

    "Data Scinece",
    "Dr. Evil",

    6,

    [a3,a4]

);

// call the courseInfo method to print course details and assignments

c1.courseInfo();
c2.courseInfo();

