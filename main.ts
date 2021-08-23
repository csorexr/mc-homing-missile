function set_missile_follow (spr: Sprite) {
    spr.follow(duck, 30)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 200)
})
function set_to_edge (spr: Sprite) {
    if (Math.percentChance(50)) {
        if (Math.percentChance(50)) {
            spr.setPosition(20, randint(20, 100))
        } else {
            spr.setPosition(140, randint(20, 100))
        }
    } else {
        if (Math.percentChance(50)) {
            spr.setPosition(randint(20, 140), 15)
        } else {
            spr.setPosition(randint(20, 140), 105)
        }
    }
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    missile_count += -1
})
let missile: Sprite = null
let duck: Sprite = null
duck = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 4 b 
    b d d c d 5 5 b 5 4 4 4 4 4 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(duck)
duck.setStayInScreen(true)
let missile_count = 0
game.onUpdateInterval(500, function () {
    if (missile_count < 3) {
        missile = sprites.create(img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            `, SpriteKind.Projectile)
        set_to_edge(missile)
        set_missile_follow(missile)
        missile_count += 1
    }
})
