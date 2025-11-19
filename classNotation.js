/**
 * Define the Course and Assignment concepts using the class notations
 */

// defined the Assignment class
class Assignment {

    // counstructor to create new assignment objects
    constructor(title, dueDate){

        this.title = title;

        this.dueDate = dueDate;
    }

    // method to print assignment info
      printAssignment() {

        console.log('   Title: ' + this.title + ' | Due Date: ' + this.dueDate);
    }
}

// defined the Course class
class Course {

    // constructor to create new course object
    constructor(courseName, instructor, creditHours, assignments = []) {

        this.courseName = courseName;

        this.instructor = instructor;

        this.creditHours = creditHours;

        this.assignments = assignments;
    }


    // method to print the course info and its assignment
    courseInfo() {
        console.log(
            'Course: ' + this.courseName +
            ' | Instructor: ' + this.instructor +
            ' | Credit Hours: ' + this.creditHours
        );

        // loop through the assignments array and print each assignment
        console.log('Assignments >>>');

        for (let a of this.assignments) {
            a.printAssignment();
        }
    }
}

// create the objects using the classes

//  creating instances of Assignment

let a1 = new Assignment('Project Proposal', 'Jan 15');

let a2 = new Assignment('Midterm Report', 'Feb 20');

let a3 = new Assignment('Final Report', 'Mar 30');

let a4 = new Assignment('Presentation', 'Apr 10');


// creating instances of Course, each with an array of Assignment objects

let c1 = new Course(
    'Software Engineering',
    'Dr. Pepper',
    3,
    [a1, a2]
);


let c2 = new Course(
    'Data Science',
    'Dr. Evil',
    6,
    [a3, a4]
);

c1.courseInfo();
c2.courseInfo();
