function mAtan2 (dy: number, dx: number) {
	
}
function clean_menu () {
    game_mode = menu_current_choice
    while (menu_item_list.length > 0) {
        menu_item_list.pop().destroy()
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == global_phase) {
        if (menu_current_choice > 0) {
            menu_current_choice += -1
            update_menu()
        }
    }
})
function set_missile_follow (spr: Sprite) {
    spr.follow(duck, 30)
}
function chooseMode (init_choice: number) {
    generate_menu(["Level 1", "Level 2", "Level 3"])
    menu_current_choice = init_choice
    update_menu()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == global_phase) {
        global_phase = 1
        clean_menu()
        initGame()
    }
})
function init_missile_graphics (count: number) {
    if (4 == count) {
        missile_graphics = [
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,
        img`
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
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,
        img`
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
            `
        ]
    } else if (8 == count) {
        missile_graphics = [
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,
        img`
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
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . . 1 1 . . . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,
        img`
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
            `
        ]
    } else {
        game.showLongText("Error on init_missile_graphics", DialogLayout.Bottom)
        game.over(false)
    }
}
function generate_menu (menu_items: any[]) {
    menu_item_list = []
    for (let index = 0; index <= menu_items.length - 1; index++) {
        textSprite = textsprite.create(menu_items[index])
        textSprite.setPosition(80, Math.map(index, 0, menu_items.length - 1, 30, 90))
        menu_item_list.push(textSprite)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.bubbles, 200)
})
function initGame () {
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
    missile_count = 0
    if (0 == game_mode) {
    	
    } else if (1 == game_mode) {
        missile_graphics_count = 4
        init_missile_graphics(1)
    } else {
        missile_graphics_count = 8
    }
}
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
function update_menu () {
    for (let value of menu_item_list) {
        value.setBorder(0, 6)
    }
    menu_item_list[menu_current_choice].setBorder(1, 6)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (0 == global_phase) {
        if (menu_current_choice < menu_item_list.length - 1) {
            menu_current_choice += 1
            update_menu()
        }
    }
})
function update_course () {
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.setImage(missile_graphics[2])
    }
}
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    missile_count += -1
})
let missile: Sprite = null
let missile_graphics_count = 0
let missile_count = 0
let textSprite: TextSprite = null
let missile_graphics: Image[] = []
let duck: Sprite = null
let menu_item_list: TextSprite[] = []
let menu_current_choice = 0
let game_mode = 0
let global_phase = 0
global_phase = 0
game_mode = 2
chooseMode(game_mode)
game.onUpdateInterval(500, function () {
    if (1 == global_phase) {
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
        update_course()
    }
})
