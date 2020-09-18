const nunjucks = require( 'nunjucks' )
const path = require( 'path' )

const routes = require( './routes/routes.js' )

const express = require( 'express' )
const app = express()

nunjucks.configure( path.join( __dirname , '/../public/pages' ) , { 
  express: app,
  noCache: true
} )

app.use( express.urlencoded( { extended: true } ) )
app.use( express.static( path.join( __dirname , '/../public/' ) ) )

app.get( '/', routes )
app.get( '*', routes ) // Esta rota deve sempre ser a última!

module.exports = app