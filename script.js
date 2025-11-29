// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll progress indicator
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Project details modal functionality
function showProjectDetails(projectId) {
    const projectDetails = {
        'project1': {
            title: 'Multiple Linear Regression - Housing Price Prediction',
            description: 'This project involved building comprehensive housing price prediction models using real-world datasets. I implemented multiple linear regression techniques using both Statsmodels and Scikit-learn libraries to compare different approaches and methodologies.',
            features: [
                'Feature selection and engineering',
                'Multicollinearity detection and handling',
                'Model evaluation using R² and MSE metrics',
                'Cross-validation and performance optimization',
                'Statistical significance testing',
                'Residual analysis and model diagnostics'
            ],
            technologies: ['Python', 'Statsmodels', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
            outcomes: 'Successfully achieved high prediction accuracy with R² > 0.85 and identified key factors affecting housing prices.'
        },
        'project2': {
            title: 'Binary Text Classification - IMDb Sentiment Analysis',
            description: 'Developed an advanced sentiment analysis system for movie reviews using natural language processing techniques. The project focused on classifying IMDb movie reviews as positive or negative using machine learning algorithms.',
            features: [
                'TF-IDF Vectorization implementation',
                'Logistic Regression classification',
                'Hyperparameter tuning and optimization',
                'Classification metrics evaluation',
                'Text preprocessing and cleaning',
                'Feature importance analysis'
            ],
            technologies: ['Python', 'Scikit-learn', 'NLTK', 'TF-IDF', 'Logistic Regression', 'Pandas'],
            outcomes: 'Achieved 85%+ accuracy in sentiment classification with optimized hyperparameters and robust evaluation metrics.'
        },
        'project3': {
            title: 'SQL Data Cleaning & EDA - Database Analytics',
            description: 'Performed comprehensive data cleaning and exploratory data analysis using SQL on large databases. This project involved writing complex SQL queries to extract, transform, and analyze business data to uncover meaningful insights.',
            features: [
                'Complex SQL query optimization',
                'Data normalization and cleaning',
                'Aggregation and grouping analysis',
                'Advanced JOIN operations',
                'Subqueries and CTEs implementation',
                'Database performance tuning'
            ],
            technologies: ['SQL', 'MySQL', 'Data Cleaning', 'EDA', 'Database Management'],
            outcomes: 'Successfully cleaned and analyzed large datasets, identified data quality issues, and extracted key business insights through optimized SQL queries.'
        },
        'project4': {
            title: 'Amazon Web Scraper - Price Tracking System',
            description: 'Developed an automated web scraping tool to track Amazon product prices, ratings, and availability. The system continuously monitors products and stores historical data for price trend analysis and alerts.',
            features: [
                'Automated data extraction using BeautifulSoup',
                'Real-time price monitoring',
                'Product data export to CSV',
                'Price trend analysis and visualization',
                'Error handling and retry mechanisms',
                'Scheduled scraping tasks'
            ],
            technologies: ['Python', 'BeautifulSoup', 'Requests', 'Pandas', 'CSV', 'Matplotlib'],
            outcomes: 'Built a reliable scraping system that tracks 100+ products daily, provides price drop alerts, and generates comprehensive market analysis reports.'
        },
        'project5': {
            title: 'Data Analysis & Visualization - Insights Dashboard',
            description: 'Conducted comprehensive exploratory data analysis on multiple real-world datasets using SQL, Excel, Python, Tableau, and Power BI. Created interactive dashboards and visualizations to communicate data insights effectively.',
            features: [
                'Comprehensive exploratory data analysis',
                'Interactive Tableau and Power BI dashboards',
                'Statistical trend analysis',
                'Advanced Excel analysis with pivot tables',
                'SQL-based data extraction and transformation',
                'Automated reporting and visualization'
            ],
            technologies: ['SQL', 'Excel', 'Tableau', 'Power BI', 'Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib', 'Seaborn'],
            outcomes: 'Created dynamic dashboards used by stakeholders for decision-making, discovered key business insights, and improved data understanding by 40%.'
        }
    };

    const project = projectDetails[projectId];
    if (project) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="modal-overlay" onclick="closeModal()"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2>${project.title}</h2>
                    <span class="close-btn" onclick="closeModal()">&times;</span>
                </div>
                <div class="modal-body">
                    <p class="project-desc">${project.description}</p>
                    <h3>Key Features:</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <h3>Technologies Used:</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <h3>Outcomes:</h3>
                    <p class="outcomes">${project.outcomes}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Create mailto link with form data
    const mailtoLink = `mailto:alfaizansari7208@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    const button = this.querySelector('button');
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Message Prepared!';
    button.style.background = 'green';

    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        this.reset();
    }, 3000);
});

// Add typing animation to hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero .subtitle');
    const originalText = subtitle.textContent;
    setTimeout(() => {
        typeWriter(subtitle, originalText, 80);
    }, 1000);
});

// Add particle effect to hero section
function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        pointer-events: none;
        animation: float 6s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 6 + 's';
    
    document.querySelector('.hero').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 2000);