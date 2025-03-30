document.addEventListener('DOMContentLoaded', function() {
    const links = document.getElementsByTagName('a');
    
    Array.from(links).forEach((link, index) => {
        // Skip links that already have specific styling classes
        if (link.closest('.pagination') || link.closest('.nested-links') || link.id === 'twitter-footer-icon') {
            return;
        }
        
        const colorClass = `color-${(index % 4) + 1}`;
        link.classList.add(colorClass);
    });
}); 