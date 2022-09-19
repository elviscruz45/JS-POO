//Objeto de prueba

const obj1 = {
  a: "a",
  b: "b",
  c: {
    d: "d",
    e: "e",
  },
  editA() {
    this.a = "AAAAAA";
  }
};


function isObject(subject){
  return typeof subject=="object";
}

function isArray(subject){
  return Array.isArray(subject)
}


//Funcion general para copiar cualquier tipo de valor para un objeto

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

