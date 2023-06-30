// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
const highScore: number | boolean = 5;

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff: number[] | string[] = [5, 5];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
    name: string;
    age: number;
    sport: "ski" | "snowboard";
    level: SkillLevel;
};

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGBType = {
    r: number;
    g: number;
    b: number;
}

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type HSLType = {
    h: number;
    s: number;
    l: number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colors: (RGBType | HSLType)[] = [
    {
        r: 3,
        g: 4,
        b: 4
    },
    {
        h: 4,
        s: 3,
        l: 56
    }
];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
const greet = (name: string | string[]): void => {
    if(typeof name === 'string') {
        console.log(`Hello , ${name}`);
    } else {
        for(let i = 0; i < name.length; i++) {
            console.log(`Hello , ${name[i]}`);
        }
    }
};

function something() {
    let x = 342;
    if (true) {
        let x = 3;
        console.log(x); // 3 
    }
    console.log(x); // 342
}

function outer(x: number) {
    console.log('now inner function has access to the outer function scope: ', x);
    return function inner(y: number): number {
        return x + y;
    }
}
