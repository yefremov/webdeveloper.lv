// Load module config and analytics module.
define([ 'module', 'analytics' ], function ( module, analytics ) {
  // Initialize analytics.js with give config.
  analytics.initialize(module.config().analytics);
});
