
	new Splide( '.splide' ).mount();
        
    document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#card-slider', {
		perPage    : 2,
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	} ).mount();
} );

// Create and mount the thumbnails slider.
var secondarySlider = new Splide( '#secondary-slider', {
	rewind      : true,
	fixedWidth  : 100,
	fixedHeight : 64,
	isNavigation: true,
	gap         : 10,
	focus       : 'center',
	pagination  : false,
	cover       : true,
	perPage    : 5,
	breakpoints : {
		668: {
			perPage: 3,
		},
		800:{
			perPage: 5,
		},

		'600': {
			fixedWidth  : 66,
			fixedHeight : 40,
		}
	}
} ).mount();

// Create the main slider.
var primarySlider = new Splide( '#primary-slider', {
	type       : 'fade',
	heightRatio: 0.5,
	pagination : false,
	arrows     : false,
	cover      : true,
} );

// Set the thumbnails slider as a sync target and then call mount.
primarySlider.sync( secondarySlider ).mount();



// project 03

document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#website-slider', {
		perPage    : 1,
		breakpoints: {
			600: {
				perPage: 1,
			},
			width : '100vw',
			height: '100vh',
		}
	} ).mount();
} );