javascript:(function(){
  var script = document.createElement('script');
  script.src = 'https://yamakoud.github.io/halidator/halidator.browser.js';
  script.onload = function() {
    console.log('Halidator loaded successfully.');
    if (typeof window.Halidator !== 'undefined') {
      var validator = window.Halidator.default || window.Halidator;
      if (typeof validator.validate === 'function') {
        validator.validate(document.documentElement.outerHTML).then(issues => {
          console.log('Validation issues:', issues);
          if (issues.length === 0) {
            console.log('No validation issues found.');
          } else {
            issues.forEach((issue, index) => {
              console.log(`Issue ${index + 1}:`);
              console.log(`Element: ${issue.element}`);
              console.log(`Message: ${issue.message}`);
              console.log('---');
            });
          }
        }).catch(error => {
          console.error('Validation error:', error);
        });
      } else {
        console.error('validate method not found on Halidator object');
      }
    } else {
      console.error('Halidator object not found. Make sure the library is loaded correctly.');
    }
  };
  script.onerror = function() {
    console.error('Failed to load Halidator script.');
  };
  document.head.appendChild(script);
})();