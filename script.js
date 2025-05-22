


function toggleLocationModal() {
  document.getElementById("location-modal").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let currentIndex = 0;
  const slideWidth = 100; // as percentage

  // Set initial position
  updateCarousel();

  // Set up auto-play
  let autoPlayInterval = setInterval(nextSlide, 5000);

  // Next button click
  nextBtn.addEventListener("click", function () {
    clearInterval(autoPlayInterval);
    nextSlide();
    autoPlayInterval = setInterval(nextSlide, 5000);
  });

  // Previous button click
  prevBtn.addEventListener("click", function () {
    clearInterval(autoPlayInterval);
    prevSlide();
    autoPlayInterval = setInterval(nextSlide, 5000);
  });

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      clearInterval(autoPlayInterval);
      currentIndex = index;
      updateCarousel();
      autoPlayInterval = setInterval(nextSlide, 5000);
    });
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  function updateCarousel() {
    // Update carousel position
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }
});


   // Simple interaction - you can enhance this as needed
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('click', function() {
                alert('Navigating to ' + this.querySelector('.card-title').textContent + ' section');
            });
        });


          // Simple slider functionality
        const container = document.querySelector('.offers-container');
        const cards = document.querySelectorAll('.offer-card');
        const prevBtn = document.querySelector('.nav-prev');
        const nextBtn = document.querySelector('.nav-next');
        
        let currentIndex = 0;
        const cardWidth = cards[0].offsetWidth + 15; // Card width + gap
        
        // Initialize slider
        updateSliderPosition();
        
        // Navigation buttons
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSliderPosition();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < cards.length - 1) {
                currentIndex++;
                updateSliderPosition();
            }
        });
        
        // Touch support
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchStartX - touchEndX > swipeThreshold) {
                // Swipe left
                if (currentIndex < cards.length - 1) {
                    currentIndex++;
                    updateSliderPosition();
                }
            } else if (touchEndX - touchStartX > swipeThreshold) {
                // Swipe right
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSliderPosition();
                }
            }
        }
        
        function updateSliderPosition() {
            // On mobile, use scrollTo for smooth native scrolling behavior
            if (window.innerWidth < 768) {
                container.scrollTo({
                    left: cards[currentIndex].offsetLeft - container.offsetLeft,
                    behavior: 'smooth'
                });
            } else {
                // On desktop, use transform
                container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }
            
            // Update button states
            prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
            nextBtn.style.opacity = currentIndex === cards.length - 1 ? '0.5' : '1';
        }
        
        // Handle window resize
        window.addEventListener('resize', () => {
            // Recalculate card width
            const newCardWidth = cards[0].offsetWidth + 15;
            if (newCardWidth !== cardWidth) {
                // Update position after resize
                updateSliderPosition();
            }
        });


         document.addEventListener('DOMContentLoaded', function () {
      new Flickity('.custom-carousel', {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000,
        pageDots: true,
        prevNextButtons: true,
      });
    });

      // Initialize Flickity
        var limitedDealsSlider = new Flickity('.ltd-deals-wrapper', {
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            wrapAround: true,
            autoPlay: false,
            prevNextButtons: true,
            freeScroll: false,
            groupCells: 1,
            adaptiveHeight: false,
            percentPosition: true,
            resize: true,
            fullscreen: true
        });
        
        // Handle favorites
        document.querySelectorAll('.favorite').forEach(function(favBtn) {
            favBtn.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
        
        // Simple countdown timer functionality
        function updateTimer() {
            const timerElement = document.querySelector('.time-remaining');
            let timeString = timerElement.textContent;
            let [hours, minutes, seconds] = timeString.split(' ').map(part => {
                return parseInt(part.match(/\d+/)[0]);
            });
            
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                    if (hours < 0) {
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                    }
                }
            }
            
            timerElement.textContent = `${hours}h ${minutes}m ${seconds}s remaining`;
        }
        
        // Update timer every second
        setInterval(updateTimer, 1000);
        
        window.addEventListener('load', function() {
            // Force Flickity to recalculate sizes and positions
            limitedDealsSlider.resize();
            
            // Adjust for full width on window resize
            window.addEventListener('resize', function() {
                limitedDealsSlider.resize();
            });
        });

          function toggleWishlist(button) {
            button.classList.toggle('active');
            if (button.classList.contains('active')) {
                button.innerHTML = '♥';
                console.log('Added to wishlist');
            } else {
                button.innerHTML = '♡';
                console.log('Removed from wishlist');
            }
        }

        function addToCart(productId) {
            console.log(`Added ${productId} to cart`);
            // Add your cart logic here
            
            // Show feedback
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'ADDED!';
            button.style.background = '#4caf50';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '#00bcd4';
            }, 1500);
        }

        function scrollProducts(direction) {
            const grid = document.getElementById('productsGrid');
            const scrollAmount = 280; // Card width + gap
            
            if (direction === 'left') {
                grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }

        // Auto-hide navigation arrows based on scroll position
        document.addEventListener('DOMContentLoaded', function() {
            const grid = document.getElementById('productsGrid');
            const prevBtn = document.querySelector('.nav-arrow.prev');
            const nextBtn = document.querySelector('.nav-arrow.next');

            function updateArrowVisibility() {
                if (window.innerWidth > 768) {
                    const isAtStart = grid.scrollLeft <= 0;
                    const isAtEnd = grid.scrollLeft >= grid.scrollWidth - grid.clientWidth;
                    
                    prevBtn.style.opacity = isAtStart ? '0.5' : '1';
                    nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
                    prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
                    nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
                }
            }

            grid.addEventListener('scroll', updateArrowVisibility);
            window.addEventListener('resize', updateArrowVisibility);
            updateArrowVisibility();
        });



        


        


           function scrollCards(direction, containerId) {
                const container = document.getElementById(containerId);
                const scrollAmount = 300;
                
                if (direction === 'left') {
                    container.scrollBy({
                        left: -scrollAmount,
                        behavior: 'smooth'
                    });
                } else {
                    container.scrollBy({
                        left: scrollAmount,
                        behavior: 'smooth'
                    });
                }
            }

            // Auto-scroll functionality (optional)
            function autoScroll() {
                const containers = document.querySelectorAll('.cards-grid');
                containers.forEach(container => {
                    if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                        container.scrollTo({
                            left: 0,
                            behavior: 'smooth'
                        });
                    } else {
                        container.scrollBy({
                            left: 300,
                            behavior: 'smooth'
                        });
                    }
                });
            }

            // Uncomment the line below to enable auto-scroll every 5 seconds
            // setInterval(autoScroll, 5000);

            // Touch/swipe support for mobile
            let isDown = false;
            let startX;
            let scrollLeft;

            document.querySelectorAll('.cards-grid').forEach(container => {
                container.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - container.offsetLeft;
                    scrollLeft = container.scrollLeft;
                    container.style.cursor = 'grabbing';
                });

                container.addEventListener('mouseleave', () => {
                    isDown = false;
                    container.style.cursor = 'grab';
                });

                container.addEventListener('mouseup', () => {
                    isDown = false;
                    container.style.cursor = 'grab';
                });

                container.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - container.offsetLeft;
                    const walk = (x - startX) * 2;
                    container.scrollLeft = scrollLeft - walk;
                });

                // Touch events for mobile
                container.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].pageX - container.offsetLeft;
                    scrollLeft = container.scrollLeft;
                });

                container.addEventListener('touchmove', (e) => {
                    const x = e.touches[0].pageX - container.offsetLeft;
                    const walk = (x - startX) * 2;
                    container.scrollLeft = scrollLeft - walk;
                });
            });








               document.querySelector('.store-info p').addEventListener('click', function() {
            alert('Opening store locator...');
        });

        document.querySelector('.cta-button').addEventListener('click', function() {
            alert('Redirecting to generic medicine section...');
        });

        document.querySelector('.arrow-icon').addEventListener('click', function() {
            alert('Next offer...');
        });

        // Animate elements on scroll (if banner is not at top)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                }
            });
        });

        document.querySelectorAll('.store-section, .promo-section').forEach(el => {
            observer.observe(el);
        });