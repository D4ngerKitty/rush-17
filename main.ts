namespace SpriteKind {
    export const shooter1 = SpriteKind.create()
    export const shotter2 = SpriteKind.create()
    export const sgooter3 = SpriteKind.create()
    export const shotter4 = SpriteKind.create()
    export const totem = SpriteKind.create()
    export const retrush = SpriteKind.create()
    export const shooter5 = SpriteKind.create()
    export const shooter6 = SpriteKind.create()
    export const shoooter7 = SpriteKind.create()
    export const shooter8 = SpriteKind.create()
    export const food2 = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const p2 = SpriteKind.create()
    export const nulls = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.food2, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    for (let value of tiles.getTilesByType(assets.tile`myTile37`)) {
        tiles.setTileAt(value, assets.tile`myTile24`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
        tiles.setTileAt(value, assets.tile`myTile`)
        tiles.setWallAt(value, false)
    }
})
function Maketileswall2 (myImage: Image) {
    for (let value of tiles.getTilesByType(myImage)) {
        tiles.setWallAt(value, false)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (twoplayer) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile26`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
scene.onOverlapTile(SpriteKind.p2, sprites.dungeon.hazardLava1, function (sprite, location) {
    if (twoplayer) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile26`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile44`)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.p2, function (sprite, otherSprite) {
    if (twoplayer) {
        P2lockredred = true
        for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
            mySprite = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
            mySprite = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
            mySprite = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 . . . . . . . . . . . . 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
    } else {
        sprites.destroy(sprite)
        for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
            tiles.setTileAt(value, assets.tile`myTile24`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
            tiles.setTileAt(value, assets.tile`myTile42`)
            tiles.setWallAt(value, false)
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    if (twoplayer) {
        if (!(ai)) {
            if (dashing2p) {
                player3.vx = 0
                player3.vy = 0
                dashing2p = false
            }
        }
    }
})
function playelvel () {
    p1unlockred = false
    if (!(list_2.length == 0)) {
        if (levelsall) {
            tilemap2 = list.removeAt(list.indexOf(list._pickRandom()))
        } else {
            tilemap2 = list_2.removeAt(list_2.indexOf(list_2._pickRandom()))
        }
        start_the_level()
        for (let value of tiles.getTilesByType(assets.tile`myTile51`)) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . 5 5 5 5 5 . . . . . . 
                . . . . . . 5 5 5 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.coin)
            tiles.placeOnRandomTile(mySprite2, assets.tile`myTile51`)
            animation.runMovementAnimation(
            mySprite2,
            animation.animationPresets(animation.bobbing),
            2000,
            true
            )
        }
    } else {
        timer.background(function () {
            info.pauseCountup()
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverScoringType(game.ScoringType.LowScore)
            info.setScore(info.getTimeElapsed())
            game.setGameOverMessage(true, "You won with a time of " + info.getTimeElapsed())
            game.gameOver(true)
        })
    }
}
scene.onPathCompletion(SpriteKind.p2, function (sprite, location) {
    keystuff = false
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        iastuff = scene.aStar(location, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
        iastuff = scene.aStar(location, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile31`)) {
        iastuff = scene.aStar(location, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile47`)) {
        iastuff = scene.aStar(location, value)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile31`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p1_rounds_won += 1
        textSprite.setText("" + p1_rounds_won + "/" + cats)
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (dashing) {
        player2.vx = 0
        player2.vy = 0
        dashing = false
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(dashing)) {
        dashing = true
        if (rightleftupdwon == 1) {
            player2.vy = -300
        } else if (rightleftupdwon == 2) {
            player2.vy = 300
        } else if (rightleftupdwon == 3) {
            player2.vx = 300
        } else if (rightleftupdwon == 4) {
            player2.vx = -300
        }
        timer.after(600, function () {
            if (dashing) {
                player2.vx = 0
                player2.vy = 0
                dashing = false
            }
        })
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (twoplayer) {
        if (!(ai)) {
            if (!(dashing2p)) {
                dashing2p = true
                if (p2leftright == 1) {
                    player3.vy = -300
                } else if (p2leftright == 2) {
                    player3.vy = 300
                } else if (p2leftright == 3) {
                    player3.vx = 300
                } else if (p2leftright == 4) {
                    player3.vx = -300
                }
                timer.after(600, function () {
                    if (dashing2p) {
                        player3.vx = 0
                        player3.vy = 0
                        dashing2p = false
                    }
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (twoplayer) {
        tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
        tiles.placeOnRandomTile(player2, assets.tile`myTile26`)
        tiles.placeOnRandomTile(player2, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
sprites.onOverlap(SpriteKind.coin, SpriteKind.p2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.changeDataNumberBy(otherSprite, "coins", 1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p1_rounds_won += 1
        textSprite.setText("" + p1_rounds_won + "/" + cats)
    }
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile31`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p2_rounds_won += 1
        textp2.setText("" + p2_rounds_won + "/" + cats)
    }
})
sprites.onOverlap(SpriteKind.food2, SpriteKind.p2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    for (let value of tiles.getTilesByType(assets.tile`myTile37`)) {
        tiles.setTileAt(value, assets.tile`myTile24`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
        tiles.setTileAt(value, assets.tile`myTile`)
        tiles.setWallAt(value, false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.p2, function (sprite, otherSprite) {
    if (twoplayer) {
        tiles.placeOnRandomTile(player3, assets.tile`myTile1`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile26`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    if (twoplayer) {
        tiles.placeOnRandomTile(sprite, assets.tile`myTile1`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile26`)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p1_rounds_won += 1
        textSprite.setText("" + p1_rounds_won + "/" + cats)
    }
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile18`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p2_rounds_won += 1
        textp2.setText("" + p2_rounds_won + "/" + cats)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    if (twoplayer) {
        p1unlockred = true
        for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
            mySprite = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
            mySprite = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
            mySprite = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 . . . . . . . . . . . . 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.nulls)
            tiles.placeOnTile(mySprite, value)
            mySprite.lifespan = 400
        }
    } else {
        sprites.destroy(sprite)
        for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
            tiles.setTileAt(value, assets.tile`myTile`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
            tiles.setTileAt(value, assets.tile`myTile24`)
            tiles.setWallAt(value, false)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
            tiles.setTileAt(value, assets.tile`myTile42`)
            tiles.setWallAt(value, false)
        }
    }
})
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile3`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p2_rounds_won += 1
        textp2.setText("" + p2_rounds_won + "/" + cats)
    }
})
sprites.onOverlap(SpriteKind.coin, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.changeDataNumberBy(otherSprite, "coins", 1)
})
function start_the_level () {
    p1unlockred = false
    P2lockredred = false
    level_end = true
    sprites.destroyAllSpritesOfKind(SpriteKind.food2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.shooter1)
    sprites.destroyAllSpritesOfKind(SpriteKind.coin)
    sprites.destroyAllSpritesOfKind(SpriteKind.shotter2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.sgooter3)
    sprites.destroyAllSpritesOfKind(SpriteKind.shotter4)
    sprites.destroyAllSpritesOfKind(SpriteKind.totem)
    sprites.destroyAllSpritesOfKind(SpriteKind.retrush)
    sprites.destroyAllSpritesOfKind(SpriteKind.shooter5)
    sprites.destroyAllSpritesOfKind(SpriteKind.shooter6)
    sprites.destroyAllSpritesOfKind(SpriteKind.shoooter7)
    sprites.destroyAllSpritesOfKind(SpriteKind.shooter8)
    tiles.destroySpritesOfKind(SpriteKind.Projectile)
    dashing = false
    player2.vx = 0
    player2.vy = 0
    dashing = false
    if (twoplayer) {
        tiles.setCurrentTilemap(tileUtil.cloneMap(tilemap2))
        tiles.placeOnRandomTile(player3, assets.tile`myTile1`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile26`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile44`)
        if (ai) {
            keystuff = false
            Maketileswall(assets.tile`transparency16`)
            Maketileswall(assets.tile`myTile13`)
            Maketileswall(assets.tile`myTile13`)
            Maketileswall(sprites.dungeon.hazardLava1)
            Maketileswall(sprites.dungeon.hazardLava0)
            Maketileswall2(assets.tile`myTile11`)
            Maketileswall2(assets.tile`myTile9`)
            Maketileswall2(assets.tile`myTile35`)
            Maketileswall2(assets.tile`myTile49`)
            for (let value of tiles.getTilesByType(assets.tile`myTile46`)) {
                keystuff = true
                key = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
                keystuff = true
                key = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
                keystuff = true
                key = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile18`)) {
                iastuff = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
                iastuff = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile31`)) {
                iastuff = scene.aStar(player3.tilemapLocation(), value)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile47`)) {
                iastuff = scene.aStar(player3.tilemapLocation(), value)
            }
        }
    }
    tiles.setCurrentTilemap(tileUtil.cloneMap(tilemap2))
    tileUtil.coverAllTiles(assets.tile`myTile51`, assets.tile`myTile42`)
    tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
    tileUtil.coverAllTiles(assets.tile`myTile1`, assets.tile`myTile`)
    tiles.placeOnRandomTile(player2, assets.tile`myTile26`)
    tileUtil.coverAllTiles(assets.tile`myTile26`, assets.tile`myTile24`)
    tiles.placeOnRandomTile(player2, assets.tile`myTile44`)
    tileUtil.coverAllTiles(assets.tile`myTile44`, assets.tile`myTile42`)
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tileUtil.coverAllTiles(assets.tile`myTile10`, assets.tile`myTile`)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile10`)
        animation.runMovementAnimation(
        mySprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile34`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tileUtil.coverAllTiles(assets.tile`myTile34`, assets.tile`myTile24`)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile34`)
        animation.runMovementAnimation(
        mySprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 . . . 8 8 . . . . . 
            . . . . 8 8 8 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 8 . . . . . . . 
            . . . . . . . 8 8 . . . . . . . 
            . . . . . . 8 8 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.food2)
        tileUtil.coverAllTiles(assets.tile`myTile36`, assets.tile`myTile24`)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile36`)
        animation.runMovementAnimation(
        mySprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile46`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 . . . 2 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . . . . . 2 2 2 2 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 2 . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 2 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tileUtil.coverAllTiles(assets.tile`myTile46`, assets.tile`myTile42`)
        tiles.placeOnRandomTile(mySprite2, assets.tile`myTile46`)
        animation.runMovementAnimation(
        mySprite2,
        animation.animationPresets(animation.bobbing),
        2000,
        true
        )
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        mySprite2 = sprites.create(assets.tile`myTile8`, SpriteKind.shooter1)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        mySprite2 = sprites.create(assets.tile`myTile12`, SpriteKind.shotter2)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        mySprite2 = sprites.create(assets.tile`myTile14`, SpriteKind.sgooter3)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile17`)) {
        mySprite2 = sprites.create(assets.tile`myTile17`, SpriteKind.shotter4)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile19`)) {
        mySprite2 = sprites.create(assets.tile`myTile19`, SpriteKind.totem)
        tiles.placeOnTile(mySprite2, value)
        sprites.setDataSprite(mySprite2, "Rat", sprites.create(img`
            ..................................................
            ...................2222222222222..................
            ................222.............222...............
            ..............22...................22.............
            ............22.......................22...........
            ...........2...........................2..........
            ..........2.............................2.........
            .........2...............................2........
            ........2.................................2.......
            .......2...................................2......
            ......2.....................................2.....
            .....2.......................................2....
            .....2.......................................2....
            ....2.........................................2...
            ....2.........................................2...
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ....2.........................................2...
            ....2.........................................2...
            .....2.......................................2....
            .....2.......................................2....
            ......2.....................................2.....
            .......2...................................2......
            ........2.................................2.......
            .........2...............................2........
            ..........2.............................2.........
            ...........2...........................2..........
            ............22.......................22...........
            ..............22...................22.............
            ................222.............222...............
            ...................2222222222222..................
            ..................................................
            ..................................................
            `, SpriteKind.retrush))
        tiles.placeOnTile(sprites.readDataSprite(mySprite2, "Rat"), value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile30`)) {
        mySprite2 = sprites.create(assets.tile`myTile19`, SpriteKind.totem)
        tiles.placeOnTile(mySprite2, value)
        sprites.setDataSprite(mySprite2, "Rat", sprites.create(img`
            ..................................................
            ...................2222222222222..................
            ................222.............222...............
            ..............22...................22.............
            ............22.......................22...........
            ...........2...........................2..........
            ..........2.............................2.........
            .........2...............................2........
            ........2.................................2.......
            .......2...................................2......
            ......2.....................................2.....
            .....2.......................................2....
            .....2.......................................2....
            ....2.........................................2...
            ....2.........................................2...
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ....2.........................................2...
            ....2.........................................2...
            .....2.......................................2....
            .....2.......................................2....
            ......2.....................................2.....
            .......2...................................2......
            ........2.................................2.......
            .........2...............................2........
            ..........2.............................2.........
            ...........2...........................2..........
            ............22.......................22...........
            ..............22...................22.............
            ................222.............222...............
            ...................2222222222222..................
            ..................................................
            ..................................................
            `, SpriteKind.retrush))
        tiles.placeOnTile(sprites.readDataSprite(mySprite2, "Rat"), value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile45`)) {
        mySprite2 = sprites.create(assets.tile`myTile19`, SpriteKind.totem)
        tiles.placeOnTile(mySprite2, value)
        sprites.setDataSprite(mySprite2, "Rat", sprites.create(img`
            ..................................................
            ...................2222222222222..................
            ................222.............222...............
            ..............22...................22.............
            ............22.......................22...........
            ...........2...........................2..........
            ..........2.............................2.........
            .........2...............................2........
            ........2.................................2.......
            .......2...................................2......
            ......2.....................................2.....
            .....2.......................................2....
            .....2.......................................2....
            ....2.........................................2...
            ....2.........................................2...
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ..2.............................................2.
            ...2...........................................2..
            ...2...........................................2..
            ...2...........................................2..
            ....2.........................................2...
            ....2.........................................2...
            .....2.......................................2....
            .....2.......................................2....
            ......2.....................................2.....
            .......2...................................2......
            ........2.................................2.......
            .........2...............................2........
            ..........2.............................2.........
            ...........2...........................2..........
            ............22.......................22...........
            ..............22...................22.............
            ................222.............222...............
            ...................2222222222222..................
            ..................................................
            ..................................................
            `, SpriteKind.retrush))
        tiles.placeOnTile(sprites.readDataSprite(mySprite2, "Rat"), value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile27`)) {
        mySprite2 = sprites.create(assets.tile`myTile27`, SpriteKind.shooter5)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile29`)) {
        mySprite2 = sprites.create(assets.tile`myTile29`, SpriteKind.shooter6)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
        mySprite2 = sprites.create(assets.tile`myTile32`, SpriteKind.shoooter7)
        tiles.placeOnTile(mySprite2, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
        mySprite2 = sprites.create(assets.tile`myTile33`, SpriteKind.shooter8)
        tiles.placeOnTile(mySprite2, value)
    }
    tileUtil.coverAllTiles(assets.tile`myTile8`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile12`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile14`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile17`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile16`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile27`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile29`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile32`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile33`, assets.tile`myTile9`)
    tileUtil.coverAllTiles(assets.tile`myTile19`, assets.tile`myTile`)
    tileUtil.coverAllTiles(assets.tile`myTile30`, assets.tile`myTile24`)
    tileUtil.coverAllTiles(assets.tile`myTile45`, assets.tile`myTile42`)
    timer.after(10, function () {
        level_end = false
    })
}
function Maketileswall (myImage: Image) {
    for (let value of tiles.getTilesByType(myImage)) {
        tiles.setWallAt(value, true)
    }
}
scene.onOverlapTile(SpriteKind.p2, assets.tile`myTile47`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p2_rounds_won += 1
        textp2.setText("" + p2_rounds_won + "/" + cats)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile47`, function (sprite, location) {
    playelvel()
    if (twoplayer) {
        p1_rounds_won += 1
        textSprite.setText("" + p1_rounds_won + "/" + cats)
    }
})
sprites.onOverlap(SpriteKind.totem, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    if (twoplayer) {
        tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
        tiles.placeOnRandomTile(player2, assets.tile`myTile26`)
        tiles.placeOnRandomTile(player2, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
sprites.onOverlap(SpriteKind.totem, SpriteKind.p2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    if (twoplayer) {
        tiles.placeOnRandomTile(player3, assets.tile`myTile1`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile26`)
        tiles.placeOnRandomTile(player3, assets.tile`myTile44`)
    } else {
        start_the_level()
    }
})
let projectile: Sprite = null
let key: tiles.Location[] = []
let p2leftright = 0
let rightleftupdwon = 0
let iastuff: tiles.Location[] = []
let keystuff = false
let mySprite2: Sprite = null
let p1unlockred = false
let dashing2p = false
let mySprite: Sprite = null
let P2lockredred = false
let level_end = false
let p2_rounds_won = 0
let textp2: TextSprite = null
let p1_rounds_won = 0
let textSprite: TextSprite = null
let player3: Sprite = null
let dashing = false
let tilemap2: tiles.TileMapData = null
let player2: Sprite = null
let cats = 0
let list_2: tiles.TileMapData[] = []
let levelsall = false
let list: tiles.TileMapData[] = []
let ai = false
let twoplayer = false
twoplayer = true
ai = false
list = [
tilemap`level1`,
tilemap`level13`,
tilemap`level14`,
tilemap`level30`,
tilemap`level31`,
tilemap`level32`,
tilemap`level34`,
tilemap`level35`,
tilemap`level37`,
tilemap`level52`,
tilemap`level91`,
tilemap`level53`,
tilemap`level54`,
tilemap`level43`,
tilemap`level50`,
tilemap`level55`,
tilemap`level56`,
tilemap`level38`,
tilemap`level61`,
tilemap`level57`,
tilemap`level60`,
tilemap`level59`,
tilemap`level67`,
tilemap`level62`,
tilemap`level66`,
tilemap`level58`,
tilemap`level68`,
tilemap`level74`,
tilemap`level73`,
tilemap`level72`,
tilemap`level51`,
tilemap`level79`,
tilemap`level80`,
tilemap`level77`,
tilemap`level71`,
tilemap`level70`,
tilemap`level109`,
tilemap`level111`,
tilemap`level158`,
tilemap`level162`
]
if (false) {
    tiles.setCurrentTilemap(tilemap`level155`)
}
levelsall = false
if (!(levelsall)) {
    list_2 = [
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom())),
    list.removeAt(list.indexOf(list._pickRandom()))
    ]
} else {
    list_2 = list
}
cats = list_2.length
player2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
sprites.setDataNumber(player2, "coins", 0)
tilemap2 = tilemap`level63`
controller.moveSprite(player2)
dashing = false
scene.cameraFollowSprite(player2)
if (twoplayer) {
    player3 = sprites.create(img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        `, SpriteKind.p2)
    controller.player2.moveSprite(player3, 100, 100)
    textSprite = textsprite.create("" + p1_rounds_won + "/" + cats)
    textSprite.z = 22
    sprites.setDataNumber(player3, "coins", 0)
    textSprite.setPosition(120, 6)
    textSprite.setOutline(1, 2)
    textp2 = textsprite.create("" + p2_rounds_won + "/" + cats)
    textp2.z = 22
    textp2.setPosition(200, 6)
    textp2.setOutline(1, 8)
}
playelvel()
info.startCountup(true)
level_end = false
p1_rounds_won = 0
p2_rounds_won = 0
forever(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
        if (player2.tilemapLocation().row == value.row && player2.tilemapLocation().column == value.column) {
            timer.background(function () {
                if (!(level_end)) {
                    tiles.setTileAt(value, assets.tile`myTile39`)
                    if (!(level_end)) {
                        for (let index = 0; index < 50; index++) {
                            if (!(level_end)) {
                                pause(1)
                            }
                        }
                        if (!(level_end)) {
                            tiles.setTileAt(value, assets.tile`myTile41`)
                            if (!(level_end)) {
                                for (let index = 0; index < 50; index++) {
                                    if (!(level_end)) {
                                        pause(1)
                                    }
                                }
                                if (!(level_end)) {
                                    tiles.setTileAt(value, assets.tile`transparency16`)
                                }
                            }
                        }
                    }
                }
            })
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile38`)) {
        if (player3.tilemapLocation().row == value.row && player3.tilemapLocation().column == value.column) {
            timer.background(function () {
                if (!(level_end)) {
                    tiles.setTileAt(value, assets.tile`myTile39`)
                    if (!(level_end)) {
                        for (let index = 0; index < 50; index++) {
                            if (!(level_end)) {
                                pause(1)
                            }
                        }
                        if (!(level_end)) {
                            tiles.setTileAt(value, assets.tile`myTile41`)
                            if (!(level_end)) {
                                for (let index = 0; index < 50; index++) {
                                    if (!(level_end)) {
                                        pause(1)
                                    }
                                }
                                if (!(level_end)) {
                                    tiles.setTileAt(value, assets.tile`transparency16`)
                                }
                            }
                        }
                    }
                }
            })
        }
    }
})
forever(function () {
    if (twoplayer) {
        if (dashing2p) {
            controller.player2.moveSprite(player3, 0, 0)
            if (p2leftright == 1) {
                player3.vy = -300
            } else if (p2leftright == 2) {
                player3.vy = 300
            } else if (p2leftright == 3) {
                player3.vx = 300
            } else if (p2leftright == 4) {
                player3.vx = -300
            }
            player3.setImage(img`
                b b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b f f b b b b f f b b b b 
                b b b b f f b b b b f f b b b b 
                b b b b f f b b b b f f b b b b 
                b b b b f f b b b b f f b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b b b b f f b b b b b b b 
                b b b b f b b f f b b f b b b b 
                b b b b b f f b b f f b b b b b 
                b b b b b f f b b f f b b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b b 
                b b b b b b b b b b b b b b b b 
                `)
        } else {
            if (sprites.readDataNumber(player3, "coins") == 0) {
                controller.player2.moveSprite(player3, 100, 100)
            } else if (sprites.readDataNumber(player3, "coins") == 1) {
                controller.player2.moveSprite(player3, 110, 110)
            } else if (sprites.readDataNumber(player3, "coins") == 2) {
                controller.player2.moveSprite(player3, 120, 120)
            } else if (sprites.readDataNumber(player3, "coins") == 3) {
                controller.player2.moveSprite(player3, 130, 130)
            } else if (sprites.readDataNumber(player3, "coins") == 4) {
                controller.player2.moveSprite(player3, 140, 140)
            } else {
                controller.player2.moveSprite(player3, 150, 150)
            }
            player3.setImage(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 f f 8 8 8 8 f f 8 8 8 8 
                8 8 8 8 f f 8 8 8 8 f f 8 8 8 8 
                8 8 8 8 f f 8 8 8 8 f f 8 8 8 8 
                8 8 8 8 f f 8 8 8 8 f f 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 f f 8 8 8 8 8 8 8 
                8 8 8 8 f 8 8 f f 8 8 f 8 8 8 8 
                8 8 8 8 8 f f 8 8 f f 8 8 8 8 8 
                8 8 8 8 8 f f 8 8 f f 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                `)
            if (player3.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
                if (twoplayer) {
                    tiles.placeOnRandomTile(player3, assets.tile`myTile1`)
                    tiles.placeOnRandomTile(player3, assets.tile`myTile26`)
                    tiles.placeOnRandomTile(player3, assets.tile`myTile44`)
                } else {
                    start_the_level()
                }
            }
            if (player3.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
                if (p2leftright == 1) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
                } else if (p2leftright == 2) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
                } else if (p2leftright == 3) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
                } else if (p2leftright == 4) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
                }
            }
            if (tiles.tileAtLocationIsWall(player3.tilemapLocation())) {
                if (twoplayer) {
                    tiles.placeOnRandomTile(player3, assets.tile`myTile1`)
                    tiles.placeOnRandomTile(player3, assets.tile`myTile26`)
                    tiles.placeOnRandomTile(player3, assets.tile`myTile44`)
                } else {
                    start_the_level()
                }
            }
            if (ai) {
                if (!(scene.spriteIsFollowingPath(player3))) {
                    if (keystuff) {
                        scene.followPath(player3, key, 100)
                    } else {
                        scene.followPath(player3, iastuff, 100)
                    }
                }
            }
        }
    }
})
forever(function () {
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.shotter2)) {
            if (!(level_end)) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, 100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
                for (let index = 0; index < 20; index++) {
                    if (!(level_end)) {
                        pause(1)
                    }
                }
            }
        }
    })
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.shotter4)) {
            if (!(level_end)) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
                for (let index = 0; index < 20; index++) {
                    if (!(level_end)) {
                        pause(1)
                    }
                }
            }
        }
    })
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.sgooter3)) {
            if (!(level_end)) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, -100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
                for (let index = 0; index < 20; index++) {
                    if (!(level_end)) {
                        pause(1)
                    }
                }
            }
        }
    })
    timer.background(function () {
        for (let value of sprites.allOfKind(SpriteKind.shooter1)) {
            if (!(level_end)) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, -100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
                for (let index = 0; index < 20; index++) {
                    if (!(level_end)) {
                        pause(1)
                    }
                }
            }
        }
    })
    pause(2000)
})
forever(function () {
    if (player2.tileKindAt(TileDirection.Center, assets.tile`myTile28`)) {
        for (let value of sprites.allOfKind(SpriteKind.shooter8)) {
            if (player2.tilemapLocation().column == value.tilemapLocation().column) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, 100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shoooter7)) {
            if (player2.tilemapLocation().row == value.tilemapLocation().row) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shooter5)) {
            if (player2.tilemapLocation().row == value.tilemapLocation().row) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, -100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shooter6)) {
            if (player2.tilemapLocation().column == value.tilemapLocation().column) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, -100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
    }
    if (player3.tileKindAt(TileDirection.Center, assets.tile`myTile28`)) {
        for (let value of sprites.allOfKind(SpriteKind.shooter8)) {
            if (player3.tilemapLocation().column == value.tilemapLocation().column) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, 100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shoooter7)) {
            if (player3.tilemapLocation().row == value.tilemapLocation().row) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . c c . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shooter5)) {
            if (player3.tilemapLocation().row == value.tilemapLocation().row) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . c c . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, -100, 0)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
        for (let value of sprites.allOfKind(SpriteKind.shooter6)) {
            if (player3.tilemapLocation().column == value.tilemapLocation().column) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . c c . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value, 0, -100)
                animation.runMovementAnimation(
                value,
                animation.animationPresets(animation.shake),
                500,
                false
                )
            }
        }
    }
    for (let value of spriteutils.getSpritesWithin(SpriteKind.totem, 30, player2)) {
        sprites.destroy(sprites.readDataSprite(value, "Rat"))
        value.follow(player2, 30)
    }
    if (twoplayer) {
        for (let value of spriteutils.getSpritesWithin(SpriteKind.totem, 30, player3)) {
            sprites.destroy(sprites.readDataSprite(value, "Rat"))
            value.follow(player3, 30)
        }
        for (let pro of sprites.allOfKind(SpriteKind.Projectile)) {
            for (let value of spriteutils.getSpritesWithin(SpriteKind.totem, 30, pro)) {
                sprites.destroy(sprites.readDataSprite(value, "Rat"))
                if (Math.percentChance(50)) {
                    value.follow(player2, 100)
                } else {
                    value.follow(player3, 100)
                }
            }
        }
    } else {
        for (let pro of sprites.allOfKind(SpriteKind.Projectile)) {
            for (let value of spriteutils.getSpritesWithin(SpriteKind.totem, 30, pro)) {
                sprites.destroy(sprites.readDataSprite(value, "Rat"))
                value.follow(player2, 100)
            }
        }
    }
    if (!(p1unlockred)) {
        if (player2.tileKindAt(TileDirection.Center, assets.tile`myTile11`) || (player2.tileKindAt(TileDirection.Center, assets.tile`myTile49`) || player2.tileKindAt(TileDirection.Center, assets.tile`myTile35`))) {
            if (rightleftupdwon == 1) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
            } else if (rightleftupdwon == 2) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
            } else if (rightleftupdwon == 3) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
            } else if (rightleftupdwon == 4) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
            }
        }
    }
    if (twoplayer) {
        if (!(P2lockredred)) {
            if (player3.tileKindAt(TileDirection.Center, assets.tile`myTile11`) || (player3.tileKindAt(TileDirection.Center, assets.tile`myTile49`) || player3.tileKindAt(TileDirection.Center, assets.tile`myTile35`))) {
                if (p2leftright == 1) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
                } else if (p2leftright == 2) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
                } else if (p2leftright == 3) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
                } else if (p2leftright == 4) {
                    tiles.placeOnTile(player3, player3.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
                }
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
        tiles.setTileAt(value, assets.tile`myTile9`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile49`)) {
        tiles.setTileAt(value, assets.tile`myTile49`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
        tiles.setTileAt(value, assets.tile`myTile35`)
        tiles.setWallAt(value, false)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
        tiles.setTileAt(value, assets.tile`myTile11`)
        tiles.setWallAt(value, false)
    }
})
game.onUpdate(function () {
    if (dashing) {
        controller.moveSprite(player2, 0, 0)
        if (rightleftupdwon == 1) {
            player2.vy = -300
        } else if (rightleftupdwon == 2) {
            player2.vy = 300
        } else if (rightleftupdwon == 3) {
            player2.vx = 300
        } else if (rightleftupdwon == 4) {
            player2.vx = -300
        }
        player2.setImage(img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b f f b b b b f f b b b b 
            b b b b f f b b b b f f b b b b 
            b b b b f f b b b b f f b b b b 
            b b b b f f b b b b f f b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b f f b b b b b b b 
            b b b b f b b f f b b f b b b b 
            b b b b b f f b b f f b b b b b 
            b b b b b f f b b f f b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            `)
    } else {
        if (sprites.readDataNumber(player2, "coins") == 0) {
            controller.moveSprite(player2, 100, 100)
        } else if (sprites.readDataNumber(player2, "coins") == 1) {
            controller.moveSprite(player2, 110, 110)
        } else if (sprites.readDataNumber(player2, "coins") == 2) {
            controller.moveSprite(player2, 120, 120)
        } else if (sprites.readDataNumber(player2, "coins") == 3) {
            controller.moveSprite(player2, 130, 130)
        } else if (sprites.readDataNumber(player2, "coins") == 4) {
            controller.moveSprite(player2, 140, 140)
        } else {
            controller.moveSprite(player2, 150, 150)
        }
        player2.setImage(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 f f 2 2 2 2 f f 2 2 2 2 
            2 2 2 2 f f 2 2 2 2 f f 2 2 2 2 
            2 2 2 2 f f 2 2 2 2 f f 2 2 2 2 
            2 2 2 2 f f 2 2 2 2 f f 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 
            2 2 2 2 f 2 2 f f 2 2 f 2 2 2 2 
            2 2 2 2 2 f f 2 2 f f 2 2 2 2 2 
            2 2 2 2 2 f f 2 2 f f 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `)
        if (player2.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
            if (twoplayer) {
                tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
                tiles.placeOnRandomTile(player2, assets.tile`myTile26`)
                tiles.placeOnRandomTile(player2, assets.tile`myTile44`)
            } else {
                start_the_level()
            }
        }
        if (player2.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
            if (rightleftupdwon == 1) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Bottom))
            } else if (rightleftupdwon == 2) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Top))
            } else if (rightleftupdwon == 3) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))
            } else if (rightleftupdwon == 4) {
                tiles.placeOnTile(player2, player2.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))
            }
        }
        if (tiles.tileAtLocationIsWall(player2.tilemapLocation())) {
            if (twoplayer) {
                tiles.placeOnRandomTile(player2, assets.tile`myTile1`)
                tiles.placeOnRandomTile(player2, assets.tile`myTile26`)
                tiles.placeOnRandomTile(player2, assets.tile`myTile44`)
            } else {
                start_the_level()
            }
        }
    }
})
forever(function () {
    if (!(dashing)) {
        if (controller.up.isPressed()) {
            rightleftupdwon = 1
        } else if (controller.down.isPressed()) {
            rightleftupdwon = 2
        } else if (controller.right.isPressed()) {
            rightleftupdwon = 3
        } else if (controller.left.isPressed()) {
            rightleftupdwon = 4
        }
    }
    if (!(dashing2p)) {
        if (controller.player2.isPressed(ControllerButton.Up)) {
            p2leftright = 1
        } else if (controller.player2.isPressed(ControllerButton.Down)) {
            p2leftright = 2
        } else if (controller.player2.isPressed(ControllerButton.Right)) {
            p2leftright = 3
        } else if (controller.player2.isPressed(ControllerButton.Left)) {
            p2leftright = 4
        }
    }
})
