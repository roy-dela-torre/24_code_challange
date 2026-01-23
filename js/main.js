// ============================================
// Main JavaScript
// E-commerce Web Shop
// ============================================

(function($) {
    'use strict';
    
    // Initialize Foundation
    $(document).foundation();
    
    // ============================================
    // Initialize AOS (Animate On Scroll)
    // ============================================
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
    
    // ============================================
    // Smooth Scrolling for Anchor Links
    // ============================================
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.getAttribute('href'));
        
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    // ============================================
    // Shopping Cart Functionality
    // ============================================
    let cartCount = 3; // Initial cart count
    
    $('.product-card__add-to-cart').on('click', function(event) {
        event.preventDefault();
        
        const $button = $(this);
        const $card = $button.closest('.product-card');
        const productTitle = $card.find('.product-card__title').text();
        
        // Add animation
        $button.addClass('adding');
        
        // Simulate adding to cart
        setTimeout(function() {
            cartCount++;
            $('.header__cart-badge').attr('data-count', cartCount);
            $button.removeClass('adding');
            
            // Show success message (you can replace with a toast notification)
            showNotification(`${productTitle} added to cart!`);
        }, 300);
    });
    
    // ============================================
    // Notification System
    // ============================================
    function showNotification(message) {
        const $notification = $('<div>', {
            class: 'notification',
            text: message,
            css: {
                position: 'fixed',
                top: '100px',
                right: '20px',
                background: '#27AE60',
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 9999,
                opacity: 0,
                transform: 'translateX(400px)'
            }
        });
        
        $('body').append($notification);
        
        // Animate in
        $notification.animate({
            opacity: 1,
            right: '20px'
        }, 300);
        
        // Animate out and remove
        setTimeout(function() {
            $notification.animate({
                opacity: 0,
                right: '-300px'
            }, 300, function() {
                $(this).remove();
            });
        }, 3000);
    }
    
    // ============================================
    // Initialize Flickity Carousels
    // ============================================
    $('.product-carousel__slider').each(function() {
        const $carousel = $(this);
        
        // Check if Flickity is already initialized
        if (!$carousel.data('flickity')) {
            const options = $carousel.data('flickity') || {};
            
            $carousel.flickity({
                cellAlign: 'left',
                contain: true,
                groupCells: true,
                pageDots: true,
                prevNextButtons: true,
                wrapAround: false,
                autoPlay: false,
                imagesLoaded: true,
                percentPosition: true,
                adaptiveHeight: false,
                ...options
            });
        }
    });
    
    // ============================================
    // Responsive Carousel Adjustments
    // ============================================
    function adjustCarouselCells() {
        const windowWidth = $(window).width();
        let cellWidth;
        
        if (windowWidth < 640) {
            // Mobile: 1 cell
            cellWidth = '100%';
        } else if (windowWidth < 1024) {
            // Tablet: 2 cells
            cellWidth = 'calc(50% - 20px)';
        } else {
            // Desktop: 3 cells
            cellWidth = 'calc(33.333% - 20px)';
        }
        
        $('.product-carousel__slider .product-card').css('width', cellWidth);
        
        // Resize Flickity after cell width change
        $('.product-carousel__slider').each(function() {
            if ($(this).data('flickity')) {
                $(this).flickity('resize');
            }
        });
    }
    
    // Adjust on load and resize
    adjustCarouselCells();
    $(window).on('resize', debounce(adjustCarouselCells, 250));
    
    // ============================================
    // Product Card Hover Effects
    // ============================================
    $('.product-card').on('mouseenter', function() {
        $(this).addClass('is-hovered');
    }).on('mouseleave', function() {
        $(this).removeClass('is-hovered');
    });
    
    // ============================================
    // Category Card Click
    // ============================================
    $('.category-card').on('click', function() {
        const categoryName = $(this).find('.category-card__title').text();
        showNotification(`Browsing ${categoryName} category...`);
    });
    
    // ============================================
    // Search Functionality (Basic)
    // ============================================
    $('.header__icon-btn[aria-label="Search"]').on('click', function() {
        // This is a placeholder - you would implement actual search
        showNotification('Search functionality coming soon!');
    });
    
    // ============================================
    // Mobile Menu Toggle
    // ============================================
    $('[data-toggle="mobile-menu"]').on('click', function() {
        // This is a placeholder - you would implement actual mobile menu
        showNotification('Mobile menu coming soon!');
    });
    
    // ============================================
    // Newsletter Form Submission
    // ============================================
    $('.newsletter-form').on('submit', function(event) {
        event.preventDefault();
        const email = $(this).find('input[type="email"]').val();
        
        if (email) {
            showNotification('Thank you for subscribing!');
            $(this).find('input[type="email"]').val('');
        }
    });
    
    // ============================================
    // Utility: Debounce Function
    // ============================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // ============================================
    // Lazy Loading Images (Optional Enhancement)
    // ============================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ============================================
    // Page Load Animation
    // ============================================
    $(window).on('load', function() {
        $('body').addClass('loaded');
        
        // Animate elements on scroll
        const animateOnScroll = function() {
            $('.product-card, .category-card').each(function() {
                const elementTop = $(this).offset().top;
                const viewportBottom = $(window).scrollTop() + $(window).height();
                
                if (elementTop < viewportBottom - 100) {
                    $(this).addClass('animate-in');
                }
            });
        };
        
        animateOnScroll();
        $(window).on('scroll', debounce(animateOnScroll, 100));
    });
    
    // ============================================
    // Console Log for Development
    // ============================================
    console.log('Premium Shop - E-commerce Web Application');
    console.log('Built with Foundation, Flickity, and SCSS');
    console.log('Version 1.0.0');
    
})(jQuery);
