(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      templateUrl: 'templates/index.tpl'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
