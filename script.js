/* Array de objetos com algumas informações que sera consumidas */
const carros = [
    { Modelo: 'Fiesta', Montadora: 'Ford', Preço: 'R$ 11,000' },
    { Modelo: 'Megane', Montadora: 'Renault', Preço: 'R$ 23,900' },
    { Modelo: 'Compass', Montadora: 'Jeep', Preço: 'R$ 100,600' },
    { Modelo: 'Camaro', Montadora: 'Chevrolet', Preço: 'R$ 200,000' },
    { Modelo: 'HB20', Montadora: 'Hyundai', preço: 'R$ 50,000' }
]

const table = document.querySelector('.table') /* entra na DOM e seleciona o atributo table */
let data = Object.keys(carros[0]) /* pega as chaves do Objeto, passando por paramero o arrayde objeto Carro na posição 0 */

generateTableHead(table, data) /* chamada da função passando dois parametros */

/* Função que gera o cabeçalho da tabela */
function generateTableHead(table, data) { /* A função está recebendo dois parametros*/

    let thead = table.createTHead() /* entra na variavel table e cria um elemento header */
    let row = thead.insertRow() /* entra na  variavel thead e inseri uma linha  */

    for (let key of data) {
        let th = document.createElement('th') /* Entra na DOM e cria um elemento th */
        let text = document.createTextNode(key) /* Entra na DOM e cria um texto */
        th.appendChild(text) /* inseri um filho texto no elemento th */
        row.appendChild(th) /* inseri o elemento filho th na linha  */
    }

}

generateTable(table, carros)

/* Cria a estrutura da tabela com os valores  */
function generateTable(table, data) { /* A função esta recebendo dois paramentros */
    for (let element of data) {
        let row = table.insertRow() /* Entra na variavel table e insere uma linha */
        for (key in element) {
            let cell = row.insertCell() /* Entra na linha e cria uma celula */
            let text = document.createTextNode(element[key]) /* cria um texto com os valores da chave key */
            cell.appendChild(text) /* Inseri o text o na linha  */
        }
    }
}