// Appearance
// --------------------------------------
ECS.Components.Appearance = function( p ){
    // Appearance specifies data for color and size
    p = p || {};
    p.matrix = p.matrix || [[0,0,0,0,0],
                            [0,0,0,0,0],
                            [0,0,1,0,0],
                            [0,0,0,0,0],
                            [0,0,0,0,0]];

    this.obj = new THREE.Group(); // Same as THREE.Object3D()

    var obj_center = Helpers.center(p.matrix);

    console.log(obj_center);

    for(i = 0; i < p.matrix.length; i++) {
        for(j = 0; j < p.matrix[i].length; j++) {
            if(p.matrix[i][j]) {
                var pos = Helpers.position(j,i);

                var mesh = new THREE.Mesh(
                        new Helpers.Cube( p.cube_side_size || 10),
                        new THREE.MeshBasicMaterial(
                                {
                                    color: p.color || 0x885225,
                                    wireframe: true,
                                    side: THREE.DoubleSide
                                }));

                mesh.position.subVectors(pos, obj_center);
                console.log(pos);
                console.log(mesh.position);
                this.obj.add(mesh);

            }
        }
    }


    // this.obj.add( new THREE.Mesh(
    //                     new Helpers.Cube( p.cube_side_size || 10),
    //                     new THREE.MeshBasicMaterial(
    //                             {
    //                                 color: p.color || 0x885225,
    //                                 wireframe: true,
    //                                 side: THREE.DoubleSide
    //                             })
    //                 ));

    // this.obj.add( new THREE.Mesh(
    //                     new Helpers.Cube( p.cube_side_size || 10),
    //                     new THREE.MeshBasicMaterial(
    //                             {
    //                                 color: p.color || 0xffffff,
    //                                 wireframe: false,
    //                                 side: THREE.DoubleSide
    //                             })
    //                 ));

    this.visible = (typeof p.visible === 'undefined') ? true : p.visible;

    scene.add(this.obj);

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';
