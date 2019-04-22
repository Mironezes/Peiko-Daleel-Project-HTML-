$( document ).ready(function() {

		$(".owl-carousel.testimonials_tiles_block").owlCarousel({
    				center: true,
				    items:1,
				    loop:true,
				    margin:10,
				    dotsContainer: '.testimonials_dots'
				});

			    var owlTestimonials = $('.testimonials_tiles_block');
				owlTestimonials.owlCarousel();

				$('.testimonials_arrows .slider_arrows__next').click(function() {
					   owlTestimonials.trigger('next.owl.carousel');
				})
				
				$('.testimonials_arrows .slider_arrows__prev').click(function() {
					   owlTestimonials.trigger('prev.owl.carousel');
				})


			  	$(".owl-carousel.verified_suppliers_tiles_block").owlCarousel({
    				center: true,
				    items:9,
				    loop:true,
				    margin:20,
				    responsive : {
					    // breakpoint from 0 up
					    0 : {
				    		items:3,
					    },
					    // breakpoint from 480 up
					    480 : {
				    		items:4,
					    },
					    // breakpoint from 768 up
					    768 : {
				    		items:6,
					    },
					    992 : {
				    		items:9
					    }					    
					}
				});

			    var owlSuppliers = $('.verified_suppliers_tiles_block');
				owlSuppliers.owlCarousel();

				$('.verified_suppliers_arrows .slider_arrows__next').click(function() {
					   owlSuppliers.trigger('next.owl.carousel');
				})
				
				$('.verified_suppliers_arrows .slider_arrows__prev').click(function() {
					   owlSuppliers.trigger('prev.owl.carousel');
		})

	$('img.svg').each(function(){
	    var $img = $(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    $.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = $(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});
});