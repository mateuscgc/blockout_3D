/* =========================================================================
 *
 * moviment.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Moviment
// --------------------------------------
ECS.systems.moviment = function ( entities ) {
    // Here, we've implemented systems as functions which take in an array of
    // entities. An optimization would be to have some layer which only
    // feeds in relevant entities to the system, but for demo purposes we'll
    // assume all entities are passed in and iterate over them.

    var curEntity;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        if( curEntity.components.moviment
            && curEntity.components.moviment.moving ) {

            now = (new Date()).getTime();
            if(now - curEntity.components.moviment.last_move > 1000) {
                curEntity.components.position.vector.add(new THREE.Vector3(0, -10, 0));
                curEntity.components.moviment.last_move = now;
            }
        }
    }
};
