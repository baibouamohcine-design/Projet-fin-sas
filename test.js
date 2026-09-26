const prompt = require("prompt-sync")();
const arr = [
  {
    cin: 'QR345678',
    nomComplete : 'El Amrani Omar',
    partiPolitique: 'xx',
    age: 44,
    electeurs:[ 'GH123456', 'IJ789012', 'KL345678' ]
  },
  {
    cin: 'XY654321',
    nomComplete: 'Alaoui Yassine',
    partiPolitique: 'Parti du Progrès',
    age: 35,
    electeurs:  [ 'ST678901', 'UV123456', 'WX789012', 'YZ345678' ]
  },
  {
    cin: 'AB123456',
    nomComplete: 'Boushaba Soufiane',
    partiPolitique: 'Indépendant',
    age: 40,
    electeurs: [ 'OP234567' ]
  },
  
  {
    cin: 'MN789012',
    nomComplete : 'anas',
    partiPolitique: 'Indépendante',
    age: 29,
    electeurs: [ 'CD987654', 'EF456789' ]}
]
function  nombreCandidatsParParti(){
  for(let i = 0 ; i<arr.length;i++){
    for(let j = 0 ; j < arr.length-1;j++){
        if (arr[j].electeurs.length < arr[j+1].electeurs.length){
        let resultat = arr[j+1]
        arr[j+1]= arr[j]
         arr[j] = resultat
        }
    }
  } 
  for(let i = 0 ; i < 3 ; i++){
    console.log(arr[i])
  }
}
nombreCandidatsParParti(arr)
/*function topTrois(){
    let max1 = arr[0]
    let max2=arr[0]
    let max3=arr[0]
    for(let i = 0 ;i < arr.length; i++){
        for(let j = 0 ; j < arr[i].electeurs.length; j++ ){
            if( arr[i].electeurs[j] > max1 ){
                   max1 = arr[i].electeurs[j]
                }
        }
             
    }
    console.log( `Nombre Total des Votes est :${max1}`)
}


/*function filtrerpartiPolitiqueSpécifique(){ 
    let nomDuParti = prompt("Entrer Le Nom de Parti pour  Filtrer et afficher uniquement les candidats d'un parti politique spécifique : ")
    let verifie = false
    for(let i = 0 ; i < arr.length ; i++){
        if(nomDuParti === arr[i].partiPolitique){
            verifie = true
            console.log("Parti Exist dans  Listes des  Campagne électorale ")
            console.log(`CIN : ${arr[i].cin}
                  Nom Compléte : ${arr[i].nomComplete} 
                  Parti Politique : ${arr[i].partiPolitique}
                  Age : ${arr[i].age}  
                  Effecteurs : ${arr[i].electeurs.length}
               `)
        }
    }
    if(verifie === false){
        console.log(" Parti N'exist pas dans les Listes des  Campagne électorale ")
    }
}
filtrerpartiPolitiqueSpécifique(arr)




/*function suprimerCondidate(condidate){
        let cinCondidat = prompt("saisissez la CIN de candidat Pour Suprimer  ");
        let index= -1
        for (let i = 0 ; i < condidate.length ; i++){
            if (cinCondidat === condidate[i].cin){
               index = i
            }
        }

        if (index === -1){
            console.log("Ce candidat n'existe pas ")
        }
        else{
                condidate.splice(index);
        console.log("Supprimé avec succès")
    }
}
suprimerCondidate(arr)
console.log(arr)
/*function modifierCandida(condidate){
    let  verifierCin = prompt("Saisissez le cin du Condidat que Vous Recherchez afin de Modifié  la Parti : ")
    let verifie = false
    for(let i = 0 ; i < condidate.length ; i++ ){
       if(verifie === condidate[i].cin ){
        verifie = true
        console.log("1 - Modifier le parti politique d'un candidat.  ")
        console.log("2 - Modifier l'âge d'un candidat.  ")
        let choix = Number(prompt("Entrer Votre Choix : "))
        if (choix === 1 ){
            let X = true
                let nouvellecandida = prompt("La Nouvelle Politique Nom : ")
                for (let j = 0; j < condidate.length; j++) {
                    if (condidate[j].partiPolitique === nouvellecandida) {
                        X = false
                        console.log("Cette  Parti Politique Nom  Déjà Utilisé")
                    }
                }
                if( X === true){
                    condidate[i].partiPolitique = nouvellecandida
                }
        }else if(choix === 2){
            let agecandida =Number(prompt("Entrer son age  : "))
            if (agecandida > 0) {
                    candidats[i].age = agecandida
                } else {
                    console.log("you cant be -18")
                }
        }else {
                console.log("---- Votre Choix Ne Corespondant pas Avec Menu ----- ")
            }
    }
}if (verifie === false) {
        console.log("Nous n'avons pas trouvé ce filtre, veuillez saisir un filtre valide.")
    }
}
modifi(arr)
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
