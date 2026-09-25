const prompt = require("prompt-sync")();
const condidate = []
while(true){
    console.log('-----------------  Menu  -------------------- ')
    console.log(' 1. Ajouter un nouveau candidat  ' )
    console.log(" 2. Ajouter plusieurs candidats à la fois " )
    console.log(' 3. Afficher la liste des candidats  ' )
    console.log(' 4. Voter pour un candidat  ' )
    console.log(" 5. Modifier les informations d'un candidat  " )
    console.log(' 6. Supprimer un candidat  ' )
    console.log(' 7. Rechercher des candidats  ' )
    console.log(" 8. Statistiques de l'élection" )
    console.log(" 0. Quitter" )
    const choix = Number(prompt(" Entré Votre Choix : "))
    if( choix === 1 ){
        console.log(' ===  Ajouter un Nouveau Candidat  === ')
        ajouterNouveauCandidat()
        
    }else if( choix === 2 ){
        console.log(' ===  Ajouter Plusieurs Candidats à La Fois  === ')
        ajouterplusieurscandidat()
    }else if(choix === 3 ){
        console.log('                               ===  Afficher la Liste Des Candidats  === ')
        console.log('1 - Afficher tous Candidats')
        console.log('2 - Trier les candidats par nombre de vote')
        console.log('3 - Filtrer et afficher uniquement les candidats d un parti politique spécifique.')
        const choix = Number(prompt(" Entré Votre Choix : "))
        if( choix === 1 ){
            console.log(' ----  Afficher tous Candidats  ---- ')
            afficherCandidats()
        }
        else if(choix === 2){
            console.log(' ----  Trier les candidats par nombre de vote  ---- ')
            trierLesCandidats()
            console.log(condidate)
        }else if (choix === 3){
            console.log(' ----  Filtrer et afficher uniquement les candidats d un parti politique spécifique  ---- ')
            filtrerpartiPolitiqueSpécifique()
        }else{console.log("Votre Choix Ne Corespondant pas Avec Menu")}
        
    }else if(choix === 4 ){
        console.log('    ===  Voter Pour un Candidat  === ')
        console.log(`---- Saisissez les Données Suivante ----`)
        voterPourCandidat()
    }else if (choix === 5 ){
        console.log(" ===  Modifier les Informations d'un Candidat  === ")
        console.log("1 - Modifier le parti politique d'un candidat.")
        console.log("2 - Modifier l'âge d'un candidat.")
        const choix = Number(prompt(" Entré Votre Choix : "))
        if( choix === 1 ){
            console.log('    ----  Modifier les Informations d un Candidat ---- ')
        }
        else if(choix === 2){
            console.log('    ----  Modifier l âge d un candidat ---- ')

        }else{console.log("Votre Choix Ne Corespondant pas Avec Menu")}
    }else if(choix === 6 ){
        console.log(" ===  Supprimer un candidat  === ")

    }else if (choix === 7 ){
        console.log(" ===  Rechercher des candidats  === ")

    }else if ( choix === 8 ){
        console.log(" ===  Statistiques de l'élection  === ")

    }else if(choix === 0 ){
        console.log(" ===  A Bientôt  === ")
        break 
    }else{console.log("Votre Choix Ne Corespondant pas Avec Menu")}
}



function ajouterNouveauCandidat(){
   let question1 =prompt("Entré votre CIN : ")
    for(let i = 0 ; i < condidate.length ; i++){
        if(condidate[i].cin === question1){
       console.log("Déjà candidate s'il vous plait entrer une nouveau cin ")
       break
        }}

    let question2 =prompt("Entré votre Nom Compléte : ")
    let question3 =prompt("Entré votre Parti Poltique : ")
    let question4 =Number(prompt("Entré votre Age : "))
    let obj = {
        cin : question1,
        nomComplete : question2,
        partiPolitique : question3,
        age : question4,
        electeurs:[] 
        }
        condidate.push(obj)
}
    
    
    

function ajouterplusieurscandidat(){
    let plusieursCandidat=Number(prompt(" Combien y a-t-il de Condidats : "))
    for(let i = 0 ; i < plusieursCandidat ;i++ ){
        console.log(`Èntrer les information de condidate ${i+1}`)
        ajouterNouveauCandidat()
    }

}



function afficherCandidats(){
    for(let i = 0;i<condidate.length ;i++){
       console.log(`CIN : ${condidate[i].cin}
       Nom Compléte : ${condidate[i].nomComplete} 
        Parti Politique : ${condidate[i].partiPolitique}
        Age : ${condidate[i].age}  
        Effecteurs : ${condidate[i].electeurs.length}
        `)
    }
}


function trierLesCandidats(){
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




function filtrerpartiPolitiqueSpécifique(){ 
    let stock = ""
    const serch = string(prompt("Saisissez le Nom du Parti que Vous Recherchez : "))
    for(let i = 0 ; i < condidate.length ;i++){
        if( condidate[i].partiPolitique == serch ){
            stock+=condidate[i]
        }
    }
    return stock
}



function voterPourCandidat(){
    let verifie = false
    let cinElecteurVoter =prompt("Entré votre CIN : ")
    for(let i = 0; i<condidate.length;i++){
        for(let j = 0 ;j <condidate[i].electeurs.length ;j++ )
        if (condidate[i].electeurs[j] === cinElecteurVoter  ){
            console.log("Vous avez déjà voté etvous n'avez pas le droit de modifier votre vote ni de voter à nouveau")
            verifie =true
            break
        }
        if(verifie == true){
          continue
        }else{
         let cinVoterCandidat =prompt("Entré votre CIN de la Cocndidate pour Voter  : ")
          if(cinVoterCandidat === condidate[i].cin ){

            condidate[i].electeurs.push(cinElecteurVoter)
        }
    }
    }
}


