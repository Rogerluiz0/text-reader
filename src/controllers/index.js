const controller = {
  pageHome( req , res ) {
    res.render( 'index.html' )
  },
  page404( req , res ) { // Esta rota deve sempre ser a última!
    res.render( 'pageNotFound.html' ) 
  }
}

module.exports = controller