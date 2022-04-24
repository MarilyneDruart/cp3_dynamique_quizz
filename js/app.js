
//test pour rappel
//const body = document.getElementsByTagName("body");
//console.log(body[0]);

//*récupérer la première question
    // Je donne la valeur de la première question à ma variable question1
    const question1 = questions[0];
    //console.log(question1);

//* poser la question et récupérer la réponse de l'utilisateur
    // Je donne la valeur de la première réponse à ma variable responses1
    const responses1 = responses[0];
    //console.log(responses1);

    //j'affiche une pop/up qui permet à l'utilisateur de saisir une valeur en réponse à ma question1
    let user1 = prompt(question1);
    //console.log(user1);

//* Vérifier la réponse
    // je dis que si le résultat de user1 est égal à ma variable responses1 c'est CORRECT sinon faux
    if (user1 == responses1){
        console.log("CORRECT");
        
    } else {
        console.log ("faux")
    }

//*Modifier le DOM
// je cherche où sont rangées les listes verte et rouge
    //> sur localhost, avec l'inspecteur je cible "réponses" et vais dans Elements
    // je trouve la ligne concernée et clic-droit "Copier le chemin d'accès JS"
        // liste verte : document.querySelector("#right") document.querySelector("#right > li")
        // liste rouge : document.querySelector("#wrong")
            // je constate que la liste verte contient un "li", il faudra que je supprime l'élément "li" contenant le texte "réponses"
            //! pas trouvé

// je dis que si le résultat de user1 est égal à ma variable responses1 la question1 sera ajoutée dans la liste verte sinon dans la liste rouge 
if (user1 == responses1){

    //je créé un nouvel élément (li) pour y glisser ma question1
    let ajoutListeVerte = document.createElement('li');
    ajoutListeVerte.textContent = question1;
    //console.log(ajoutListeVerte);
    // graĉe à mon console.log, je vois que l'élement a été créé mais il n'est pas inséré dans un endroit spécifique dans ma page
    // je dois donc placer ma listeVerte au bon endroit
    // l'endroit souhaité est "#right" je crée une variable pour cet endroit que j'appelle listeVerte
    const listeVerte =  document.querySelector("#right>ul");

    listeVerte.appendChild(ajoutListeVerte);

        
    } else {
        // je fais tout pareil pour la liste rouge (wrong)
        let ajoutListeRouge = document.createElement('li');
        ajoutListeRouge.textContent = question1;
        const ListeRouge =  document.querySelector("#wrong");
        ListeRouge.appendChild(ajoutListeRouge);
    }


// //*on créé des fonctions
// //fonction "poser la question et récupérer la réponse de l'utilisateur"

// function askQuestion() {
//     allQuestions = prompt(questions);
//     return allQuestions;
// }
// let response = askQuestion();


// // fonction "Vérifier la réponse"
// function checkResponse() {
//     if (user1 == responses1){
//         console.log("CORRECT");
        
//     } else {
//         console.log ("faux")
//     }
// }
// //fonction "Modifier le DOM"