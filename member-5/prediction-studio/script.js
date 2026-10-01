function generatePrediction() {

    const feature1 = document.getElementById("feature1").value;
    const feature2 = document.getElementById("feature2").value;
    const feature3 = document.getElementById("feature3").value;
    const feature4 = document.getElementById("feature4").value;

    if (
        feature1 === "" ||
        feature2 === "" ||
        feature3 === "" ||
        feature4 === ""
    ) {
        alert("Please enter all four feature values.");
        return;
    }


    // Simple demo calculation
    const average =
        (
            Number(feature1) +
            Number(feature2) +
            Number(feature3) +
            Number(feature4)
        ) / 4;


    const prediction = Math.min(
        99,
        Math.max(1, Math.round(average))
    );

    const confidence = Math.min(
        99,
        Math.max(70, 70 + Math.round(prediction / 4))
    );


    document.getElementById("predictionValue").textContent =
        prediction + "%";

    document.getElementById("confidenceValue").textContent =
        confidence + "%";

    document.getElementById("progressBar").style.width =
        confidence + "%";

    document.getElementById("resultStatus").textContent =
        "Completed";


    document.getElementById("insightText").textContent =
        "The AI model generated a prediction with " +
        confidence +
        "% confidence based on the provided parameters.";
}