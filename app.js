  // gclid parsing from url
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("?");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      if(pair[0] == variable) {
        return pair[1];
      }
    }
    return(false);
  }
  window.onload = function getGclid() {
    var value = getQueryVariable("gclid");
    var e = document.getElementById("gclid");
    e.value = value;
  }
  
  // post to spreadsheets
    const scriptURL = 'YOUR_SCRIPT_URL_GOES_HERE'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })

    // hamburger animation

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
