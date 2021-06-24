window.addEventListener("load", function () {
    let InputTaille = document.getElementById('taille')
    let InputPoids = document.getElementById('poids')
    console.log(InputPoids)
    InputPoids.addEventListener('change', function (event) {
        event.preventDefault();
        console.log(event)
        let weight = document.getElementById('poids').value
        let heightCm = document.getElementById('taille').value
        let height = heightCm * 0.01

        let famine = "Votre IMC est inférieur à 16 vous êtes en famine";
        let thinness = "Votre IMC est entre 16,5 et 18,5 vous êtes maigre";
        let normal = "Votre IMC est entre 18,5 et 25 vous avez un IMC normal";
        let overweight = "Votre IMC est compris entre 25 et 30 vous êtes en surpoids"
        let moderateObesity = "Votre IMC est entre 30 et 35 vous êtes en obésité modérée"
        let severeObesity = "Votre IMC est entre 35 et 40 vous êtes en obésité sévère"
        let morbidObesity = "Votre IMC est supérieur à 40 vous êtes en obésité morbide"

        let imc = weight / (height * height);

        console.log(imc)


        if (imc < 16) {
            document.getElementById("result").innerHTML = famine;
        } else if (imc > 16.5 && imc <= 18.5) {
            document.getElementById("result").innerHTML = thinness;
        } else if (imc > 18.5 && imc < 25) {
            document.getElementById("result").innerHTML = normal;
        } else if (imc > 25 && imc <= 30) {
            document.getElementById("result").innerHTML = overweight;
        } else if (imc > 30 && imc <= 35) {
            document.getElementById("result").innerHTML = moderateObesity;
        } else if (imc > 35 && imc <= 40) {
            document.getElementById("result").innerHTML = severeObesity;
        } else if (imc > 40) {
            document.getElementById("result").innerHTML = morbidObesity;
        }
    })
});





