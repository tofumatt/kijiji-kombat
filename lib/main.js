var data    = require('self').data,
    pageMod = require('page-mod');

pageMod.PageMod({
    include: '*.kijiji.ca',
    contentScriptWhen: 'ready',
    contentScriptFile: [
        data.url('jquery-1.7.min.js'),
        data.url('frenchpress.js')
    ],
    onAttach: function onAttach(worker) {
        worker.on('message', function(msg) {
            worker.postMessage({
                code: data.load('kijiji.coffee'),
                coffeeScript: data.load('coffee-script.js')
            });
        });
    }
});
