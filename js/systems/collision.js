/* =========================================================================
 *
 * collision.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Collision
// --------------------------------------
ECS.systems.collision = function ( entities, curr ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        if( curEntity.components.collision
            && curEntity.components.collision.collides
            && ECS.base.hit_ground(curEntity.components.collision.matrix, curEntity.components.position.vector.y)) {

            ECS.base.update(curEntity.components.collision.matrix);

            curEntity.components.moviment.moving = false;
            curEntity.components.collision.collides = false;


            if(curEntity.components.position.vector.y >= 75)
                ECS.game.endGame( 'defeat' );
            if(curEntity == curr) ECS.new_obj = true;

        }
    }
};
