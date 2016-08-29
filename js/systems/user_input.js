/* =========================================================================
 *
 * user_input.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - UserInput
// --------------------------------------
ECS.systems.userInput = function( obj ) {

    var tmp =   [[0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0],
                 [0,0,0,0,0]];

    var collides = false;
    for(i = 0; i < tmp.length; i++) {
        for(j = 0; j < tmp[i].length; j++) {
            if(obj.components.collision.matrix[i][j]) {
                if(i+dz < tmp.length && i+dz >= 0 && j+dx < tmp[i].length && j+dx >= 0)
                    tmp[i+dz][j+dx] = 1;
                else
                    collides = true;
            }
        }
    }

    for(r = 0; r < rt; r++)
        tmp = Helpers.rotate(tmp);

    if(!collides && !ECS.base.hit_ground(tmp, obj.components.position.vector.y)) {
        obj.components.collision.matrix = tmp;

        obj.components.position.update(tmp);

        obj.components.appearance.update(tmp);

    }

    dx = 0;
    dz = 0;
    rt = 0;

    return !collides;
};
