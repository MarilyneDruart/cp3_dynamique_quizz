
//test pour rappel
//const body = document.getElementsByTagName("body");
//console.log(body[0]);

//*récupérer la première question
    // Je donne la valeur de la première question à ma variable question1
    const question1 = questions[0];
    //console.log(question1);
//!Correction : const question = questions[0]; console.log(question);

//* poser la question et récupérer la réponse de l'utilisateur
    // Je donne la valeur de la première réponse à ma variable responses1
    const responses1 = responses[0];
    //console.log(responses1);

    //j'affiche une pop/up qui permet à l'utilisateur de saisir une valeur en réponse à ma question1
    let answerUser1 = prompt(question1);
    //console.log(user1);
//!Correction : const response = prompt(question): console.log(response);

//* Vérifier la réponse
    // je dis que si le résultat de answerUser1 est égal à ma variable responses1 c'est CORRECT sinon faux
    if (answerUser1 == responses1){
        console.log("CORRECT");
        
    } else {
        console.log ("faux")
    }
//! Correction :
//!     On transforme la chaine de caractère en valeur numérique, c'est ce qu'on appel un *cast*
//!         response = Number(response);
//!         console.log(typeof response); (type of pour voir le type de la variable)
//! if (response === responses[0]){
//!    console.log("CORRECT");
//! } else {
//!    console.log("faux");
//! }

//*Modifier le DOM
// je cherche où sont rangées les listes verte et rouge
    //> sur localhost, avec l'inspecteur je cible "réponses" et vais dans Elements
    // je trouve la ligne concernée et clic-droit "Copier le chemin d'accès JS"
        // liste verte : document.querySelector("#right") document.querySelector("#right > li")
        // liste rouge : document.querySelector("#wrong")
            // je constate que la liste verte contient un "li", il faudra que je supprime l'élément "li" contenant le texte "réponses"
            //! pas trouvé

// je dis que si le résultat de answerUser1 est égal à ma variable responses1 la question1 sera ajoutée dans la liste verte sinon dans la liste rouge 
if (answerUser1 == responses1){

    //je créé un nouvel élément (li) pour y glisser ma question1
    let ajoutListeVerte = document.createElement('li');
    ajoutListeVerte.textContent = question1;
    //console.log(ajoutListeVerte);
    // graĉe à mon console.log, je vois que l'élement a été créé mais il n'est pas inséré dans un endroit spécifique dans ma page
    // je dois donc placer ma listeVerte au bon endroit
    // l'endroit souhaité est "#right" je crée une variable pour cet endroit que j'appelle listeVerte
    const listeVerte =  document.querySelector("#right>ul");

    // j'ajoute un "noeud" en tant que dernier enfant ("li") d'un noeud parent ("#right>ul")
    // https://www.pierre-giraud.com/javascript-apprendre-coder-cours/dom-ajout-modification-suppression/#:~:text=Pour%20cr%C3%A9er%20un%20nouvel%20%C3%A9l%C3%A9ment,que%20l'on%20souhaite%20cr%C3%A9er.
    listeVerte.appendChild(ajoutListeVerte);

        
    } else {
        // je fais tout pareil pour la liste rouge (wrong)
        let ajoutListeRouge = document.createElement('li');
        ajoutListeRouge.textContent = question1;
        const ListeRouge =  document.querySelector("#wrong");
        ListeRouge.appendChild(ajoutListeRouge);
    }
//! Correction : 
//! if(response === responses[0]){
//!     console.log("CORRECT");

//!    // ON utilisee un selecteur qui nous permet de réucpérer le premier élément 
//!     // possèdant la classe responses à l'interieur de l'élément ayant l'id right
//!     const rightList = document.querySelector("#right .responses"); // Cette existe déjà dans le DOM. Il contiendra le nouvel élément qu'on souhaite ajouter
//!     const newListItem = document.createElement('li'); // ON créé un nouvel élément de type <li></li>
//!     newListItem.textContent = question; //On modifie le contenu de notre nouvel élément en lui donnant la question posé à l'utuilisateur
//!     rightList.append(newListItem); // ON inject le nouvel élément à la fin du conteneur
    
//!     rightList.append(document.createElement('li').textContent(question)); >> suite des instructions ci-dessus sur une ligne.
//! }else{
//!     console.log("faux")
//!     const wrongList = document.querySelector("#wrong .responses"); // Cette existe déjà dans le DOM. Il contiendra le nouvel élément qu'on souhaite ajouter
//!     const newListItem = document.createElement('li'); // ON créé un nouvel élément de type <li></li>
//!     newListItem.textContent = question; //On modifie le contenu de notre nouvel élément en lui donnant la question posé à l'utuilisateur
//!     wrongList.append(newListItem); // ON inject le nouvel élément à la fin du conteneur
//! }

//*on créé des fonctions
// Pose la premère question et récupère la réponse de l'utilisateur
// Poser la question dont l'index est fourni en paramètre.

//? Mon essai de code >> faux
//? function askuse (questions){
//?     let answersUsers = prompt(questions[""]);
//?     return (answersUsers)
//? }
//? askuse ([0]);

//? console.log(askuse([0]))
//? console.log(askuse([1]));
//? console.log(askuse([2]));


//? // Vérifie que la réponse donnée est bien la bonne

//? if (answersUsers == responses([])) {
//?         console.log("CORRECT");
            
//?         } else {
//?             console.log ("faux")
//?         }

//? let isCorrect = checkResponse(0, response);

//? // Modifie le DOM (#right ou #wrong si c'est une bonne ou mauvaise réponse)
//? addResponseToDom(0, isCorrect);


//! Correction : 
// On DÉCLARE la fonction
// A ce moment du code la fonction n'est pas exécuté mais elle est seulement définie
// Le paramêtre index n'a pas encore de valeur défini, elle le sera au moment de l'appel à la fonction
function askQuestion(index){
    // Etape 1
    // On récupère dans la variable questions le premier élement 
    // Comme question est un tableau indéxé, le premier élément se situ à l'indice 0
    const question = questions[index]; 

    // Etape 2
    // On affiche une boite de dialoge affichant la question à l'utilisateur
    // On récupère sa réponse dans la variable response

    let userResponse = prompt(question);
    // typeof va nous permettre de connaitre le type d'une variable 
    // En l'occurence, on affiche en console le type de reponse (string)
    console.log(typeof userResponse);


    // Etape 3 
    // On transforme la chaine de caractère reçue en valeur numérique
    // C'est ce qu'on appel un cast
    userResponse = Number(userResponse);
    return userResponse;
}

// ON créé la fonction askQuestion qui permettra d'afficher la boite de dialogue avec la 
// question en utilisant le parmêtre comme indice du tableau questions
// Pose la premère question et récupère la réponse de l'utilisateur
let response0 = askQuestion(0);
let response1 = askQuestion(1);
let response2 = askQuestion(2);

// Vérifie que la réponse donnée est bien la bonne

function checkResponse(index, userResponse){
    if(userResponse === responses[index]){
        return true;
    }else{
        return false;
    }
}
// Vérifie que la réponse donnée est bien la bonne
let isCorrect0 = checkResponse(0, response0);
let isCorrect1 = checkResponse(1, response1);
let isCorrect2 = checkResponse(2, response2);

function addResponseToDom(index, isResponseCorrect){

    // je recupère ma question à l'indice index
    const question = questions[index];

    // Je crée une variable list qui n'a pas de valeur
    let list = null;

    // Si la réponse est correcte
    // list représentera l'element ul dans la div right
    // sinon list représentera l'élément ul dans la div wrong 
    // Ce procédé permet de "factoriser" la suite du code afin d'éviter de le répéter deux fois 
    if(isResponseCorrect === true){
        list = document.querySelector("#right .responses"); // Cette existe déjà dans le DOM. Il contiendra le nouvel élément qu'on souhaite ajouter
    }else{
        list = document.querySelector("#wrong .responses"); // Cette existe déjà dans le DOM. Il contiendra le nouvel élément qu'on souhaite ajouter
    }
    const newListItem = document.createElement('li'); // ON créé un nouvel élément de type <li></li>
    newListItem.textContent = question; //On modifie le contenu de notre nouvel élément en lui donnant la question posé à l'utuilisateur
    list.append(newListItem); // ON inject le nouvel élément à la fin du conteneur

}

addResponseToDom(0, isCorrect);

//* On boucle ! 
//! Correction :
// Cette à pour objectif de parcourir le tableau des question
// Poser chaque question à l'utilisateur
// Vérifier chaque réponse qu'il fournit
// Ajouter le texte des question dans la colonne adéquat en fonction de si la réponse est correcte ou non
function playQuizz(){
    for(const questionNumber in questions){
        // Etape 5
        // ON créé la fonction askQuestion qui permettra d'afficher la boite de dialogue avec la 
        // question en utilisant le parmêtre comme indice du tableau questions
        // Pose la premère question et récupère la réponse de l'utilisateur
        const response = askQuestion(questionNumber);

        // Vérifie que la réponse donnée est bien la bonne
        const isCorrect = checkResponse(questionNumber, response);

        // Modifie le DOM (#right ou #wrong si c'est une bonne ou mauvaise réponse)
        addResponseToDom(questionNumber, isCorrect);
    }
}

//! fonction du bonus à placer ici

// Cet appel, par effet boule de neige permet d'appeler toutets les fonction déclaré en une ligne 
playQuizz();

//*Bonus 1
//! Correction :
On ajoute au tout début du code 2 variables
let goodAnswer = 0;
let badAnswer = 0;

Puis de le if checkResponse on ajoute
si la réponse est bonne goodAnswer++;
si la réponse est mauvaise badAnswer++;
function checkResponse(index, userResponse){
    if(userResponse === responses[index]){
        goodAnswer++;
        return true;
    }else{
        badAnswer++;
        return false;
    }
}

Enfin on créé une fonction pour ajouter le nombre de réponses (bonnes et fausses) dans le fichier au niveau des titres h2
Cette fonction devra être placée au dessus de l'appel de la boucle playQuizz


function updateTitle(){
    // On selection le h2 dans #right et dans #wrong
    const h2Good = document.querySelector("#right h2");
    const h2Bad = document.querySelector("#wrong h2");

    // On modifie le contenu des h2 ajoutant (score) 
    // Plusieur notation possible 
    h2Good.textContent = h2Good.textContent + " ("+goodAnswer+")";
    //h2Bad.textContent = `${h2Bad.textContent} (${badAnswer})`;
    h2Bad.insertAdjacentText("beforeend", `(${badAnswer})`);
}

pour ajouter des questions et leurs réponses, aller directement dans le tableau de la page questions.js