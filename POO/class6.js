class Student2{
    constructor({name,age,cursosAprobados=[]}){
        this.name=name;
        this.age=age;
        this.cursosAprobados=cursosAprobados;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito);
    }
}

const miguelito=new Student2({name:"Miguel",age:28,});