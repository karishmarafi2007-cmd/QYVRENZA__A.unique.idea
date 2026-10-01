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

    const insightText =
        document.getElementById("insightText");

    button.textContent =
        "Generating Insight...";

    button.disabled = true;

    setTimeout(function () {

        insightText.textContent =
            "AI analysis indicates that prediction " +
            "performance is improving while anomaly " +
            "frequency has decreased during the selected " +
            "period.";

        button.textContent =
            "New Insight Generated ✓";

        button.disabled = false;

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

        alert(
            "Analytics period changed to Last " +
            days +
            " Days."
        );

    });