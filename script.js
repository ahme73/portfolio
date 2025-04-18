// Initialize AOS animations
AOS.init({
    once: false, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
    duration: 800, // global duration
    easing: 'ease-in-out', // global easing
    anchorPlacement: 'top-bottom', // which position of the element regarding to window should trigger the animation
    disable: 'mobile', // accepts boolean or string with breakpoint (e.g. 'phone', 'tablet', 'mobile')
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    offset: 120, // offset (in px) from the original trigger point
});

// Apply configuration to DOM elements
document.addEventListener('DOMContentLoaded', function() {
    // Set CSS variables for theme colors
    const root = document.documentElement;
    
    // Set light mode colors
    Object.entries(portfolioConfig.lightMode).forEach(([key, value]) => {
        root.style.setProperty(`--light-${key}`, value);
    });
    
    // Set dark mode colors
    Object.entries(portfolioConfig.darkMode).forEach(([key, value]) => {
        root.style.setProperty(`--dark-${key}`, value);
    });
    
    // Set personal info
    document.getElementById('portfolio-name').textContent = portfolioConfig.personalInfo.name;
    document.getElementById('hero-name').textContent = portfolioConfig.personalInfo.name;
    document.getElementById('hero-title').textContent = portfolioConfig.personalInfo.title;
    document.getElementById('hero-tagline').textContent = portfolioConfig.personalInfo.tagline;
    document.getElementById('welcome-text').textContent = portfolioConfig.personalInfo.welcomeText;
    document.getElementById('profile-image').src = portfolioConfig.personalInfo.profileImage;
    document.getElementById('profile-image').alt = portfolioConfig.personalInfo.name + "'s Profile Picture";
    document.title = portfolioConfig.personalInfo.name + " | " + portfolioConfig.personalInfo.title;
    
    // Set social media links
    document.getElementById('github-link').href = portfolioConfig.socialMedia.github;
    document.getElementById('linkedin-link').href = portfolioConfig.socialMedia.linkedin;
    document.getElementById('twitter-link').href = portfolioConfig.socialMedia.twitter;
    document.getElementById('github-projects-link').href = portfolioConfig.socialMedia.github;
    
    // Set resume link
    document.getElementById('resume-link').href = portfolioConfig.personalInfo.resumeLink;
    
    // Set about section
    document.getElementById('about-text-1').textContent = portfolioConfig.about.description[0];
    document.getElementById('about-text-2').textContent = portfolioConfig.about.description[1];
    document.getElementById('experience-years').textContent = portfolioConfig.about.experienceYears;
    document.getElementById('education-degree').textContent = portfolioConfig.about.education.degree;
    document.getElementById('education-university').textContent = portfolioConfig.about.education.university;
    
    // Set core technologies
    const techContainer = document.getElementById('core-technologies');
    techContainer.innerHTML = '';
    portfolioConfig.about.coreTechnologies.forEach(tech => {
        const li = document.createElement('li');
        li.className = 'flex items-center p-2 rounded-lg theme-card shadow-sm hover:shadow-md transition-all';
        li.innerHTML = `
            <span class="text-secondary mr-2 text-xl">▹</span>
            <span>${tech}</span>
        `;
        techContainer.appendChild(li);
    });
    
    // Set projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = '';
    portfolioConfig.projects.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'group h-full';
        projectDiv.setAttribute('data-aos', 'zoom-in-up');
        projectDiv.setAttribute('data-aos-delay', (index + 1) * 100);
        
        let featuredBadge = '';
        if (project.featured) {
            featuredBadge = '<div class="ml-auto"><span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">Featured</span></div>';
        }
        
        let tagsHtml = '';
        project.tags.forEach(tag => {
            tagsHtml += `<span class="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">${tag}</span>`;
        });
        
        projectDiv.innerHTML = `
            <div class="theme-card rounded-xl overflow-hidden shadow-lg card-hover relative h-full flex flex-col">
                <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-80 transition-opacity z-10 flex items-center justify-center">
                    <div class="text-white text-center p-4 transform translate-y-10 group-hover:translate-y-0 transition-transform">
                        <h4 class="text-xl font-bold mb-2">View Project Details</h4>
                        <div class="flex justify-center space-x-4 mt-4">
                            <a href="${project.links.demo}" class="bg-white text-primary px-4 py-2 rounded-lg font-medium transition-colors">Demo</a>
                            <a href="${project.links.code}" class="border border-white text-white px-4 py-2 rounded-lg font-medium transition-colors">Code</a>
                        </div>
                    </div>
                </div>
                <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform">
                <div class="p-6 border-t border-gray-100 dark:border-gray-700 flex-grow flex flex-col">
                    <div class="flex items-center mb-2">
                        <h3 class="text-xl font-bold">${project.title}</h3>
                        ${featuredBadge}
                    </div>
                    <p class="text-gray-600 dark:text-gray-300 mb-4 flex-grow">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        ${tagsHtml}
                    </div>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectDiv);
    });
    
    // Set skills
    const skillCategoriesContainer = document.getElementById('skill-categories');
    skillCategoriesContainer.innerHTML = '';
    portfolioConfig.skills.categories.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'theme-card p-6 rounded-xl shadow-lg';
        categoryDiv.setAttribute('data-aos', index === 0 ? 'fade-right' : index === 1 ? 'fade-up' : 'fade-left');
        categoryDiv.setAttribute('data-aos-delay', (index + 1) * 100);
        
        let skillsHtml = '';
        category.skills.forEach(skill => {
            skillsHtml += `
                <div class="skill-item">
                    <div class="flex justify-between mb-1">
                        <span class="font-medium">${skill.name}</span>
                        <span>${skill.level}%</span>
                    </div>
                    <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-primary to-secondary rounded-full" style="width: ${skill.level}%"></div>
                    </div>
                </div>
            `;
        });
        
        categoryDiv.innerHTML = `
            <div class="flex items-center mb-4">
                <div class="w-12 h-12 rounded-lg bg-${category.iconColor}-100 dark:bg-${category.iconColor}-900 flex items-center justify-center mr-4">
                    <i class="${category.icon} text-${category.iconColor}-500 dark:text-${category.iconColor}-300 text-2xl"></i>
                </div>
                <h3 class="text-xl font-semibold">${category.name}</h3>
            </div>
            <div class="space-y-4">
                ${skillsHtml}
            </div>
        `;
        
        skillCategoriesContainer.appendChild(categoryDiv);
    });
    
    // Set technologies
    const techTrack = document.getElementById('tech-track');
    techTrack.innerHTML = '';
    
    // Add first set of technologies
    portfolioConfig.skills.technologies.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
            <i class="${tech.icon} ${tech.color} text-4xl"></i>
            <span class="block text-center mt-2 text-sm">${tech.name}</span>
        `;
        techTrack.appendChild(techItem);
    });
    
    // Duplicate for seamless looping
    portfolioConfig.skills.technologies.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        techItem.innerHTML = `
            <i class="${tech.icon} ${tech.color} text-4xl"></i>
            <span class="block text-center mt-2 text-sm">${tech.name}</span>
        `;
        techTrack.appendChild(techItem);
    });
    
    // Set contact information
    document.getElementById('contact-email').textContent = portfolioConfig.personalInfo.email;
    document.getElementById('contact-email').href = `mailto:${portfolioConfig.personalInfo.email}`;
    document.getElementById('contact-location').textContent = portfolioConfig.personalInfo.location;
    document.getElementById('contact-phone').textContent = portfolioConfig.personalInfo.phone;
    
    // Set social icons in contact section
    const socialIconsContainer = document.getElementById('contact-social-icons');
    socialIconsContainer.innerHTML = '';
    
    if (portfolioConfig.socialMedia.linkedin) {
        socialIconsContainer.innerHTML += `
            <a href="${portfolioConfig.socialMedia.linkedin}" class="social-icon" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
            </a>
        `;
    }
    
    if (portfolioConfig.socialMedia.github) {
        socialIconsContainer.innerHTML += `
            <a href="${portfolioConfig.socialMedia.github}" class="social-icon" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
            </a>
        `;
    }
    
    if (portfolioConfig.socialMedia.twitter) {
        socialIconsContainer.innerHTML += `
            <a href="${portfolioConfig.socialMedia.twitter}" class="social-icon" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i>
            </a>
        `;
    }
    
    if (portfolioConfig.socialMedia.instagram) {
        socialIconsContainer.innerHTML += `
            <a href="${portfolioConfig.socialMedia.instagram}" class="social-icon" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
            </a>
        `;
    }
    
    // Force refresh AOS when page is fully loaded
    window.addEventListener('load', function() {
        AOS.refresh();
        
        // Fix for footer animation - manually trigger animation after page is loaded
        setTimeout(function() {
            const footer = document.querySelector('footer');
            if (footer) {
                footer.classList.add('aos-animate');
            }
        }, 500);
    });
    
    // Get current year for footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add animation class to sections for scroll reveal
    document.querySelectorAll('.reveal').forEach(element => {
        element.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
    });
    
    // Initialize mobile menu functionality
    initMobileMenu();
    
    // Initialize theme toggle
    initThemeToggle();
    
    // Initialize scroll effects
    initScrollEffects();
});

// Initialize mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const backdrop = document.getElementById('mobileMenuBackdrop');
    const mobileCloseBtn = document.getElementById('mobileMenuClose');
    
    if (menuBtn && mobileMenu && backdrop) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            backdrop.classList.toggle('hidden');
            document.body.classList.toggle('overflow-hidden');
        });
        
        backdrop.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            backdrop.classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        });
        
        if (mobileCloseBtn) {
            mobileCloseBtn.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                backdrop.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        }
        
        // Close menu when clicking a link
        document.querySelectorAll('#mobileMenu a.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                backdrop.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }
}

// Initialize theme toggle functionality
function initThemeToggle() {
    const darkModeToggle = document.getElementById('themeToggle');
    const mobileDarkModeToggle = document.getElementById('mobileThemeToggle');
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');
    const mobileDarkIcon = document.getElementById('mobile-dark-icon');
    const mobileLightIcon = document.getElementById('mobile-light-icon');
    
    // Function to update theme icons
    function updateThemeIcons(isDark) {
        if (darkIcon && lightIcon) {
            darkIcon.classList.toggle('hidden', isDark);
            lightIcon.classList.toggle('hidden', !isDark);
        }
        
        if (mobileDarkIcon && mobileLightIcon) {
            mobileDarkIcon.classList.toggle('hidden', isDark);
            mobileLightIcon.classList.toggle('hidden', !isDark);
        }
    }
    
    // Check for saved theme preference or use the system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
    
    // Toggle theme function
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark');
        localStorage.theme = isDark ? 'light' : 'dark';
        updateThemeIcons(!isDark);
        
        // Reinitialize AOS when the theme changes
        setTimeout(function() {
            AOS.refresh();
        }, 300);
    }
    
    // Toggle dark mode with main button
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    // Toggle dark mode with mobile button
    if (mobileDarkModeToggle) {
        mobileDarkModeToggle.addEventListener('click', toggleTheme);
    }
}

// Initialize scroll-related functionality
function initScrollEffects() {
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.add('opacity-0', 'invisible');
                backToTopButton.classList.remove('opacity-100', 'visible');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll reveal animation
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        document.querySelectorAll('.reveal').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.remove('opacity-0');
                element.classList.add('opacity-100');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    
    // Initialize navbar scroll effect
    const navbar = document.querySelector('.nav-container');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
        
        // Initial check
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        }
    }
}

// Form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For demo purposes, let's just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}