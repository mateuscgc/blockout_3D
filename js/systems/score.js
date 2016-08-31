/* =========================================================================
 *
 * score.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Score
// --------------------------------------
ECS.systems.score = function ( entities ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity;

    function complete(h, entities) {
        ECS.base.cut_at(h);

        for( var entityId in entities ) {
            curEntity = entities[entityId];

            if(curEntity.components.position.vector.y == h*10 + 5) {
                delete entities[entityId];
                scene.remove(curEntity.components.appearance.obj);
            } else if(curEntity.components.position.vector.y > (h+1)*10) {
                curEntity.components.moviment.moving = true;
                curEntity.components.collision.collides = true;
            }
        }

        ECS.score += 25;
    }

    for(h = 0; h < ECS.base.D3.length; h++) {
        var i; for(i = 0; i < ECS.base.D3[h].length; i++) {
            var j; for(j = 0; j < ECS.base.D3[h][i].length; j++) {
                if(!ECS.base.D3[h][i][j]) break;
            }
            if(j < ECS.base.D3[h][i].length) break;
        }
        if(i >= ECS.base.D3[h].length) complete(h, entities);
    }

};
