Package.describe({
  name: 'bdunnette:gridforms',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('jquery');
  api.addFiles('gridforms/gridforms.js','client');
  api.addFiles('gridforms/gridforms.css','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bdunnette:gridforms');
  api.addFiles('bdunnette:gridforms-tests.js');
});
