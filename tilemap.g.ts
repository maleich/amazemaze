// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010203020202020202020202020303050102030203030302020303030303020101020303030203020203020202020201010202020302030303030303030301010102020207020202020202020202020101020202030202030303020303070201010202020303030302030203020303010102020202020202020302030202030101020303030303030303020302020301010203020202020202020203020303010102030202020303030303030203020101020303030303020202020202030201010203020202020203030303030302010102030307030403030202020203030601010101010101010101010101010202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 . . . 
2 2 . 2 . . . 2 2 . . . . . 2 2 
2 2 . . . 2 . 2 2 . 2 2 2 2 2 2 
2 2 2 2 . 2 . . . . . . . . 2 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 . . . 2 . . . 2 2 
2 2 2 2 . . . . 2 . 2 . 2 . . 2 
2 2 2 2 2 2 2 2 2 . 2 . 2 2 . 2 
2 2 . . . . . . . . 2 . 2 2 . 2 
2 2 . 2 2 2 2 2 2 2 2 . 2 . . 2 
2 2 . 2 2 2 . . . . . . 2 . 2 2 
2 2 . . . . . 2 2 2 2 2 2 . 2 2 
2 2 . 2 2 2 2 2 . . . . . . 2 2 
2 2 . . . . 2 . . 2 2 2 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.builtin.forestTiles8,sprites.castle.rock1,myTiles.tile1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
