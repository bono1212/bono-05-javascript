var Slide = function(arg) {
	this.slides = arg.slide;
	this.container = arg.container;
	this.wrapper = $('<div class="bono-wrapper"></div>').appendTo($(this.container));
	this.direction = arg.direction || 'hoti';
	this.autostart = arg.autostart || false;
	this.gapSpeed = arg.gapSpeed || 3000;
	this.aniSpeed = arg.aniSpeed || 500;
	this.init();
	return this;
}

Slide.prototype.init = function(){
	var html = '';
	for(var i=0; i<this.slides.length; i++) {
	html = '<div class="bono-slide">';
	html += '<img src="'+this.slides[i]+'" class="img">';
	html += '</div>';
	$(this.wrapper).append(html);
	}
}