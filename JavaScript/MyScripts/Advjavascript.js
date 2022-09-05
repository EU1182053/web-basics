
/*CapitalCase */
class Student{
    /*instance variables */
    sid;
    sname;
    stotalMarks;
}

let stud=new Student(); // default constructor : if not then script interally provides
console.log(stud.sid);  // undefined
stud.sid=111;
stud.sname="Hari";
stud.stotalMarks=800;
console.log(stud.sid);
console.log(stud.sname);
console.log(stud.stotalMarks);


class Employee{
   empId;
   empName;
   empContact;
   static count=0;
   /*  constructor(){
        console.log("in constructor");
    } */
    /* class must have only one constructor */
    constructor(eid,ename,contact){
        this.empId=eid;
        this.empName=ename;
        this.empContact=contact;
    }
    getDetails(){
        return `Id : ${this.empId}, Name: ${this.empName}, Contact Number: ${this.empContact}`;
    }
}
console.log("--------------");
let emp1=new Employee(); // p-constructor but undefined values
console.log(emp1.empId);
let emp2=new Employee(111,'Manoj',9898989898); //p constructor
console.log(emp2.empId);
console.log(emp2.empName);
console.log(emp2.empContact);
let details=emp2.getDetails();
console.log(details);
console.log(Employee.count);

for(let property in emp2){
    console.log(property);
    //console.log(emp2.property); : wrong way
    console.log(emp2[property]); /* emp2.empId, emp2.empName, emp2.empContact */
    console.log(`${property} ==> ${emp2[property]}`);
}