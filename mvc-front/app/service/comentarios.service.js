(function(app) {

    app.service('ComentarioService', function( $http ) {
        const urlSaaS = 'http://localhost:3000';

        function getComentarios(username, comentario) {
            return $http.get(urlSaaS + '/'+ username +'/comentarios/'+ comentario + "/comentarios");
        }

        return {
            comentarios: getComentarios,
        }
        
    });

})( appDS2 );