var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by Isingh on 5/2/2017.
 */
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = (function () {
    function Person() {
        console.log("HI");
    }
    return Person;
}());
Person = __decorate([
    logged
], Person);
//Factory
function logging(value) {
    return value ? logged : null;
}
var Car = (function () {
    function Car() {
    }
    return Car;
}());
Car = __decorate([
    logging(true)
], Car);
//Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//Method Property
function overwritable(value) {
    return function (target, propName) {
        var nameDescriptor = {
            writable: value
        };
        return nameDescriptor;
    };
}
function editable1(value) {
    {
        return function (target, param, descriptor) {
            descriptor.writable = value;
            console.log("target", target);
            console.log("methodName", param);
            console.log("descriptor", descriptor.writable);
            console.log("descriptor value", descriptor.value);
        };
    }
}
//Parameter Property
var Project = (function () {
    function Project(name) {
        this.projectNmae = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    return Project;
}());
__decorate([
    editable1(true)
], Project.prototype, "calcBudget", null);
var project = new Project("super project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
console.log(project.projectNmae);
//parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target", target);
    console.log("MethodName", methodName);
    console.log("param", paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(2000);
        }
    };
    return Course;
}());
__decorate([
    __param(1, printInfo)
], Course.prototype, "printStudentNumbers", null);
var course = new Course("MCA");
course.printStudentNumbers("any", true);
course.printStudentNumbers("any", false);
console.log(course.name);
//# sourceMappingURL=app.js.map