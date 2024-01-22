const docReady = function(func) {
  // https://stackoverflow.com/a/9899701
    // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(func, 1);
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
};

docReady(() => {

  // // dropdown
  // const dropdown = document.getElementById('toc-dropdown');
  // dropdown.addEventListener('change', e => {
  //   window.location.href = e.target.value;
  // });


  // shade lecture background
  const lectures = document.querySelectorAll('.lecture'),
    now = new Date();

  lectures.forEach(element => {
    const lectureDate = element.getAttribute('data-date'),
      dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hours: 'numeric',
        minutes: 'numeric',
        timeZone: 'pst'
      },
      d = new Date(`${ lectureDate }T17:00:00.0000-08:00`);
      if (d <= now) {
        element.classList.add('passed');
      }
    
  });



});