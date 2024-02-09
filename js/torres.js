let tipoAnterior = '';
function openNav(tipo) {   
    if(document.getElementById("mySidenav").style.height === "100%" && (tipoAnterior === tipo)){
        document.getElementById("mySidenav").style.height = "0";
        document.getElementById("logoMenu").style.display = "none";
        document.getElementById("logo").style.display = "block";
    }else{
        tipoAnterior = tipo;
        document.getElementById("mySidenav").style.height = "100%";
        document.getElementById("logoMenu").style.display = "block";
        document.getElementById("logo").style.display = "none";
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("logoMenu").style.display = "none";
    document.getElementById("logo").style.display = "block";
}