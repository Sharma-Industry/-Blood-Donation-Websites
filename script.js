document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('nav');

  mobileMenuBtn.addEventListener('click', function () {
    nav.classList.toggle('active');
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      nav.classList.remove('active');

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  });

  // Donor Registration Form
  const donorForm = document.getElementById('donorForm');
  const donorSuccess = document.getElementById('donorSuccess');

  if (donorForm) {
    donorForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Here you would typically send the form data to a server
      // For demo purposes, we'll just show the success message
      donorForm.style.display = 'none';
      donorSuccess.style.display = 'block';

      // Reset form after 5 seconds (for demo)
      setTimeout(() => {
        donorForm.style.display = 'block';
        donorSuccess.style.display = 'none';
        donorForm.reset();
      }, 5000);
    });
  }

  // Blood Request Forms
  const emergencyBtn = document.querySelector('.emergency a');
  const scheduledBtn = document.querySelector('.scheduled a');
  const emergencyForm = document.getElementById('emergencyForm');
  const scheduledForm = document.getElementById('scheduledForm');

  if (emergencyBtn && scheduledBtn) {
    emergencyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      scheduledForm.style.display = 'none';
      emergencyForm.style.display = 'block';
      window.scrollTo({
        top: emergencyForm.offsetTop - 70,
        behavior: 'smooth'
      });
    });

    scheduledBtn.addEventListener('click', function (e) {
      e.preventDefault();
      emergencyForm.style.display = 'none';
      scheduledForm.style.display = 'block';
      window.scrollTo({
        top: scheduledForm.offsetTop - 70,
        behavior: 'smooth'
      });
    });
  }

  // Emergency Request Form
  const emergencyRequestForm = document.getElementById('emergencyRequestForm');
  const emergencySuccess = document.getElementById('emergencySuccess');

  if (emergencyRequestForm) {
    emergencyRequestForm.addEventListener('submit', function (e) {
      e.preventDefault();

      emergencyRequestForm.style.display = 'none';
      emergencySuccess.style.display = 'block';

      setTimeout(() => {
        emergencyRequestForm.style.display = 'block';
        emergencySuccess.style.display = 'none';
        emergencyRequestForm.reset();
      }, 5000);
    });
  }

  // Scheduled Request Form
  const scheduledRequestForm = document.getElementById('scheduledRequestForm');
  const scheduledSuccess = document.getElementById('scheduledSuccess');

  if (scheduledRequestForm) {
    scheduledRequestForm.addEventListener('submit', function (e) {
      e.preventDefault();

      scheduledRequestForm.style.display = 'none';
      scheduledSuccess.style.display = 'block';

      setTimeout(() => {
        scheduledRequestForm.style.display = 'block';
        scheduledSuccess.style.display = 'none';
        scheduledRequestForm.reset();
      }, 5000);
    });
  }

  // Education Tabs
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const tabId = this.getAttribute('data-tab');

      // Remove active class from all buttons and panes
      tabBtns.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));

      // Add active class to clicked button and corresponding pane
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      this.classList.toggle('active');
      const answer = this.nextElementSibling;
      answer.classList.toggle('active');
    });
  });

  // Appointment Form
  const appointmentForm = document.getElementById('appointmentForm');
  const appointmentSuccess = document.getElementById('appointmentSuccess');

  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function (e) {
      e.preventDefault();

      appointmentForm.style.display = 'none';
      appointmentSuccess.style.display = 'block';

      setTimeout(() => {
        appointmentForm.style.display = 'block';
        appointmentSuccess.style.display = 'none';
        appointmentForm.reset();
      }, 5000);
    });
  }

  // Calendar Navigation
  const prevWeekBtn = document.getElementById('prevWeek');
  const nextWeekBtn = document.getElementById('nextWeek');
  const currentWeekEl = document.getElementById('currentWeek');
  const calendarGrid = document.getElementById('calendarGrid');

  if (calendarGrid) {
    let currentDate = new Date();

    function renderCalendar() {
      // Clear previous calendar
      calendarGrid.innerHTML = '';

      // Set week header
      const startOfWeek = new Date(currentDate);
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      currentWeekEl.textContent = `Week of ${formatDate(startOfWeek)}`;

      // Add day headers
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
      });

      // Add day slots
      for (let i = 0; i < 7; i++) {
        const dayDate = new Date(startOfWeek);
        dayDate.setDate(startOfWeek.getDate() + i);

        const daySlot = document.createElement('div');
        daySlot.className = 'day-slot';

        const dateSpan = document.createElement('span');
        dateSpan.className = 'date';
        dateSpan.textContent = dayDate.getDate();
        daySlot.appendChild(dateSpan);

        const slotsDiv = document.createElement('div');
        slotsDiv.className = 'slots';

        // Add random slot indicators (for demo)
        const morningSlot = document.createElement('span');
        morningSlot.className = 'slot-indicator';
        morningSlot.classList.add(getRandomSlotStatus());

        const afternoonSlot = document.createElement('span');
        afternoonSlot.className = 'slot-indicator';
        afternoonSlot.classList.add(getRandomSlotStatus());

        const eveningSlot = document.createElement('span');
        eveningSlot.className = 'slot-indicator';
        eveningSlot.classList.add(getRandomSlotStatus());

        slotsDiv.appendChild(morningSlot);
        slotsDiv.appendChild(afternoonSlot);
        slotsDiv.appendChild(eveningSlot);

        daySlot.appendChild(slotsDiv);
        calendarGrid.appendChild(daySlot);

        // Add click event to select date
        daySlot.addEventListener('click', function () {
          document.getElementById('appointmentDate').value = formatDateInput(dayDate);
        });
      }
    }

    function formatDate(date) {
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }

    function formatDateInput(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function getRandomSlotStatus() {
      const statuses = ['available', 'limited', 'booked'];
      return statuses[Math.floor(Math.random() * statuses.length)];
    }

    prevWeekBtn.addEventListener('click', function () {
      currentDate.setDate(currentDate.getDate() - 7);
      renderCalendar();
    });

    nextWeekBtn.addEventListener('click', function () {
      currentDate.setDate(currentDate.getDate() + 7);
      renderCalendar();
    });

    // Initial render
    renderCalendar();
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      contactForm.style.display = 'none';
      contactSuccess.style.display = 'block';

      setTimeout(() => {
        contactForm.style.display = 'block';
        contactSuccess.style.display = 'none';
        contactForm.reset();
      }, 5000);
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    });
  }

  // Blood Bank Search
  const searchBanksBtn = document.getElementById('searchBanks');

  if (searchBanksBtn) {
    searchBanksBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const locationInput = document.getElementById('bankLocation');
      const bankResults = document.getElementById('bankResults');

      if (locationInput.value.trim() === '') {
        bankResults.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>Please enter a location to search</p>
                    </div>
                `;
        return;
      }

      // In a real app, this would be an API call
      // For demo, we'll use mock data
      const mockBanks = [
        {
          name: 'Central Blood Bank',
          address: '1234 Medical Center Dr, ' + locationInput.value,
          phone: '(555) 123-4567',
          distance: '0.5 miles',
          type: 'hospital'
        },
        {
          name: 'Community Blood Center',
          address: '5678 Health Ave, ' + locationInput.value,
          phone: '(555) 987-6543',
          distance: '1.2 miles',
          type: 'independent'
        },
        {
          name: 'LifeBlood Donation Center',
          address: '91011 Wellness Blvd, ' + locationInput.value,
          phone: '(555) 456-7890',
          distance: '2.5 miles',
          type: 'independent'
        },
        {
          name: 'City Hospital Blood Bank',
          address: '121314 Care St, ' + locationInput.value,
          phone: '(555) 789-0123',
          distance: '3.1 miles',
          type: 'hospital'
        }
      ];

      const typeFilter = document.getElementById('bankTypeFilter').value;
      const filteredBanks = typeFilter ?
        mockBanks.filter(bank => bank.type === typeFilter) :
        mockBanks;

      if (filteredBanks.length === 0) {
        bankResults.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-map-marker-alt"></i>
                        <p>No blood banks found matching your criteria</p>
                    </div>
                `;
        return;
      }

      bankResults.innerHTML = '';

      filteredBanks.forEach(bank => {
        const bankEl = document.createElement('div');
        bankEl.className = 'bank-result';
        bankEl.innerHTML = `
                    <h4>${bank.name}</h4>
                    <p>${bank.address}</p>
                    <p>${bank.phone}</p>
                    <p class="distance">${bank.distance} away</p>
                `;
        bankResults.appendChild(bankEl);
      });

      // In a real app, you would also update the map here
    });
  }

  // Initialize Google Map
  function initMap() {
    // This would initialize a Google Map in a real application
    // For demo purposes, we'll just show a placeholder
    const map = document.getElementById('map');
    if (map) {
      map.innerHTML = `
                <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:#f5f5f5;color:#777;">
                    <div style="text-align:center;">
                        <i class="fas fa-map-marked-alt" style="font-size:3rem;margin-bottom:1rem;"></i>
                        <p>Map would display here with blood bank locations</p>
                    </div>
                </div>
            `;
    }
  }

  // Call initMap when the page loads
  window.initMap = initMap;
  initMap();
});