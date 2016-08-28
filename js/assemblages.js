/* =========================================================================
 *
 * Assemblages.js
 *  Contains assemblages. Assemblages are essentially entity "templates"
 *
 * ========================================================================= */

ECS.Assemblages = {
    // Each assemblage creates an entity then returns it. The entity can
    // then have components added or removed - this is just like a helper
    // factory to create objects which can still be modified

    D2: function(p) {
        p = p || {}

        var entity = new ECS.Entity();
        entity.addComponent( new ECS.Components.Position(
                                    {
                                        matrix: (p.matrix[0][0] instanceof Array) ? p.matrix[0] : p.matrix
                                    }));
        entity.addComponent( new ECS.Components.Appearance(
                                    {
                                        matrix: (p.matrix[0][0] instanceof Array) ? p.matrix[0] : p.matrix
                                    }));

        // entity.addComponent( new ECS.Components.Collision(
        //                             {
        //                                 matrix: (p.matrix[0][0] instanceof Array) ? p.matrix[0] : p.matrix
        //                             }));

        return entity;
    }

};
