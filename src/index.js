module.exports = function check(str, bracketsConfig) {
  let a1 = []
  let b2 = []
  let c = 0
  let d = 0
  let e = 0
  let f = 0
    for(let i = 0; i < str.length;i++){
      a1.push(str[i].charCodeAt())
      //c = c + str[i].charCodeAt() - str[i+1].charCodeAt()
    }
    for(let i = 0; i < bracketsConfig.length;i++){
      for(let j = 0;j < bracketsConfig[i].length;j++){
        b2.push(bracketsConfig[i][j].charCodeAt())
        //d = d + bracketsConfig[i][j].charCodeAt() - bracketsConfig[i][j+1].charCodeAt()
      }
    }
    a1 = a1.sort((a,b)=>a-b)
    b2 = b2.sort((a,b)=>a-b)
    for(let i = 0; i < a1.length/2;i++){
      c = c + a1[i]
    }
    for(let i = a1.length/2; i < a1.length;i++){
      d = d + a1[i]
    }
    for(let i = 0; i < b2.length/2;i++){
      e = e + b2[i]
    }
    for(let i = b2.length/2; i < b2.length;i++){
      f = f + b2[i]
    }
    if(2*(c-d)/a1.length == 2*(e-f)/b2.length){
      return true
    }else{
      return false
    }
}
