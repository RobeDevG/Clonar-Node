const modoDark = document.getElementById('modo-dark');


modoDark.addEventListener('change', () => {

   if(modoDark.checked == true ) {
    document.documentElement.setAttribute("data-theme","light");
   }
    else document.documentElement.setAttribute("data-theme","dark");
})

