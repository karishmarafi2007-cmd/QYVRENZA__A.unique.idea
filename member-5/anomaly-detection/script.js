const filterSelect = document.getElementById("filterSelect");
const rows = document.querySelectorAll("#anomalyTable tr");

filterSelect.addEventListener("change", function () {
    const selected = this.value;

    rows.forEach(function (row) {
        const status = row.getAttribute("data-status");

        if (selected === "all" || selected === status) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});


function showDetails(eventId) {

    alert(
        "AI Analysis\n\n" +
        "Event: " +
        eventId +
        "\n\n" +
        "The QYVRENZA AI system detected unusual " +
        "activity associated with this event."
    );
}


function runScan() {

    const button = document.querySelector(".scan-btn");

    button.textContent = "Scanning...";
    button.disabled = true;

    setTimeout(function () {

        button.textContent = "Scan Completed ✓";
        button.disabled = false;

        alert(
            "AI Scan Completed!\n\n" +
            "2,340 events analysed.\n" +
            "5 potential anomalies detected."
        );

    }, 2000);
}