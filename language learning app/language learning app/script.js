let progress = 0;

function showTranslation() {
    document.getElementById("translation").innerHTML =
        "Spanish Translation: Hola";
}

function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === "Gracias") {
        result.innerHTML = "✅ Correct!";
        result.style.color = "green";

        progress = 100;
        document.getElementById("progress").style.width = progress + "%";
        document.getElementById("progressText").innerHTML =
            progress + "% Completed";
    } else {
        result.innerHTML = "❌ Wrong Answer!";
        result.style.color = "red";
    }
}