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

    var entity;

    function new_object() {
        var piece = ECS.pieces[Math.floor(Math.random()*((ECS.pieces.length-3)-0)+0)];
        var color = ECS.colors[Math.floor(Math.random()*ECS.colors.length)];

        var entity = new ECS.Assemblages.D2({
                            matrix: piece,
                            color: color
                        });
        ECS.entities[entity.id] = entity;
        return entity;
    }

    ECS.new_obj = true;

    // Setup systems
    // ----------------------------------
    // Setup the array of systems. The order of the systems is likely critical,
    // so ensure the systems are iterated in the right order

    // Game loop
    // ----------------------------------
    function gameLoop (){
        if(ECS.new_obj) {
            entity = new_object();
            ECS.new_obj = false;
        }

        ECS.systems.collision(ECS.entities, entity);
        ECS.systems.score(ECS.entities);
        ECS.systems.userInput(entity);
        ECS.systems.moviment(ECS.entities);
        ECS.systems.render(ECS.entities);
        ECS.systems.renderGUI();

        // continue the loop
        if(self._running !== false){
            requestAnimationFrame(gameLoop);
        }
    }
    // Kick off the game loop
    requestAnimationFrame(gameLoop);

    this._running = true;

    this.endGame = function endGame( result ){
        self._running = false;

        resultsGUI = document.getElementById('final_results');
        document.getElementById('final_status').innerHTML = ( result === 'victory' ) ? 'You Won!' : 'You Lost!';
        document.getElementById('final_score').innerHTML = 'Final Score: ' + ECS.score;
        resultsGUI.style.width = renderer.getSize().width + 'px';
        resultsGUI.style.top = (renderer.getSize().height - 200) / 2 + 'px';
        resultsGUI.style.background = ( result === 'victory' ) ? 'green' : 'red';
        resultsGUI.style.display = 'block';
    };

    return this;
};

// Kick off the game
ECS.game = new ECS.Game();
