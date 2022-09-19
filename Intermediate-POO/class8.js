


const numeritos=[1,2,3,4,5,6,7,8,9,0,231,,14,15,165,,65,145,1,4,6,34,543,5,76,3];

// let numerito=0;

// for (let index=0;index<numeritos.length;index++){
//   numerito=numeritos[index];
//   console.log({index,numerito})
// }


function recursiva(parametro){
  if (parametro.length !=0){
    const furNum=parametro[0];
    console.log(furNum);
    parametro.shift();
    return recursiva(parametro)

  }
}

recursiva(numeritos)