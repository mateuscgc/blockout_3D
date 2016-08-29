// Position
// --------------------------------------
ECS.Components.Position = function( p ){
    p = p || {};
    p.matrix = p.matrix || [[0,0,0,0,0],
                            [0,0,0,0,0],
                            [0,0,1,0,0],
                            [0,0,0,0,0],
                            [0,0,0,0,0]];


    var obj_center = Helpers.center(p.matrix);

    this.vector = new THREE.Vector3(
                        obj_center.x,
                        75,
                        obj_center.z
                    );

    // this.vector = new THREE.Vector3(
    //                     (typeof p.x === 'undefined') ? 20 : p.x,
    //                     (typeof p.y === 'undefined') ? 55 : p.y,
    //                     (typeof p.z === 'undefined') ? 0 : p.z
    //                     );
    return this;
};
ECS.Components.Position.prototype.name = 'position';
