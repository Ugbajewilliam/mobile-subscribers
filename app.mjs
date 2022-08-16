function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');


  const carrierCode = document.getElementById('carrier_code');
  const logo = document.getElementById('logo');
  const resetButton = document.getElementById('reset');

  function reset() {
    carrierCode.value = ''
  }
  resetButton.addEventListener('click', reset)


  carrierCode.addEventListener('change', function(event) {
    if (event.target.value.length == 11) {
      let theValue = event.target.value.toString()
      let newValue = theValue.slice(0, 4)
      if (newValue == "0803" ||
        newValue == "0806" ||
        newValue == "0813" ||
        newValue == "0706" ||
        newValue == "0703" ||
        newValue == "0903" ||
        newValue == "0906" ||
        newValue == "0814" ||
        newValue == "0810" ||
        newValue == "0704" ||
        newValue == "0913"

      ) {
        logo.setAttribute("src", "MTNLOGO.png")
        return

      }

      if (newValue == "0802" ||
        newValue == "0812" ||
        newValue == "0808" ||
        newValue == "0701" ||
        newValue == "0901" ||
        newValue == "0708" ||
        newValue == "0902" ||
        newValue == "0907" ||
        newValue == "0902"
      ) {
        logo.setAttribute("src", "Airtel.png")
        return

      }
      if (newValue == "0805" ||
        newValue == "0807" ||
        newValue == "0811" ||
        newValue == "0905" ||
        newValue == "0815" ||
        newValue == "0915" ||
        newValue == "0705"
      ) {
        logo.setAttribute("src", "Glo.webp")
        return

      }
      if (newValue == "0809" ||
        newValue == "0909" ||
        newValue == "0817" ||
        newValue == "0818" ||
        newValue == "0908"
      ) {
        logo.setAttribute("src", "9mobile.jpeg")
        return

      }

    }
  })
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //