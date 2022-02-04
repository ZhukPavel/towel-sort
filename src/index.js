module.exports = function towelSort (matrix){
if(!matrix) return [];
let result = new Array
  matrix.forEach(function(element, index){
            if (index%2 == 0){
              element.forEach(items=>{
                result.push(items)}
              )
            }
            else{ element = element.reverse()
              element.forEach(items => {
                result.push(items)
                
              });
             }
  } )
  return result
} 
 