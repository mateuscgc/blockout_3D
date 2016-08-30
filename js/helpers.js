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

Helpers.rotate = function(matrix) {
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

    var size = Math.max(max_x - min_x, max_z - min_z) + 1;
    var sizeX = size;
    var sizeZ = size;

    // Get x limits of matrix to be rotated
    var c_min_x = Math.floor((min_x+max_x)/2)+1;
    var c_max_x = Math.ceil((min_x+max_x)/2)-1;
    while(sizeX) {
        if(c_max_x+1 < 5) {
            c_max_x++;
            sizeX--;

            if(!sizeX) break;
        }
        if(c_min_x-1 >= 0) {
            c_min_x--;
            if(c_min_x < c_max_x)
                sizeX--;
        }
    }
    var b_max_x = c_max_x;

    // Get z limits of matrix to be rotated
    var c_min_z = Math.floor((min_z+max_z)/2)+1;
    var c_max_z = Math.ceil((min_z+max_z)/2)-1;
    while(sizeZ) {
        if(c_max_z+1 < 5) {
            c_max_z++;
            sizeZ--;

            if(!sizeZ) break;
        }
        if(c_min_z-1 >= 0) {
            c_min_z--;
            if(c_min_z < c_max_z)
                sizeZ--;
        }
    }
    var b_max_z = c_max_z;

    // Transpose matrix
    for(i = 0; i < size; i++) {
        for(j = i + 1; j < size; j++) {
            aux = matrix[b_max_z-(size-1)+i][b_max_x-(size-1)+j];
            matrix[b_max_z-(size-1)+i][b_max_x-(size-1)+j] = matrix[b_max_z-(size-1)+j][b_max_x-(size-1)+i];
            matrix[b_max_z-(size-1)+j][b_max_x-(size-1)+i] = aux;
        }
    }

    // Invert columns for a right rotation
    for(j = 0; j < size/2; j++) {
        for(i = 0; i < size; i++) {
            l = b_max_z-(size-1) + i;
            aux = matrix[l][b_max_x-(size-1)+j];
            matrix[l][b_max_x-(size-1)+j] = matrix[l][b_max_x - j];
            matrix[l][b_max_x- j] = aux;
        }
    }

    return matrix;
};
