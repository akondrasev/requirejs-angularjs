require.config({
	paths: {
		'angular': "angular/angular",
		'jquery': "jquery/dist/jquery",
		'slickgrid': "slickgrid/slick.grid",
		'jquery-event-drag': "slickgrid/lib/jquery.event.drag-2.3.0",
		'jquery-event-drop': "slickgrid/lib/jquery.event.drop-2.3.0",
		'slick-core': "slickgrid/slick.core",
		'jquery-ui': 'slickgrid/lib/jquery-ui-1.11.3',
		'AppController': "controller/AppController",
		'grid' : "directives/grid",
		'Core': "core/core",
		'text': "text/text"
	},

	shim: {
		'jquery-event-drag': {
			deps: ['jquery']
		},
		'jquery-event-drop': {
			deps: ['jquery']
		},
		'jquery-ui': {
			deps: ['jquery']
		},
		'slick-core': {
			deps: ['jquery']
		},
        'slickgrid': {
            deps: ['jquery', 'jquery-event-drag', 'jquery-event-drop', 'slick-core', 'jquery-ui'],
            exports: 'Slick'
        },
		'angular': {
			deps: ["jquery"],
			exports: "angular"
		}
    }
});
