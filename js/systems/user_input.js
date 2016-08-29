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

    if(!collides) {
        obj.components.collision.matrix = tmp;

        var obj_center = Helpers.center(obj.components.collision.matrix);

        obj.components.position.vector.setX(obj_center.x);
        obj.components.position.vector.setZ(obj_center.z);
    }

    dx = 0;
    dz = 0;

    return !collides;
};
