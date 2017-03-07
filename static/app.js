define(["jquery", "angular", "AppController", "grid"], function ($, angular, AppController, grid) {
    console.log("App loaded");

    var app = angular.module("app", []);
    app.controller("AppController", AppController);
    app.directive("grid", grid);

    return {
        init: function () {
            angular.bootstrap(document, ['app']);
        }
    }
});
