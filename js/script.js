// Project data - easily editable
const projectsData = {
    school: [
        {
            title: "Photo Gallery App",
            description: "Een interactieve fotogalerij met geavanceerde filters en sorteerfuncties.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Photo+Gallery+App",
            tags: ["JavaScript", "Gallery", "Responsive"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Gallery+Screenshot+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Gallery+Screenshot+2"
                ],
                description: "Dit project is een volledig functionele fotogalerij webapplicatie gebouwd met vanilla JavaScript. Het bevat geavanceerde filtering opties, sorteerfuncties en een responsive design dat werkt op alle apparaten.",
                technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
                link: "#"
            }
        },
        {
            title: "Brand Identity Design",
            description: "Volledige brand identity voor lokale ondernemers.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Brand+Identity",
            tags: ["Branding", "Logo", "Identity"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Brand+Mockup+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Brand+Mockup+2"
                ],
                description: "Een complete brand identity ontworpen voor een lokaal bedrijf, inclusief logo, kleurenschema, typografie en brand guidelines.",
                technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Strategy"],
                link: "#"
            }
        },
        {
            title: "Web Interface Experiment",
            description: "Experimentele UI concepten met focus op micro-interacties.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Web+Interface",
            tags: ["UI", "Interaction", "Experiment"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=UI+Concept+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=UI+Concept+2"
                ],
                description: "Experimentele gebruikersinterface concepten die focussen op micro-interacties en innovatieve design patterns.",
                technologies: ["Figma", "Principle", "After Effects"],
                link: "#"
            }
        },
        {
            title: "Photography Portfolio",
            description: "Curated selectie van fotografie werk.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Photography",
            tags: ["Photography", "Visual", "Storytelling"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Photo+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Photo+2"
                ],
                description: "Een zorgvuldig samengestelde collectie van mijn beste fotografie werk, met focus op storytelling en visuele impact.",
                technologies: ["Adobe Lightroom", "Adobe Photoshop", "Photography"],
                link: "#"
            }
        },
        {
            title: "Campagne",
            description: "App tegen voedselverspilling",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Campagne",
            tags: ["Website", "Visual", "App"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Campagne+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Campagne+2"
                ],
                description: "Een campagne website en app concept gericht op het verminderen van voedselverspilling in Nederland.",
                technologies: ["React", "Node.js", "UI/UX Design"],
                link: "#"
            }
        },
        {
            title: "Game design",
            description: "Game layout, characters en werkende game in p5js",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Game+Design",
            tags: ["Coding", "p5js"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Game+Screenshot+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Game+Screenshot+2"
                ],
                description: "Een volledig functioneel spel ontwikkeld met p5.js, inclusief custom characters, levels en interactieve elementen.",
                technologies: ["p5.js", "JavaScript", "Game Design"],
                link: "#"
            }
        }
    ],
    eigen: [
        {
            title: "Creative Portfolio Site",
            description: "Een moderne portfolio website met clean design en smooth animaties.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Portfolio+Site",
            tags: ["Web Design", "Frontend", "Animation"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Portfolio+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Portfolio+2"
                ],
                description: "Een moderne, responsive portfolio website gebouwd met aandacht voor detail en gebruikerservaring.",
                technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
                link: "#"
            }
        },
        {
            title: "Photo Gallery App",
            description: "Een interactieve fotogalerij met geavanceerde filters en sorteerfuncties.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Photo+Gallery",
            tags: ["JavaScript", "Gallery", "Responsive"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Gallery+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Gallery+2"
                ],
                description: "Een geavanceerde fotogalerij applicatie met filtering, zoeken en responsive design.",
                technologies: ["React", "CSS Modules", "JavaScript"],
                link: "#"
            }
        },
        {
            title: "Brand Identity Design",
            description: "Volledige brand identity voor lokale ondernemers.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Brand+Design",
            tags: ["Branding", "Logo", "Identity"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Brand+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Brand+2"
                ],
                description: "Complete brand identity ontwerpen voor verschillende cliënten, van logo tot volledige brand guidelines.",
                technologies: ["Adobe Creative Suite", "Brand Strategy", "Design"],
                link: "#"
            }
        },
        {
            title: "Web Interface Experiment",
            description: "Experimentele UI concepten met focus op micro-interacties.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Interface+Exp",
            tags: ["UI", "Interaction", "Experiment"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Experiment+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Experiment+2"
                ],
                description: "Experimentele gebruikersinterface concepten die de grenzen van interactief design verkennen.",
                technologies: ["Figma", "Framer", "Prototyping"],
                link: "#"
            }
        },
        {
            title: "Photography Portfolio",
            description: "Curated selectie van fotografie werk.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Photography+Port",
            tags: ["Photography", "Visual", "Storytelling"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Photo+Port+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Photo+Port+2"
                ],
                description: "Een professionele fotografie portfolio website met aandacht voor visuele hiërarchie en gebruikerservaring.",
                technologies: ["Photography", "Web Design", "Adobe Suite"],
                link: "#"
            }
        },
        {
            title: "Digital Illustration Series",
            description: "Digitale illustraties en artwork voor verschillende doeleinden.",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Digital+Art",
            tags: ["Illustration", "Digital Art", "Design"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Illustration+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Illustration+2"
                ],
                description: "Een serie digitale illustraties gemaakt voor verschillende projecten en persoonlijke expressie.",
                technologies: ["Adobe Illustrator", "Procreate", "Digital Painting"],
                link: "#"
            }
        }
    ],
    muziek: [
        {
            title: "Electronic Track 1",
            description: "Een experimentele elektronische compositie",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Electronic+Track",
            tags: ["Electronic", "Experimental", "Production"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Track+Waveform",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Studio+Setup"
                ],
                description: "Een experimentele elektronische track geproduceerd met analoge en digitale synthesizers.",
                technologies: ["Ableton Live", "Synthesizers", "Audio Production"],
                link: "#"
            }
        },
        {
            title: "Ambient Soundscape",
            description: "Rustgevende ambient muziek voor meditatie",
            image: "https://via.placeholder.com/535x224/cccccc/000000?text=Ambient+Music",
            tags: ["Ambient", "Soundscape", "Meditation"],
            details: {
                images: [
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Soundscape+1",
                    "https://via.placeholder.com/800x600/cccccc/000000?text=Soundscape+2"
                ],
                description: "Een ambient soundscape ontworpen voor meditatie en ontspanning, gemaakt met veldopnames en synthesizers.",
                technologies: ["Field Recording", "Reverb", "Sound Design"],
                link: "#"
            }
        }
    ]
};

// Slideshow data - easily editable
const slideshowData = [
    {
        image: "assets/Afbeelding1.png",
        title: "Design Studio",
        description: "Minimalistisch en functioneel"
    },
    {
        image: "assets/Afbeelding2.png",
        title: "Creative Workspace",
        description: "Waar ideeën tot leven komen"
    },
    {
        image: "https://via.placeholder.com/896x384/cccccc/000000?text=Portfolio+Site",
        title: "Portfolio Site",
        description: "Moderne webontwikkeling"
    },
    {
        image: "https://via.placeholder.com/896x384/cccccc/000000?text=Brand+Design",
        title: "Brand Design",
        description: "Visuele identiteit"
    }
];

// DOM elements
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshow();
    initializeTabs();
    loadProjects('school');
    initializeModal();
});

// Slideshow functionality
function initializeSlideshow() {
    updateSlideshow();
    
    // Auto-play slideshow
    setInterval(() => {
        nextSlide();
    }, 5000);
}

function updateSlideshow() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlideshow();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlideshow();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideshow();
}

// Tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');
            
            // Load projects for this tab
            loadProjects(tabName);
        });
    });
}

// Load projects for a specific category
function loadProjects(category) {
    const projectsGrid = document.querySelector(`#${category}-tab .projects-grid`);
    projectsGrid.innerHTML = '';
    
    projectsData[category].forEach((project, index) => {
        const projectCard = createProjectCard(project, category, index);
        projectsGrid.appendChild(projectCard);
    });
}

// Create a project card element
function createProjectCard(project, category, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProjectModal(category, index);
    
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Slideshow controls
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('prev-btn')) {
            prevSlide();
        } else if (e.target.classList.contains('next-btn')) {
            nextSlide();
        } else if (e.target.classList.contains('indicator')) {
            const index = Array.from(indicators).indexOf(e.target);
            goToSlide(index);
        }
    });
}

// Open project modal with details
function openProjectModal(category, index) {
    const project = projectsData[category][index];
    const modal = document.getElementById('project-modal');
    const modalBody = document.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <div class="project-gallery">
            ${project.details.images.map(img => `<img src="${img}" alt="${project.title}" style="width: 100%; margin-bottom: 16px; border-radius: 8px;">`).join('')}
        </div>
        <p style="margin-bottom: 24px; color: #4a5565; line-height: 1.6;">${project.details.description}</p>
        <h3 style="margin-bottom: 12px; color: #101828;">Gebruikte Technologieën</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
            ${project.details.technologies.map(tech => `<span style="background: #f3f4f6; padding: 6px 12px; border-radius: 50px; font-size: 12px; color: #364153;">${tech}</span>`).join('')}
        </div>
        ${project.details.link !== '#' ? `<a href="${project.details.link}" target="_blank" style="display: inline-block; background: #096; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none;">Bekijk Project</a>` : ''}
    `;
    
    modal.style.display = 'block';
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Open email client
function openEmail() {
    const subject = encodeURIComponent("Samenwerkingsvoorstel");
    const body = encodeURIComponent("Hallo,\n\nIk ben geïnteresseerd in een samenwerking. Laten we de details bespreken.\n\nMet vriendelijke groet,\n[Uw Naam]");
    window.location.href = `mailto:jouw.email@example.com?subject=${subject}&body=${body}`;
}

// Add slideshow slides dynamically
function initializeSlideshowSlides() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.innerHTML = '';
    
    slideshowData.forEach((slideData, index) => {
        const slide = document.createElement('div');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.innerHTML = `
            <img src="${slideData.image}" alt="${slideData.title}">
            <div class="slide-overlay">
                <h3>${slideData.title}</h3>
                <p>${slideData.description}</p>
            </div>
        `;
        slideshow.appendChild(slide);
    });
}

// Call this after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshowSlides();
    // ... rest of initialization
});



const gallery = document.querySelector('.hover-gallery');
const items = document.querySelectorAll('.gallery-item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {

        // set state
        gallery.classList.add('has-active');

        // remove old active
        items.forEach(i => i.classList.remove('active'));

        // set new active
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
        items.forEach(i => i.classList.remove('active'));
        gallery.classList.remove('has-active');
    });
});
