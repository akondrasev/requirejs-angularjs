define(["require", 'jquery'],function (require, $) {
    var $view =  $("#view");

    function Core(options) {
        this.app = options.app;
    }

    var modules = {};

    Core.prototype = {
        constructor: Core,
        showModule: function (id) {
            var self = this;
            var module = modules[id];
            require([module.js, "text!" + module.css, "text!" + module.html], function (js, css, html) {
                $view.empty();
                $view.append(html);
                addStyleString(css);
                self.app.controller(module.id, js.controller);
                //TODO angular compile/injectors or whatever we need to do with html
            });
        },
        registerModule: function (options) {
            if (modules[options.id]) throw new Error("Module already registered: ", options);

            modules[options.id] = {
                js: options.js,
                css: options.css,
                name: options.name,
                html: options.html,
                id: options.id
            }
        }
    };

    function addStyleString(str) {
        var node = document.createElement('style');
        node.innerHTML = str;
        document.body.appendChild(node);
    }

    return Core;
});