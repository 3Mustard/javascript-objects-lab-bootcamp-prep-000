var recipes = {};

function updateObjectWithKeyAndValue(object,key,value){
  newRecipes = Object.assign({},object,{[key]:value});
  return newRecipes;
}