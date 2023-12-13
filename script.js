/*
//create container for tiles, checkerboard
let checkerboardStyles = {
    display = 'flex';
    flexWrap = 'wrap';
    height = '800px';
    width = '800px';
    backgroundColor = 'white';
}

//create tile object
let tileStylesRed = {
    width: '12.5%',
    height: '12.5%',
    backgroundColor: 'red'
}

let tileStylesBlack = {
    width: '12.5%',
    height: '12.5%',
    backgroundColor: 'black'
}
*/

const body = document.body;
let checkerboard = document.createElement('div');
    checkerboard.id = 'checkerboard';
    checkerboard.style.display = 'flex';
    checkerboard.style.flexWrap = 'wrap';
    checkerboard.style.height = '800px';
    checkerboard.style.width = '800px';
    checkerboard.style.backgroundColor = 'white';
document.body.appendChild(checkerboard);

//create the checkerboard board 8x8
//create container to store tiles (row of 8 tiles)
for (let row = 0; row < 8; row++) {
    let tileRow = document.createElement('div');
        tileRow.style.display = 'flex';
        tileRow.style.height = '12.5%';
        tileRow.style.width = '100%';
    //create each tile at row
    for (let tileAtRow = 0; tileAtRow < 8; tileAtRow++) {
        //let tile = document.createElement('tile');
        if (row % 2 === tileAtRow % 2) {
            let tile = document.createElement('div');
                tile.style.height = '100%';
                tile.style.width = '12.5%';
                tile.style.backgroundColor = 'red';
            tileRow.appendChild(tile);
        } else {
            tile = document.createElement('div');
                tile.style.height = '100%';
                tile.style.width = '12.5%';
                tile.style.backgroundColor = 'black';
            tileRow.appendChild(tile);
        }
        checkerboard.appendChild(tileRow);

    }
}
document.body.appendChild(checkerboard);
