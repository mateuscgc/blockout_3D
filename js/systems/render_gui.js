/* =========================================================================
 *
 * render_gui.js
 *  This script contains the game logic acts as a controller for the Entity
 *  Component System
 *
 * ========================================================================= */

// ECS - System - RenderGUI
// --------------------------------------
ECS.systems.renderGUI = function () {
    var score = document.getElementById('score');
    score = score.getElementsByTagName('span')[0];
    score.innerHTML = ECS.score;
};
