

const addBuuton = document.getElementById("Addbutton"); 
const cancelButton = document.getElementById("cancelbutton"); 
const addPopup = document.getElementById("addpopup"); 

const englishInput = document.getElementById("englischinput"); 
const germanInput = document.getElementById("germaninput"); 
const safeVocabularyButton = document.getElementById("safebutton"); 
const table = document.getElementById("table"); 

const searchVocInput = document.getElementById("searchvoc"); 

addBuuton.addEventListener("click", () =>{
    addPopup.style.display = "flex"; 
});

cancelButton.addEventListener("click", ()=>{
    addPopup.style.display = "none"; 

     germanInput.value = ""; 
     englishInput.value = ""; 
}); 




let vocabulary = JSON.parse(localStorage.getItem("Vokabelnn")) || []; 

safeVocabularyButton.addEventListener("click", ()=>{
    if(germanInput.value === "" || englishInput.value === ""){
          

         germanInput.value = ""; 
         englishInput.value = ""; 
    } else{
        let voc = {
            german: germanInput.value,
            english: englishInput.value, 
        }
        vocabulary.push(voc); 
        safeVocabulary(); 
        addVocToTable();
     
    }

    addPopup.style.display = "none";
})

function addVocToTable(){
    vocabulary.forEach((voc) =>{
        table.innerHTML += `<tr>
                    <td>${voc.english}</td>
                    <td>${voc.german}</td>
                </tr>`; 
    }); 


}

function safeVocabulary(){
    localStorage.setItem("Vokabelnn", JSON.stringify(vocabulary)); 
}


addVocToTable(); 


searchVocInput.addEventListener("input", ()=>{
    let input = searchVocInput.value.toLowerCase(); 

    let foundedWords = vocabulary.filter(function(word){
        return word.english.toLowerCase().startsWith(input); 
    }); 
    
    table.innerHTML = ` <tr>
                    <td>Englisch</td>
                    <td>Deutsch</td>
                </tr>`; 


    foundedWords.forEach((word) =>{
        table.innerHTML += `<tr>
                    <td>${word.english}</td>
                    <td>${word.german}</td>
                </tr>`
    }); 
}); 