//Déclaration de la fonction
function calculation (){
  //Déclaration des variables
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //regex
  var regexShoeSize = /^[1-5][0-9]$/;
  var regexAge  = /^(?:19|20)[\d]{2}$/;
  //Condition regex
  if(regexShoeSize.test(shoeSize) && regexAge.test(yearOfBirth)){
    //Déclaration et affichage du résultat
    var result = shoeSize * 2;
    result += 5;
    result *= 50;
    result -= yearOfBirth;
    result += 1766;
    alert(result);
    //Affichage d'erreur
} else {
    alert('Pointure et/ou année incorrectes');
}
}
