(function () {
    "use strict";

    const apiUrl = "https://api.datausa.io/tesseract/data.jsonrecords?cube=acs_yg_total_population_5&measures=Population&drilldowns=Year";

    function fetchPopulationData() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayData(data.data);
            })
            .catch(error => {
                console.error("Error fetching population data:", error);
            });
    }

    function displayData(data) {
        const tableBody = document.querySelector("#populationTable tbody");

        // Sort by year ascending
        data.sort((a, b) => a.Year - b.Year);

        data.forEach(item => {
            const row = document.createElement("tr");

            const yearCell = document.createElement("td");
            yearCell.textContent = item.Year;

            const populationCell = document.createElement("td");
            populationCell.textContent =
                Number(item.Population).toLocaleString();

            row.appendChild(yearCell);
            row.appendChild(populationCell);
            tableBody.appendChild(row);
        });
    }

    // Run when DOM loads
    document.addEventListener("DOMContentLoaded", fetchPopulationData);

})();