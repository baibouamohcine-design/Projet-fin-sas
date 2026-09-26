const prompt = require("prompt-sync")();
const condidate = [
    {
    cin: 'JC686720',
    nomComplete : 'Mohcine Alaoui',
    partiPolitique: 'Pam',
    age: 34,
    electeurs:[ 'GH123456', 'IJ789012', 'KL345678','HH869574', 'KL339678','HL869574' ]
  },
    {
    cin: 'JC686721',
    nomComplete : 'Mohcine Baiboua',
    partiPolitique: 'Pdg',
    age: 44,
    electeurs:[ 'GH123456', 'IJ789012', 'KL345678','HH869574' ]
  },
    {
    cin: 'QR345678',
    nomComplete : 'El Amrani Omar',
    partiPolitique: 'Pam',
    age: 96,
    electeurs:[ 'GH123456', 'IJ789012', 'KL345678' ]
  },
    {
    cin: 'XY654321',
    nomComplete: 'Alaoui Yassine',
    partiPolitique: 'Pdg',
    age: 35,
    electeurs:  [ 'ST678901', 'UV123456', 'WX789012', 'YZ345678','AM868798' ]
  },
  {
    cin: 'AB123456',
    nomComplete: 'Boushaba Soufiane',
    partiPolitique: 'Indépendant',
    age: 40,
    electeurs: [ 'OP234567','JC782539' ]
  },
  {
    cin: 'JC123456',
    nomComplete: 'Ahmadi  Soufiane',
    partiPolitique: 'Indépendant',
    age: 38,
    electeurs: [ 'OP234567' ]
  },
  {
    cin: 'JC129356',
    nomComplete: 'Ahmadi  Anas',
    partiPolitique: 'Pdg',
    age: 18,
    electeurs: [ 'OP233067' ]
  },
]
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
        console.log(" -----  Modifier les Informations d'un Candidat  ---- ")
        modifierCandida()
    }else if(choix === 6 ){
        console.log(" -----  Supprimer un candidat  ----- ")
        suprimerCondidate()
    }else if (choix === 7 ){
        console.log(" -----  Rechercher des candidats  ----- ")
        rechercherDesCandidat()
    }else if ( choix === 8 ){
        console.log("                  ===  Statistiques de l'élection  === ")
        console.log('1 - Afficher le nombre total de candidats.')
        console.log("2 - Afficher le nombre total de votes exprimés dans toute l'élection.")
        console.log('3 - Afficher le Top 3 des candidats ayant le plus de votes')
        console.log('4 - Afficher le nombre de candidats par parti politique.')
        const choix = Number(prompt(" Entré Votre Choix : "))
        if(choix === 1 ){
            console.log(" -----  Nombre Total des Candidats  ----- ")
            nombreTotallCondidat()
        }else if(choix === 2){
            console.log("   ----- Nombre Total des Votes ----- ")
            nombreTotallelec()
        }else if(choix === 3){
            console.log("   ----- Top 3 des candidats ayant le plus de votes ----- ")
            topTrois()
        }else if(choix === 4){
            console.log("   ----- Le Nombre de Candidats par Parti Politique ----- ")
            nombreCandidatsParParti()
        }else{console.log("Votre Choix Ne Corespondant pas Avec Menu")}
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
    let question4 = 0
    while(question4 < 18){
        question4 =Number(prompt("Entré votre Age ( 18+ ) : "))
    }
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
        console.log(` Entrer les information de condidate ${i+1}`)
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
    let nomDuParti = prompt("Entrer Le Nom de Parti pour  Filtrer et afficher uniquement les candidats d'un parti politique spécifique : ")
    let verifie = false
    for(let i = 0 ; i < condidate.length ; i++){
        if(nomDuParti === condidate[i].partiPolitique){
            verifie = true
            console.log("Parti Exist dans  Listes des  Campagne électorale : ")
            console.log(`CIN : ${condidate[i].cin}
                  Nom Compléte : ${condidate[i].nomComplete} 
                  Parti Politique : ${condidate[i].partiPolitique}
                  Age : ${condidate[i].age}  
                  Effecteurs : ${condidate[i].electeurs.length}
               `)
        }
    }
    if(verifie === false){
        console.log(" Parti N'exist pas dans  Listes des  Campagne électorale")
    }
}
function voterPourCandidat(){
    let verifie = false
    let cinElecteurVoter =prompt("Entré votre CIN : ")
    for(let i = 0; i<condidate.length;i++){
        for(let j = 0 ;j <condidate[i].electeurs.length ;j++ ){
           if (condidate[i].electeurs[j] === cinElecteurVoter  ){
               console.log("Vous avez déjà voté etvous n'avez pas le droit de modifier votre vote ni de voter à nouveau")
               verifie =true
               break
            }
        }
    if(verifie == true){
          return;
    }else{
         let cinVoterCandidat = prompt("Entré votre CIN de la Cocndidate pour Voter  : ")
          if(cinVoterCandidat === condidate[i].cin ){

                condidate[i].electeurs.push(cinElecteurVoter)
                return
          }
        }
    }
}
function modifierCandida(){
    let  verifierCin = prompt("Saisissez le cin du Condidat que Vous Recherchez afin de Modifié  la Parti : ")
    let verifie = false
    for (let i = 0 ; i < condidate.length ; i++ ){
       if(verifierCin === condidate[i].cin ){
        verifie = true
        console.log("1 - Modifier le parti politique d'un candidat.  ")
        console.log("2 - Modifier l'âge d'un candidat.  ")
        let choix = Number(prompt("Entrer Votre Choix : "))
        if (choix === 1 ){
            let X = true
                let nouvellecandida = prompt("La Nouvelle Politique Nom : ")
                for (let j = 0; j < condidate.length; j++){
                    if (condidate[j].partiPolitique === nouvellecandida) {
                        X = false
                        console.log("Cette  Parti Politique Nom  Déjà Utilisé")
                    }
                }
                if( X === true){
                    console.log("good")
                    condidate[i].partiPolitique = nouvellecandida
                }
        }else if(choix === 2){
            let agecandida = (prompt("Entrer Nouveau age  : "))
            if (agecandida > 0){
                    condidate[i].age = agecandida
                } else {
                    console.log("Age non Valid ")
                }
        }else {
                console.log("---- Votre Choix Ne Corespondant pas Avec Menu ----- ")
            }
    }
}if (verifie === false) {
        console.log("Nous n'avons pas trouvé ce filtre, veuillez saisir un filtre valide.")
    }
}
function suprimerCondidate(){
        let cinCondidat = prompt("saisissez la CIN de candidat Pour Suprimer : ");
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
                condidate.splice(index,1);
        console.log("Supprimé avec succès")
    }
}
function rechercherDesCandidat(){
    let nomCondidat = prompt("Entrer Le Nom Complet de Candidat Afin de Trouver la Condidat par son Nom : ")
    let verifie = false
    for(let i = 0 ; i < condidate.length ; i++){
        if(nomCondidat === condidate[i].nomComplete){
            verifie = true
            console.log("Condidat Exist  dans les Listes des  Campagne électorale ")
            console.log(`CIN : ${condidate[i].cin}
                  Nom Compléte : ${condidate[i].nomComplete} 
                  Parti Politique : ${condidate[i].partiPolitique}
                  Age : ${condidate[i].age}  
                  Effecteurs : ${condidate[i].electeurs.length}
               `)
        }
    }
    if(verifie === false){
        console.log(" Condidat N'exist pas dans les Listes des  Campagne électorale ")
    }
}
function nombreTotallCondidat(){
    let some = 0
    for(let i = 0 ;i < condidate.length; i++){
        some ++
    }
    console.log( `La Some Total Du Condidates est : ${some}`)
}
function nombreTotallelec(){
    let totalVotes = 0
    for(let i = 0 ;i < condidate.length; i++){
        for(let j = 0 ; j < condidate[i].electeurs.length; j++ )
        totalVotes ++
    }
    console.log( `Nombre Total des Votes est : ${totalVotes}`)
}
function topTrois(){
  for(let i = 0 ; i<condidate.length;i++){
    for(let j = 0 ; j < condidate.length-1;j++){
        if (condidate[j].electeurs.length < condidate[j+1].electeurs.length){
        let resultat = condidate[j+1]
        condidate[j+1]= condidate[j]
         condidate[j] = resultat
        }
    }
  } 
  for(let i = 0 ; i < 3 ; i++){
    console.log(condidate[i])
  }
}
function  nombreCandidatsParParti(){
    let obj = {}
     for(let i = 0 ; i < condidate.length ;i++){
      if(obj[condidate[i].partiPolitique]=== undefined ) {
        obj[condidate[i].partiPolitique] = 1
      } else{
        obj[condidate[i].partiPolitique]+=1
    
      }
    }
    for(key in obj){
       console.log(`${key}   ${obj[key]}`) 
    }
}