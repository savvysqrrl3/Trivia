var mongoose = require('mongoose');
var trivia = require('../controllers/trivia.js');

module.exports = function(app){
    
    app.post('/question', (req, res, next)=>{
        trivia.newQ(req, res)
      });

    app.post('/game', (req, res, next)=>{
        trivia.newG(req, res)
      });

    // app.post('/sessionStore', (req, res, next)=>{
    //     console.log("Server routing:", req.body)
    //     trivia.saveUser(req, res)
    //   });
    app.get('/getThree', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        trivia.retrieve3(req, res) 
    });

    app.get('/listquestions', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        trivia.getAllQs(req, res) 
    });

    app.get('/listgames', function(req, res, next) {
        // console.log("****** Arrived at routes.js")  
        trivia.getAllGames(req, res) 
    });

    app.get('/sessions/destroy', function(req, res, next){
        req.session.destroy(function(err){
          console.log(err)
        })
      })
    
    // app.delete('/items/:id', function(req, res, next) {
    //     items.destroy(req, res)
    // });

    // app.put('/items/:id', function(req, res, next) {
    //     items.update(req, res)
    // });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });
}

