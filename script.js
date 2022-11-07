const btn = document.querySelector("button");
const result = document.querySelector('.result');
const imc_value = document.querySelector('.imc_value')

btn.addEventListener('click', () => {
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    var calcul = (weight / (Math.pow(height,2))) * 10000;
    final_result = calcul.toFixed(2)

    result.innerHTML = `L'IMC est égal à ${final_result}`;

    if(final_result < 18.5){

        value = "Insuffisance pondérale"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(183, 37, 70)");

    } else if(final_result < 24.9){

        value = "Corpulence normale"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(12, 155, 30)");

    }else if(final_result < 29.9){

        value = "Surpoids"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(173, 9, 9)");

    }else if(final_result < 34.9){

        value = "Obésité modérée"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(200, 7, 7)");

    }else if(final_result < 39.9){
        
        value = "Obésité sévère"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(227, 9, 9)");

    }else if(final_result > 40){

        value = "Obésité morbide"
        imc_value.innerHTML = `<b>${value}</b>`;
        imc_value.setAttribute("style", "color:rgba(255, 1, 1)");

    }

});