/* =========================================================================
 *
 * game.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */
ECS.Game = function() {
    // This is our "main" function which controls everything. We setup the
    // systems to loop over, setup entities, and setup and kick off the game
    // loop.
    var self = this;

    ECS.base = new ECS.Base();

    // Create some entities
    // ----------------------------------
    var entities = {}; // object containing { id: entity  }
    var entity;

        // entity = new ECS.Assemblages.D2({
    //             matrix: [[0,0,0,0,0],
    //                      [0,0,0,0,0],
    //                      [0,0,0,0,0],
    //                      [1,1,0,0,0],
    //                      [1,1,0,0,0]] });
    // entity.components.position.vector.setY(25);
    // entities[entity.id] = entity;

    entity = new ECS.Assemblages.D2({
                matrix: [[0,0,0,0,0],
                         [0,0,0,0,0],
                         [0,0,1,1,1],
                         [0,0,0,0,0],
                         [0,0,0,0,0]] });
    entity.components.position.vector.setY(45);
    entities[entity.id] = entity;

    // entity = new ECS.Assemblages.D2({
    //             matrix: [[0,0,0,1,1],
    //                      [0,0,0,1,1],
    //                      [0,0,0,1,1],
    //                      [0,0,0,0,0],
    //                      [0,0,0,0,0]] });
    // entity.components.position.vector.setY(65);
    // entities[entity.id] = entity;

    // entity = new ECS.Assemblages.D2({
    //             matrix: [[0,0,0,0,0],
    //                      [1,1,1,1,1],
    //                      [0,0,0,0,0],
    //                      [0,0,0,0,0],
    //                      [0,0,0,0,0]] });
    // entity.components.position.vector.setY(95);
    // entities[entity.id] = entity;

    entity = new ECS.Assemblages.D2({
                matrix: [[0,0,0,0,0],
                         [0,0,0,0,0],
                         [0,0,1,0,0],
                         [0,0,1,0,0],
                         [0,1,1,0,0]] });
    entities[entity.id] = entity;




    // store reference to entities
    ECS.entities = entities;


    // Setup systems
    // ----------------------------------
    // Setup the array of systems. The order of the systems is likely critical,
    // so ensure the systems are iterated in the right order

    // Game loop
    // ----------------------------------
    function gameLoop (){
        ECS.systems.collision(ECS.entities);
        ECS.systems.userInput(entity);
        ECS.systems.moviment(ECS.entities);
        // ECS.systems.playerLosesLife( paddle, ball);
        // ECS.systems.life(ECS.entities, paddle);
        ECS.systems.render(ECS.entities);
        // ECS.systems.renderGUI(paddle);

        // continue the loop
        if(self._running !== false){
            requestAnimationFrame(gameLoop);
        }
    }
    // Kick off the game loop
    requestAnimationFrame(gameLoop);

    this._running = true;

    this.endGame = function endGame( player, result ){
        self._running = false;
    };

    return this;
};

// Kick off the game
ECS.game = new ECS.Game();
