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
        console.log(' ===  Afficher la Liste Des Candidats  === ')
        afficherCandidats()
    }else if(choix === 4 ){
        console.log('    ===  Voter Pour un Candidat  === ')
        console.log(`---- Saisissez les Données Suivante ----`)
    }else if (choix === 5 ){
        console.log(" ===  Modifier les Informations d'un Candidat  === ")

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
    let question2 =prompt("Entré votre Nom Compléte : ")
    let question3 =prompt("Entré votre Parti Poltique : ")
    let question4 =Number(prompt("Entré votre Age : "))
    let obj = {
        cin : question1,
        nomComplete : question2,
        partiPolitique : question3,
        age : question4,
        electeurs: [] 
    }
    condidate.push(obj)
}
function ajouterplusieurscandidat(){
    let plusieursCandidat=Number(prompt(" Combien y a-t-il de Condidats : "))
    for(let i = 0 ; i < plusieursCandidat ;i++ ){
        ajouterNouveauCandidat()
    }

}
function afficherCandidats(){
    for(let i = 0;condidate.length ;i++){
console.log(`CIN : ${condidate[i].cin}
       Nom Compléte : ${condidate[i].nomComplete} 
        Parti Politique : ${condidate[i].partiPolitique}
        Age : ${condidate[i].age}  
        `)
    }
    
}
