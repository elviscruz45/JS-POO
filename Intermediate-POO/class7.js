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


const stringifyComplexObj=JSON.stringify(obj1)

const obj2=JSON.parse(stringifyComplexObj);


console.log(stringifyComplexObj)
console.log(obj2)