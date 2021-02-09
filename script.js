let contador = document.getElementById('contador')
let count = 0

function adicionarCount() {
    count++
    contador.innerText = count
}
function removerCount() {
    if(count > 0) {
        count--
        contador.innerText = count
    }
}