//create container for tiles, checkerboard
let tileContainerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '800px',
    height: '800px'
}

//create tile object
let tileStyles = {
    width: '12.5%',
    height: '12.5%'
}

let checkerboard = document.createElement('checkerboard');
//create the checkerboard board 8x8
//create container to store tiles (row of 8 tiles)
for (let row = 0; row < 8; row++) {
    let tileContainer = document.createElement('tileContainer');
    //create each tile at row
    for (let tileAtRow = 0; tileAtRow < 8; tileAtRow++) {
        let tile = document.createElement('tile');
        if (row % 2 === tileAtRow % 2) {
            tile.className = 'red';
        } else {
            tile.className = 'black';
        }
        tileContainer.appendChild(tile);

    }
    //append each row when columns are completed in inner loop
    checkerboard.appendChild(tileContainer);
}
document.body.appendChild(checkerboard);
