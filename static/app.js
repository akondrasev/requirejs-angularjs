define(["jquery", "angular", "Core"], function ($, angular, Core) {
    console.log("App loaded");
    var app = angular.module("app", []);
    var core = new Core({
        app: app
    });

    return {
        init: function () {
            angular.bootstrap(document, ['app']);
            core.registerModule({
                name: "Main",
                id: "main"
            });
            core.showModule("main");
            return this;
        }
    }
});
