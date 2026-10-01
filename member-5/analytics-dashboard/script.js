function refreshDashboard() {

    const button =
        document.querySelector(".refresh-btn");

    button.textContent = "Refreshing...";

    button.disabled = true;


    setTimeout(function () {

        button.textContent = "✓ Updated";

        button.disabled = false;


        setTimeout(function () {

            button.textContent = "↻ Refresh";

        }, 1500);

    }, 1000);

}



function generateInsight() {

    const button =
        document.querySelector(".insight-btn");

    button.textContent =
        "Generating Insight...";

    button.disabled = true;


    setTimeout(function () {

        button.textContent =
            "New Insight Generated ✓";

        button.disabled = false;


        alert(
            "AI Generated Insight\n\n" +
            "Prediction performance is showing " +
            "a positive trend while anomaly frequency " +
            "has decreased during the selected period."
        );


        setTimeout(function () {

            button.textContent =
                "Generate New Insight →";

        }, 1500);

    }, 1500);

}



document
    .getElementById("timeFilter")
    .addEventListener("change", function () {

        const days = this.value;

        console.log(
            "Analytics period changed to " +
            days +
            " days."
        );

    });