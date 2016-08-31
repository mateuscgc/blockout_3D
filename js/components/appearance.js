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

    for(i = 0; i < p.matrix.length; i++) {
        for(j = 0; j < p.matrix[i].length; j++) {
            if(p.matrix[i][j]) {
                var pos = Helpers.position(j,i);

                var mesh = new THREE.Object3D();

                mesh.add( new THREE.Mesh(
                                new Helpers.Cube( p.cube_side_size || 10),
                                new THREE.MeshBasicMaterial(
                                        {
                                            color: 0xffffff,
                                            wireframe: true,
                                            side: THREE.DoubleSide
                                        })
                            )
                        );

                mesh.add( new THREE.Mesh(
                                new Helpers.Cube( p.cube_side_size || 10),
                                new THREE.MeshBasicMaterial(
                                        {
                                            color: p.color || 0x885225,
                                            wireframe: false,
                                            side: THREE.DoubleSide
                                        })
                            )
                        );


                mesh.position.subVectors(pos, obj_center);
                this.obj.add(mesh);

            }
        }
    }

    this.visible = (typeof p.visible === 'undefined') ? true : p.visible;

    scene.add(this.obj);

    return this;
};
ECS.Components.Appearance.prototype.name = 'appearance';

ECS.Components.Appearance.prototype.update = function(matrix) {
    var obj_center = Helpers.center(matrix);

    var cube = -1;
    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]) {
                var pos = Helpers.position(j,i);

                this.obj.children[++cube].position.subVectors(pos, obj_center);
            }
        }
    }
};
