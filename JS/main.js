//localStorage.clear();

// Définition de la variable template
const template = document.getElementById('recommendation-template');

// Asynchronous function to fetch recommendations from local storage or a JSON file
async function fetchRecommendations() {
  let allRecommendations = window.localStorage.getItem('recommendations');
  // Set allRecommendations to null to force data fetch
  // allRecommendations = null;
  if (allRecommendations === null) {
    console.log("Fetching recommendations...");
    try {
      const response = await fetch("./DATABASE/recommendations.json");
      allRecommendations = await response.json();

      // Save fetched data to local storage
      window.localStorage.setItem("recommendations", JSON.stringify(allRecommendations));
      return allRecommendations;
    } catch (error) {
      console.error("Error fetching data from JSON file:", error);
    }
  } else {
    console.log("Data found in local storage.");
    allRecommendations = JSON.parse(allRecommendations);
    return allRecommendations;
  }
}

// Function to display a popup for adding a new recommendation
function showPopup(bool) {
  const popup = document.getElementById('popup');
  popup.style.visibility = bool ? "visible" : "hidden";
}

// Reload the page to display the last recommendation
const okButton = document.querySelector('.popup button');
okButton.addEventListener("click", function () {
  // Reload page
  location.reload();
});

// Asynchronous function to display recommendations
async function displayRecommendations() {
  try {
    const recommendations = await fetchRecommendations();

    if (recommendations && recommendations.length > 0) {
      const recommendationsContainer = document.querySelector('.carousel-inner.all-recommendations-container');

      let first = true;

      for (let recommendation of recommendations) {
        const clone = document.importNode(template.content, true);
        const cardTitle = clone.querySelector('.card-title');
        const cardText = clone.querySelector('.card-text');
        const dateContainer = clone.querySelector('.card-date');

        cardText.textContent = `“ ${recommendation["content"]} ”` || "";
        cardTitle.textContent = recommendation["author"] || "Anonymous";

        if (recommendation["datetime"] != null) {
          dateContainer.textContent = recommendation["datetime"];
        } else {
          dateContainer.textContent = "-";
        }

        if (first) {
          clone.querySelector('.carousel-item').classList.add('active');
          first = false;
        }
        recommendationsContainer.appendChild(clone);
      }

    } else {
        const clone = document.importNode(template.content, true);
        const cardTitle = clone.querySelector('.card-title');
        const cardText = clone.querySelector('.card-text');
        const dateContainer = clone.querySelector('.card-date');

        cardText.textContent = " No recommendation ";
        cardTitle.textContent = "";
        dateContainer.textContent = "-";
    }
  } catch (error) {
    console.error("An error occurred while displaying recommendations:", error);
  }
}

// Asynchronous function to add a new recommendation
async function addRecommendation() {
  // Get the current date
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

  // Get the owner and message of the new recommendation
  const valInput = document.getElementById('title-recommendation').value;
  const valTextarea = document.getElementById('new-recommendation').value;

  // If the user has left a recommendation, display a pop-up
  if (valTextarea != null && valTextarea.trim() !== "") {
    console.log("New recommendation added");
    // Call the showPopup function here
    showPopup(true);

    const recommendation = {
      "author": valInput,
      "content": valTextarea,
      "datetime": dateString
    };

    //##########  my emailJS metadata ######
    const serviceID = 'default_service';
    const templateID = 'template_nsh2bsg';
    emailjs.init("pBWv-y55FWYkXsyTC");
    //######################################
  

    emailjs.send(serviceID, templateID, {
      author: valInput,
      content: valTextarea,
      date: dateString,
    }).then(function(response) {
      console.log("Recommendation sent successfully !");
    }, function(error) {
      console.error("An error has occurred. Error details: ", error);
    });    

    try {
      // Add the new recommendation to the beginning of the array
      let allRecommendations = window.localStorage.getItem('recommendations');
      allRecommendations = JSON.parse(allRecommendations);
      allRecommendations.unshift(recommendation);

      localStorage.clear();
      // Save updated recommendations to local storage
      window.localStorage.setItem("recommendations", JSON.stringify(allRecommendations));
    } catch (error) {
      console.error("Error while writing data:", error);
    }
  }
}

// Select the button to scroll to the top
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Add an event handler for clicking the button
scrollToTopButton.addEventListener("click", function(e) {
    e.preventDefault(); // Prevent the link from triggering a page reload

    // Scroll the page to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling for a fluid transition
    });
});

// Main function: Display recommendations
displayRecommendations();
