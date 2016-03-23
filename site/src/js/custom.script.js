/// Custom Script for this project 

function init(){
	isotope();
}

function isotope() {
	var grid = document.querySelector('.block-gallery-row');
	var iso = new Isotope( grid, {
	  itemSelector: '.block-gallery',
	  percentPosition: true, 
	  masonry: {
		  columnWidth: 100,
		  gutter: 10
		}
	});
}

init();