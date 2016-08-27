/* =========================================================================
 *
 * render.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - Render
// --------------------------------------
ECS.systems.render = function ( entities ) {

    var curEntity;

    // iterate over all entities
    for( var entityId in entities ) {
        curEntity = entities[entityId];

        // Only run logic if entity has relevant components
        //
        // For rendering, we need appearance and position. Your own render
        // system would use whatever other components specific for your game
        if( curEntity.components.appearance
            && curEntity.components.appearance.visible
            && curEntity.components.position ){

            curEntity.components.appearance.mesh.position.copy( curEntity.components.position.vector );
        } else {
            curEntity.components.appearance.mesh.position.set( -200, -200, -200 );
        }
    }

    renderer.clear();
    renderer.setViewport(0, 0, height, height);
    renderer.setScissor(0, 0, height, height);
    renderer.setScissorTest(true);

    renderer.render(scene, p_camera);

    renderer.setViewport(height, 0, height, height);
    renderer.setScissor(height, 0, height, height);
    renderer.setScissorTest(true);

    renderer.render(scene, o_camera);
};


// view = views[ii];
// camera = view.camera;

// view.updateCamera( camera, scene, mouseX, mouseY );

// var left   = Math.floor( windowWidth  * view.left );
// var bottom = Math.floor( windowHeight * view.bottom );
// var width  = Math.floor( windowWidth  * view.width );
// var height = Math.floor( windowHeight * view.height );
// renderer.setViewport( left, bottom, width, height );
// renderer.setScissor( left, bottom, width, height );
// renderer.setScissorTest( true );
// renderer.setClearColor( view.background );
