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

    // Create some entities
    // ----------------------------------
    var entities = {}; // object containing { id: entity  }
    var entity;

    // store reference to entities
    ECS.entities = entities;


    // Setup systems
    // ----------------------------------
    // Setup the array of systems. The order of the systems is likely critical,
    // so ensure the systems are iterated in the right order

    // Game loop
    // ----------------------------------
    function gameLoop (){
        // ECS.systems.moviment(ECS.entities);
        // ECS.systems.userInput(paddle);
        // ECS.systems.collision(ball, ECS.entities, paddle.id);
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
