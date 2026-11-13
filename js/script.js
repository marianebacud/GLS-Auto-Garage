
// GLS AUTO GARAGE - SERVICES

const services = [
    {
        name: "Engine Oil Change",
        category: "maintenance",
        description: "Fresh engine oil and filter replacement, including a visual inspection of important vehicle components."
    },
    {
        name: "Maintenance",
        category: "maintenance",
        description: "Scheduled maintenance for vehicles, including components such as spark plugs and transmission systems."
    },
    {
        name: "Diagnostic & Inspection",
        categories: ["maintenance","electrical"],
        description: "Vehicle diagnostics and inspections to help identify warning lights, unusual noises, and other issues."
    },
    {
        name: "Ontario Vehicle Safety Certification",
        category: "maintenance",
        description: "DriveON vehicle inspection and digital report for Ontario Safety Standards Certification."
    },
    {
        name: "Tire Changeover",
        category: "tires",
        description: "Four-tire changeover with tread depth and sidewall inspection, plus computerized wheel balancing."
    },
    {
        name: "Tire Rotation",
        category: "tires",
        description: "Four-wheel tire rotation to help promote even tread wear and extend tire life."
    },
    {
        name: "Wheel Alignment",
        category: "tires",
        description: "Front-end and four-wheel alignment to help improve handling and tire wear."
    },
    {
        name: "Brake Service & Component Replacement",
        category: "brakes",
        description: "Brake pad, rotor, shoe, and drum replacement, along with brake system inspection and servicing."
    },
    {
        name: "Suspension & Steering",
        category: "brakes",
        description: "Inspection, repair, and replacement of suspension and steering components."
    },
    {
        name: "Engine & Transmission Rebuild or Replacement",
        category: "mechanical",
        description: "Engine and transmission rebuilding or replacement services."
    },
    {
        name: "Belts & Hoses",
        category: "mechanical",
        description: "Inspection and replacement of worn belts and hoses to help prevent unexpected breakdowns."
    },
    {
        name: "Battery Check",
        categories: ["mechanical", "electrical"],
        description: "Battery testing to help identify battery health and potential starting issues."
    },
    {
        name: "HVAC Service",
        category: "mechanical",
        description: "Heating and air conditioning diagnosis, repair, and service."
    },
    {
        name: "Electrical & Mechanical Repairs",
        categories: ["mechanical", "electrical"],
        description: "Troubleshooting and repair of vehicle electrical, electronic, and mechanical systems."
    },
    {
        name: "Muffler & Exhaust System",
        category: "mechanical",
        description: "Exhaust system repairs, leak diagnosis, and performance upgrades."
    },
    {
        name: "Other Vehicle Issues",
        categories: ["mechanical", "electrical"],
        description: "Not sure what's wrong? Bring your vehicle in for help investigating unusual noises, vibrations, warning lights, and other concerns."
    },
    {
        name: "Body Kit Installation",
        category: "custom",
        description: "Installation of aerodynamic and wide-body kits to customize your vehicle's appearance."
    },
    {
        name: "Fabrication",
        category: "custom",
        description: "Custom metal cutting, shaping, welding, assembly, and vehicle component repairs."
    },
    {
        name: "Lowering Springs & Lift Kits",
        category: "custom",
        description: "Installation of lowering springs and lift kits to change your vehicle's ride height."
    },
    {
        name: "Kill Switch Installation",
        categories: ["custom", "electrical"],
        description: "Installation of a hidden anti-theft switch designed to interrupt the vehicle's starting circuit."
    },
    {
        name: "Rustproofing",
        categories: ["other", "maintenance"],
        description: "Protective oil or wax treatments designed to help protect vehicle components against moisture and road salt."
    },
    {
        name: "Auto Detailing",
        category: "other",
        description: "Deep cleaning of vehicle interiors and care for exterior paint and surfaces."
    },
    {
        name: "Windshield Replacement",
        category: "other",
        description: "Removal and replacement of damaged vehicle windshields."
    }
];


const servicesGrid = document.getElementById("servicesGrid");

function displayServices(serviceList) {

    // Clear the existing cards
    servicesGrid.innerHTML = "";

if (serviceList.length === 0) {
    servicesGrid.innerHTML = `
        <div class="no-results">
            <h3>No services found</h3>
            <p>Try another search or select a different category.</p>
        </div>
    `;
    return;
}

    // Go through each service in the list
    serviceList.forEach(function(service) {

        // Create a new card
        const serviceCard = document.createElement("div");

        // Add a CSS class to the card
        serviceCard.classList.add("service-card");

        // Add the service information inside the card
        serviceCard.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <a href="https://book.squareup.com/appointments/lyp3op0nb0c4c2/location/L87S6J7AKNGX8/services"
               class="service-link">
               Book This Service →
            </a>
        `;

        // Add the card to the webpage
        servicesGrid.appendChild(serviceCard);
    });
}

// Display all services when the page loads
displayServices(services);

// SEARCH SERVICES

const serviceSearch = document.getElementById("serviceSearch");

serviceSearch.addEventListener("input", function() {
    filterServices();
});

// CATEGORY FILTERS

const filterButtons = document.querySelectorAll(".filter-btn");

let activeCategory = "all";

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected category
        activeCategory = button.dataset.category;

        // Remove active styling from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Highlight the selected button
        button.classList.add("active");

        // Apply the filters
        filterServices();
    });

});


// COMBINE SEARCH AND CATEGORY FILTERS

function filterServices() {

    const searchText = serviceSearch.value.toLowerCase();

    const filteredServices = services.filter(function(service) {

        const matchesSearch =
            service.name.toLowerCase().includes(searchText) ||
            service.description.toLowerCase().includes(searchText);

        const matchesCategory =
            activeCategory === "all" ||
            service.category === activeCategory ||
            (service.categories && service.categories.includes(activeCategory));

        return matchesSearch && matchesCategory;

    });

    displayServices(filteredServices);
}
