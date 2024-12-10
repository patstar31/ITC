function computetax() {
    var taxinput, taxincome;
    taxinput = document.getElementById("inputValue").value * 1;
    console.log(taxinput);
  
    if (taxinput < 250000) {
      taxincome = taxinput * 0;
    } else if (taxinput >= 250000 && taxinput <= 400000) {
      taxincome = (taxinput - 250000) * 0.20;
    } else if (taxinput >= 400000 && taxinput <= 800000) {
      taxincome = (taxinput - 400000) * 0.25 + 30000;
    } else if (taxinput >= 800000 && taxinput <= 2000000) {
      taxincome = (taxinput - 800000) * 0.30 + 130000;
    } else if (taxinput >= 2000000 && taxinput <= 8000000) {
      taxincome = (taxinput - 2000000) * 0.32 + 490000;
    } else {
      taxincome = (taxinput - 8000000) * 0.35 + 2410000;
    }
    document.getElementById("taxoutput").innerHTML = 'Income tax is: ' + taxincome;
  }
  