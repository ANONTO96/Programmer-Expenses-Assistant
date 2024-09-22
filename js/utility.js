function getInputValueById(id){
   return value = parseFloat(document.getElementById(id).value); 
}
function removeHidden(id){
    document.getElementById(id).classList.remove('hidden');
}
function addHidden(id){
    document.getElementById(id).classList.add('hidden');
}