(function($) {
	$(function() {
		$('.node-slide-form').each(function() {
			/* creation */
			var self = $(this),
			widthField = $('#edit-field-slide-width-0-value', self),
			heightField = $('#edit-field-slide-height-0-value', self),
			slide = $('<div class="slide"></div>'),
			widthOverlayTop = $('<div class="width-overlay top"></div>'),
			widthOverlayBottom = $('<div class="width-overlay bottom"></div>'),
			heightOverlayLeft = $('<div class="height-overlay left"></div>'),
			heightOverlayRight = $('<div class="height-overlay right"></div>');

			slide.append(heightOverlayLeft, widthOverlayTop, heightOverlayRight, widthOverlayBottom);

			widthOverlayTop.add(widthOverlayBottom)
				.mousewheel(function(e) {
					e.preventDefault();

					var slideWidth = slide.width();
					switch (e.deltaY) {
						case 1: //wheeling down
							slide.css('width', (slideWidth + 1) + 'px');
							widthField.val(slideWidth + 1);
							break;
						case -1: //wheeling up
							slide.css('width', (slideWidth - 1) + 'px');
							widthField.val(slideWidth - 1);
							break;
					}
				});

			heightOverlayLeft.add(heightOverlayRight)
				.mousewheel(function(e) {
					e.preventDefault();

					var slideHeight = slide.height();
					switch (e.deltaY) {
						case 1: //wheeling down
							slide.css('height', (slideHeight + 1) + 'px');
							heightField.val(slideHeight + 1);
							break;
						case -1: //wheeling up
							slide.css('height', (slideHeight - 1) + 'px');
							heightField.val(slideHeight - 1);
							break;
					}
				});

			var bodySpace = $('<div class="body-space"></div>');

			slide.append(bodySpace);

			CKEDITOR.on('instanceReady', function(e) {
				bodySpace.click(function() {
					e.editor.focus();
				});

				e.editor.on('change', function() {
					bodySpace.html(this.getData());
				});
			});

			/* placement */
			self.before(slide)
				/*.css('display', 'none')*/;
		});
	});
})(jQuery);