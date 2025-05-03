let currentIndex = 0;
  const cards = document.querySelectorAll('.project-card');
  const nextButton = document.getElementById('nextButton');
  const totalCards = cards.length;

  // Function to show the next card
  const showNextCard = () => {
    // Hide the current card
    cards[currentIndex].classList.remove('active');
    // Move to the next card index
    currentIndex = (currentIndex + 1) % totalCards; // Loop back to the first card
    // Show the next card
    cards[currentIndex].classList.add('active');
  };

  // Auto-slide every 4 seconds
  setInterval(showNextCard, 40000);

  // Next button functionality
  nextButton.addEventListener('click', showNextCard);

  // Initially show the first card
  cards[currentIndex].classList.add('active');

window.addEventListener('scroll', slideInOnScroll);
slideInOnScroll();
        function showBlock(blockId) {
          const blocks = document.querySelectorAll(".content-block");
          blocks.forEach(block => block.classList.add("hidden"));
          
          document.getElementById(blockId).classList.remove("hidden");
        }
        window.onload = function () {
            const toggleMenu = document.getElementById("toggleMenu");
            const navLinks = document.getElementById("navLinks");
      
            toggleMenu.addEventListener("click", function () {
              navLinks.classList.toggle("hidden");
            });
          };


          document.addEventListener("DOMContentLoaded", function () {
            const toggleMenu = document.getElementById("toggleMenu");
            const navLinks = document.getElementById("navLinks");
          
            toggleMenu.addEventListener("click", () => {
              navLinks.classList.toggle("hidden");
            });
          
            // Optional: Hide mobile nav after clicking a link
            const navItems = navLinks.querySelectorAll("li");
            navItems.forEach(item => {
              item.addEventListener("click", () => {
                navLinks.classList.add("hidden");
              });
            });
          });
          
