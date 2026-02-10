const elements = document.querySelectorAll(
    ".banner-container, .stack-item, .introduction, .stack-info"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.15 }
);

elements.forEach(el => observer.observe(el));
