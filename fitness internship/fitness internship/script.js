function saveData() {
    let steps = document.getElementById("steps").value;
    let calories = document.getElementById("calories").value;
    let workout = document.getElementById("workout").value;

    localStorage.setItem("steps", steps);
    localStorage.setItem("calories", calories);
    localStorage.setItem("workout", workout);

    loadData();

    alert("Activity Saved!");
}

function loadData() {
    let steps = localStorage.getItem("steps") || 0;
    let calories = localStorage.getItem("calories") || 0;
    let workout = localStorage.getItem("workout") || "None";

    document.getElementById("displaySteps").innerText = steps;
    document.getElementById("displayCalories").innerText = calories;
    document.getElementById("displayWorkout").innerText = workout;

    let percentage = Math.min((steps / 10000) * 100, 100);

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").innerText =
        percentage.toFixed(0) + "% of 10,000 steps goal";
}

window.onload = loadData;