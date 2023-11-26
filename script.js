function set_up(){
    // Complete nested loop of table size
    for (var i = 0; i < table_size; i++) {
        const row = document.createElement('tr');
        for (var j = 0; j < table_size; j++) {
            const col = document.createElement('td');
            col.innerText = '1';
            row.appendChild(col);

        }
        html_table.appendChild(row);
      }
}

function open_up(row, col){
    if (display[row][col] != board[row][col] && board[row][col] != 9){
        display[row][col] = board[row][col];
        table.rows[row].cells[col].innerText = board[row][col];
        for (var i = col-1; i < col+2; i++) {
            for (var j = row-1; j < row+2; j++){
                if (-1 < i < table_size && -1 < j < table_size){
                    open_up(i, j);
                }
            }
    }}
}

const html_table = document.getElementById('table');
const table_size = 12;
const board = [];
const display = [];


for (var i = 0; i < table_size; i++) {
    const boardrow = [];
    const displayrow = [];
    for (var j = 0; j < table_size; j++){
        boardrow.push(0)
        displayrow.push(' ');
    }}

set_up()