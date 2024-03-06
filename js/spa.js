let currentPage = 'mainPage'


function replaceWindow(open){
    document.getElementById(currentPage).style.display = 'none'
    document.getElementById(open).style.display = 'block'
    currentPage = open;
}