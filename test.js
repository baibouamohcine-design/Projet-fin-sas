const prompt = require("prompt-sync")();
const arr = [
  {
    cin: 'QR345678',
    nom: 'El Amrani',
    prenom: 'Omar',
    partiPolitique: 'xx',
    age: 44,
    electeurs:[ 'GH123456', 'IJ789012', 'KL345678' ]
  },
  {
    cin: 'XY654321',
    nom: 'Alaoui',
    prenom: 'Yassine',
    partiPolitique: 'Parti du Progrès',
    age: 35,
    electeurs:  [ 'ST678901', 'UV123456', 'WX789012', 'YZ345678' ]
  },
  {
    cin: 'AB123456',
    nom: 'Boushaba',
    prenom: 'Soufiane',
    partiPolitique: 'Indépendant',
    age: 40,
    electeurs: [ 'OP234567' ]
  },
  
  {
    cin: 'MN789012',
    nom: 'Benali',
    prenom: 'Salma',
    partiPolitique: 'Indépendante',
    age: 29,
    electeurs: [ 'CD987654', 'EF456789' ]}
]
function filtrerpartiPolitiqueSpécifique(condidate){ 
    let stock = ""
    const serch = prompt("Saisissez le Nom du Parti que Vous Recherchez : ")
    for(let i = 0 ; i < condidate.length ;i++){
        if( condidate[i].partiPolitique === serch ){
            stock+=condidate[i].partiPolitique
        }
    }
}
filtrerpartiPolitiqueSpécifique(arr)
console.log(arr)

/*function trierLesCandidats(condidate){
  for(let i = 0 ; i<condidate.length;i++){
    for(let j = 0 ; j < condidate.length-1;j++){
        if (condidate[j].electeurs.length < condidate[j+1].electeurs.length){
        let resultat = condidate[j+1]
        condidate[j+1]= condidate[j]
         condidate[j] = resultat
        }
    }
  } 
}
trierLesCandidats(arr)
console.log(arr)
*/

/*function trierLesCandidats(condidate){
  for(let i = 0 ; i<condidate.length;i++){
    for(let j = 0 ; j < condidate.length-1;j++){
        if (condidate[j].electeurs.length < condidate[j+1].electeurs.length){
        let resultat = condidate[j+1]
        condidate[j+1]= condidate[j]
         condidate[j] = resultat
        }
    }
    
  }  
}
trierLesCandidats(arr)
console.log(arr)*/
function modifierPartiCandida(){
    const modifierPolitque = prompt("Saisissez le cin du Condidat que Vous Recherchez afin de Modifié  la Parti : ")
for(let i = 0 ; i < condidate.length ; i++ ){
    if( modifierPolitque === condidate[i].cin ){

    }
}
}
function modifierAgeCandida(){

}