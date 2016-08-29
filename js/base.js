/* =========================================================================
 *
 * Base.js
 *
 * =========================================================================*/
ECS.Base = function( matrix ){
    this.matrix =  matrix || [[0,0,0,0,0],
                              [0,0,0,0,0],
                              [0,0,0,0,0],
                              [0,0,0,0,0],
                              [0,0,0,0,0]];

    return this;
};

ECS.Base.prototype.hit_ground = function( obj_matrix, obj_from_base ) {

    for(i = 0; i < this.matrix.length; i++) {
        for(j = 0; j < this.matrix[i].length; j++) {
            if(obj_matrix[i][j] && obj_from_base - this.matrix[i][j]*10 <= 5) {
                return true;
            }
        }
    }

    return false;
};

ECS.Base.prototype.update = function( obj_matrix ) {

    max_b = -1;
    for(i = 0; i < this.matrix.length; i++) {
        for(j = 0; j < this.matrix[i].length; j++) {
            if(obj_matrix[i][j]) {
                max_b = Math.max(max_b, this.matrix[i][j]);
            }
        }
    }

    for(i = 0; i < this.matrix.length; i++) {
        for(j = 0; j < this.matrix[i].length; j++) {
            if(obj_matrix[i][j]) {
                this.matrix[i][j] = max_b + 1;
            }
        }
    }

    console.log(this.matrix);
};
