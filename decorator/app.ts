/**
 * Created by Isingh on 5/2/2017.
 */
function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class Person {
    constructor() {
        console.log("HI")
    }

}

//Factory
function logging(value: boolean) {
    return value ? logged : null;

}
@logging(true)
class Car {

}

//Method decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {

        descriptor.writable = value;
    }
}

//Method Property
function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const nameDescriptor: PropertyDescriptor = {
            writable: value
        };
        return nameDescriptor;

    }
}
function editable1(value: boolean) {
    {
        return function (target: any, param: string, descriptor: PropertyDescriptor) {
            descriptor.writable = value;
            console.log("target", target);
            console.log("methodName", param);
            console.log("descriptor", descriptor.writable);
            console.log("descriptor value", descriptor.value)
        }
    }
}
//Parameter Property
class Project {
    projectNmae: string;

    constructor(name: string) {
        this.projectNmae = name;
    }

    @editable1(true)
    calcBudget() {
        console.log(1000);
    }
}
const project = new Project("super project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
}
project.calcBudget();
console.log(project.projectNmae);
//parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target", target);
    console.log("MethodName", methodName);
    console.log("param", paramIndex);
}
class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo  printAll: boolean) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    }
}
const course = new Course("MCA");
course.printStudentNumbers("any", true);
course.printStudentNumbers("any", false);
console.log(course.name);
