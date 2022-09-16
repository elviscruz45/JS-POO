const natalia={
    name:"Natalia",
    age:20,
    cursosAprobados:["Curso Definitivo de HTML y CSS","Curso Práctico de HTML y CSS",],
    aprobarCurso:function(cursito){
        this.cursosAprobados.push(cursito)
    }
};


natalia.cursosAprobados=201122134551

console.log(natalia)



function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
//    this.aprobarCurso=function(nuevoCursito){
//        this.cursosAprobados.push(nuevoCursito);
//    }  
}

Student.prototype.aprobarCurso=function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
} 


const juanita=new Student("jaunita alejandra",15,["Curso de introduccion a la produccion de videojuegos","Curso de creacion de personajes"]);





class Student2{
    constructor(name,age,cursosAprobados){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito=new Student2("Miguel",28,["Ciencias de datos","Negocios"],);