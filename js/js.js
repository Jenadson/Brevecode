

function search() {

    const breve = document.getElementById("code").value;

    
    switch (breve) {
        case "0307931":
            
        document.getElementById("result").innerText = "08"

            break;
        
        case "0307731":
            
        document.getElementById("result").innerText = "77"
    
            break;

        case "0308031":
            
        document.getElementById("result").innerText = "26"
    
            break;
    
        default: document.getElementById("result").innerText = "Código inválido tente novamente!"
            break;
    }
}