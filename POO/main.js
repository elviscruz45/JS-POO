const natalia={
    name:"Natalia",
    age:20,
    cursosAprobados:["Curso Definitivo de HTML y CSS","Curso Práctico de HTML y CSS",],
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    },
};
natalia.aprobarCurso("casa")
console.log(natalia.cursosAprobados)



function Student(name,age,cursosAprobados){
    this.name=name;
    this.age=age;
    this.cursosAprobados=cursosAprobados;
}




Student.prototype.aprobarCurso=function(nuevoCursito){
    this.cursosAprobados.push(nuevoCursito);
}

const juanita=new Student("Juanita Alejandra",
15,["Curso de Introducción a la Producción de Videojuegos","Curso de Creación de Personajes",],);



//prototipos clases

class Student2{
    constructor({name,cursosAprobados=[],age,email,}){
        this.name=name;
        this.email=email;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }

    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}
const miguelito=new Student2({
    name:"Miguel",
    age:28,
    email:"miguelito@platzi.com",});

