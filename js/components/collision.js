// Collision
// --------------------------------------
ECS.Components.Collision = function( p ){
    p = p || {};

    this.matrix = p.matrix || [[0,0,0,0,0],
                               [0,0,0,0,0],
                               [0,0,1,0,0],
                               [0,0,0,0,0],
                               [0,0,0,0,0]];

    this.collides = (typeof p.collides === 'undefined') ? true : collides;

    return this;
};
ECS.Components.Collision.prototype.name = 'collision';
