(function($) {
	$(function() {
		$('.node-slide-form').each(function() {
			/* creation */
			var slide = $('<div class="slide"></div>'),
			widthOverlayTop = $('<div class="width-overlay top">Mousewheel</div>'),
			widthOverlayBottom = $('<div class="width-overlay bottom"></div>'),
			heightOverlayLeft = $('<div class="height-overlay left"></div>'),
			heightOverlayRight = $('<div class="height-overlay right"></div>');

			slide.append(heightOverlayLeft, widthOverlayTop, heightOverlayRight, widthOverlayBottom);

			widthOverlayTop.add(widthOverlayBottom)
				.mousewheel(function(e) {
					e.preventDefault();

					var slideWidth = slide.width();
					switch (e.deltaY) {
						case -1: //wheeling down
							slide.css('width', (slideWidth + 1) + 'px');
							break;
						case 1: //wheeling up
							slide.css('width', (slideWidth - 1) + 'px');
							break;
					}
				});

			heightOverlayLeft.add(heightOverlayRight)
				.mousewheel(function(e) {
					e.preventDefault();

					var slideHeight = slide.height();
					switch (e.deltaY) {
						case -1: //wheeling down
							slide.css('height', (slideHeight + 1) + 'px');
							break;
						case 1: //wheeling up
							slide.css('height', (slideHeight - 1) + 'px');
							break;
					}
				});

			/* placement */
			$(this).before(slide)
				.css('display', 'none');
		});
	});
})(jQuery);