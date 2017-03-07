define(["slickgrid"], function(Slick) {
	return function () {
		return {
			template: '<div style="width:600px;height:500px;"></div>',
	        replace: true,
			controller: function () {
				console.log("grid directive controller:", arguments);

				var self = this;
				self.init = function (element) {
					var grid;
				    var columns = [{
				            id: "title",
				            name: "Title",
				            field: "title"
				        },
				        {
				            id: "duration",
				            name: "Duration",
				            field: "duration"
				        },
				        {
				            id: "%",
				            name: "% Complete",
				            field: "percentComplete"
				        },
				        {
				            id: "start",
				            name: "Start",
				            field: "start"
				        },
				        {
				            id: "finish",
				            name: "Finish",
				            field: "finish"
				        },
				        {
				            id: "effort-driven",
				            name: "Effort Driven",
				            field: "effortDriven"
				        }
				    ];
				    var options = {
				        enableCellNavigation: true,
				        enableColumnReorder: true,
				        syncColumnCellResize: true,
						forceFitColumns: true,
						frozenColumn: 1
				    };

					var _columns = [{
				            id: "title",
				            name: "Title",
				            field: "title"
				        }];

					var data = [];
					for (var i = 0; i < 500; i++) {
						data[i] = {
							title: "Task " + i,
							duration: "5 days",
							percentComplete: Math.round(Math.random() * 100),
							start: "01/01/2009",
							finish: "01/05/2009",
							effortDriven: (i % 5 == 0)
						};
					}
					grid = new Slick.Grid(element, data, columns, options);
					// grid.resizeCanvas();
				};
			},
			link: function (scope, element, attributes, controller){
				console.log("grid directive link:", arguments);
				controller.init(element);
			}
		}
	}
});
