scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    game.over(true, effects.confetti)
    music.powerUp.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    info.changeScoreBy(1)
    music.jumpUp.play()
    tiles.setTileAt(location, sprites.castle.tilePath5)
})
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 . . . . . . 
    . . . . 3 5 5 5 5 3 3 3 3 . . . 
    . . . . 3 5 5 5 5 5 5 5 3 . . . 
    . . . . 3 5 5 5 5 5 5 5 3 . . . 
    . . . 3 5 5 f 5 5 5 5 5 3 . . . 
    . . 4 4 5 5 5 5 5 5 5 5 3 . . . 
    . . 4 4 5 5 5 b 5 5 5 5 3 . . . 
    . . . 3 b b b b 5 5 5 3 . . . . 
    . . . 3 5 5 5 5 5 5 3 3 3 . . . 
    . . . 3 5 5 5 5 5 5 5 5 3 3 . . 
    . . 3 3 5 5 5 5 5 3 3 5 5 5 3 . 
    . . 3 5 5 5 5 5 3 3 3 3 5 5 3 . 
    . . 3 3 5 5 5 5 5 5 5 5 5 3 . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles8)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
mySprite.startEffect(effects.spray, 500)
