// Moviment
// --------------------------------------
ECS.Components.Moviment = function( p ){
    p = p || {};

    this.moving = (typeof p.moving === "undefined") ? true : p.moving;

    this.last_move = (new Date()).getTime();

    return this;
};
ECS.Components.Moviment.prototype.name = 'moviment';
