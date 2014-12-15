Package.describe({
  name: 'bdunnette:gridforms',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: 'https://github.com/bdunnette/meteor-gridforms'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.1');
  api.use('jquery');
  api.addFiles('gridforms/gridforms.js', 'client');
  api.addFiles('gridforms/gridforms.css', 'client');
});