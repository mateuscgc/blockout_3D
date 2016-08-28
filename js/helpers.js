Helpers = {
    Cube: function(s) {
        var geometry = new THREE.Geometry();

        geometry.vertices.push(new THREE.Vector3(-s/2, -s/2, -s/2));
        geometry.vertices.push(new THREE.Vector3(-s/2, s/2, -s/2));
        geometry.vertices.push(new THREE.Vector3(s/2, s/2, -s/2));
        geometry.vertices.push(new THREE.Vector3(s/2, -s/2, -s/2));

        geometry.vertices.push(new THREE.Vector3(-s/2, -s/2, s/2));
        geometry.vertices.push(new THREE.Vector3(-s/2, s/2, s/2));
        geometry.vertices.push(new THREE.Vector3(s/2, s/2, s/2));
        geometry.vertices.push(new THREE.Vector3(s/2, -s/2, s/2));

        // Back face
        geometry.faces.push(new THREE.Face3(0,1,3));
        geometry.faces.push(new THREE.Face3(2,3,1));

        // Front face
        geometry.faces.push(new THREE.Face3(4,5,7));
        geometry.faces.push(new THREE.Face3(6,7,4));

        // Top face
        geometry.faces.push(new THREE.Face3(5,1,6));
        geometry.faces.push(new THREE.Face3(2,6,1));

        // Bottom face
        geometry.faces.push(new THREE.Face3(4,0,7));
        geometry.faces.push(new THREE.Face3(3,7,0));

        // Left face
        geometry.faces.push(new THREE.Face3(0,1,4));
        geometry.faces.push(new THREE.Face3(5,4,1));

        // Right face
        geometry.faces.push(new THREE.Face3(3,2,7));
        geometry.faces.push(new THREE.Face3(6,7,2));

        return geometry;
    }
};

Helpers.center = function(matrix) {
    var min_x = 5, max_x = -1, min_z = 5, max_z = -1;
    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j]) {
                min_x = Math.min(min_x, j);
                max_x = Math.max(max_x, j);

                min_z = Math.min(min_z, i);
                max_z = Math.max(max_z, i);
            }

        }
    }

    return new THREE.Vector3(
                        (min_x+max_x+1)*10/2 - 25,
                        0,
                        (min_z+max_z+1)*10/2 - 25
                    );
};



Helpers.position = function(x, z) {
    x = (x+1/2)*10;
    z = (z+1/2)*10;

    return new THREE.Vector3(
                        x - 25,
                        0,
                        z - 25
                    );
};
