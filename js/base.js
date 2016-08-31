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

    this.D3 = [];
    for(i = 0; i < 10; i++) {
        this.D3.push([[0,0,0,0,0],
                      [0,0,0,0,0],
                      [0,0,0,0,0],
                      [0,0,0,0,0],
                      [0,0,0,0,0]]);
    }

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
                this.D3[max_b][i][j] = 1;
            }
        }
    }

};

ECS.Base.prototype.cut_at = function( H ) {
    for(i = 0; i < this.matrix.length; i++) {
        for(j = 0; j < this.matrix[i].length; j++) {
            this.matrix[i][j] = 0;
        }
    }

    for(h = 0; h < H; h++) {
        for(i = 0; i < this.D3[h].length; i++) {
            for(j = 0; j < this.D3[h][i].length; j++) {
                if(this.D3[h][i][j])
                    this.matrix[i][j] = h+1;
            }
        }
    }

    for(h = H; h < this.D3.length; h++) {
        for(i = 0; i < this.D3[h].length; i++) {
            for(j = 0; j < this.D3[h][i].length; j++) {
                this.D3[h][i][j] = 0;
            }
        }
    }

}
