new Slide({
	slide: ['../img/slide-0.jpg', '../img/slide-1.jpg', '../img/slide-2.jpg', '../img/slide-3.jpg'],
	container: ".main-stage",
	direction: "hori", //hori(default), vert, fade
	autoStart: true,   //false(def), true
	gapSpeed: 4000,    //3000(def)
	aniSpeed: 750			 //500(def)
});

new Slide({
	slide: ['../img/home-2.jpg', '../img/home-3.jpg', '../img/home-4.jpg'],
	container: ".prd-stage",
	direction: "fade", //hori(default), vert, fade
	autoStart: true,   //false(def), true
});