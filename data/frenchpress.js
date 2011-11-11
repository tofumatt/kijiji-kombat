/**
 * French Press -- Version 0.0.1
 * http://github.com/tofumatt/frenchpress
 *
 * Copyright (c) 2011, Matthew Riley MacPherson
 * MIT Licensed
 */
self.on('message', function(data) {
    var _window = new XPCNativeWrapper(content, 'window').wrappedJSObject;

    (function(window, document) {
        try {
            this.CoffeeScript;
        } catch(e) {
            eval(data.coffeeScript);
        }

        eval(this.CoffeeScript.compile(data.code));
    }).call(_window, _window);
});

self.postMessage(document.URL);
