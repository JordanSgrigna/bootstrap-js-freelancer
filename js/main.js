//----------- PROGRAMMA PRINCIPALE ------------------

// Codici sconto del 25%
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];



// -------------------------------------------


// ----------------- FUNZIONI ------------------------

//Funzione form
function calculateWorkPrice(event){
    event.preventDefault();

    let price;

    // Ore di lavoro
    let workHours = document.getElementById("HoursForm").value;
    

    // Validazione del numero di ore di lavoro
    if(isNaN(workHours) || workHours == ""){
        alert("Insert a number");
    }

    workHours = parseFloat(workHours);
    console.log(workHours);
    
    // Tipo di lavoro selezionato dall'utente
    let selectedWorkType = document.getElementById("work-type").value;

    let backendPrice = document.getElementById("backendPrice").innerText;
    backendPrice = parseFloat(backendPrice);
    console.log(backendPrice);

    let frontendPrice = document.getElementById("frontendPrice").innerText;
    frontendPrice= parseFloat(frontendPrice);
    console.log(frontendPrice);

    let analysisPrice = document.getElementById("analysisPrice").innerText;
    analysisPrice = parseFloat(analysisPrice);
    console.log(analysisPrice);

    switch(selectedWorkType){
        case "backend":
            price = backendPrice * workHours;
            break;
        case "frontend":
            price = frontendPrice * workHours;
            break;
        case "analysis":
            price = analysisPrice * workHours;
            break;
        case "default":
            alert("Choose type of work");
    }   

    // Inserire calcolo codice sconto
    let discountCodeUser = document.getElementById("DiscountCodeForm").value;

    let isDiscountCodeAvailable = discountCodes.includes(discountCodeUser);

    if(isDiscountCodeAvailable){
        price = price * 0.75;
        discountCodes = removeElementFromArray(discountCodes, discountCodeUser);

        console.log(discountCodes);

        document.getElementById("applied-discount-result").innerHTML = "Il codice sconto del 25% è stato applicato!";
    } else if (discountCodeUser != "") {
        document.getElementById("applied-discount-result").innerHTML = "Il codice sconto non è valido!";
    } else {
        document.getElementById("applied-discount-result").innerHTML = "";
    }

    //Mostrare il prezzo all'utente
    document.getElementById("price").innerHTML = price.toFixed(2);
}


// --------------------- FUNZIONI GENERICHE -------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}