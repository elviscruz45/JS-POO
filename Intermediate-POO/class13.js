// -----------------  Codigo para copiar profundamente objetos ---------------


function isObject(subject){
  return typeof subject=="object";
}

function isArray(subject){
  return Array.isArray(subject)
}

function deepCopy(subject){
  let copySubject;

  const subjectIsObject=isObject(subject);
  const subjectIsArray=isArray(subject);

  if ( subjectIsArray){
    copySubject=[]
  }else if(subjectIsObject){
    copySubject={};
  }else{ 
    return subject;
  }

  for (key in subject){
  const keyIsObject=isObject(subject[key]);

    if (keyIsObject){
      copySubject[key]=deepCopy(subject[key]);
  } else {
    if (subjectIsArray){
      copySubject.push(subject[key])
    }else{
      copySubject[key]=subject[key];

    }
  }
  }

  return copySubject;
}
// ----------------Fin --- Codigo para copiar profundamente objetos--------------


function requiredParam(param){
  throw new Error(param + "es obligatorio");
}


function createStudent({
  name=requiredParam("name"),
  email=requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses=[],
  learningPaths=[]}={}){

    const private={
      "_name":name,
    };
    const public={
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia:{
        twitter,
        instagram,
        facebook
      },

      get name(){
        return private["_name"];
      },

      set name(newName){
        if (newName.legth !=0){
          private["_name"]=newName;
        }else{
          console.warn("Tu nombre debe tener al menos 1 caracter")
        }
      }
  };
  return public;
}

const juan= createStudent({name:"Juanito",email:"sdf@gmail.com"})
