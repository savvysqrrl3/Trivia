var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Game = mongoose.model('Game');
var session = require('express-session');

module.exports = {

    // saveUser: function (req, res){
    //     console.log(req.body);
    //     req.session.username = req.body.username;
    //     console.log(req.session.username);
    // },
    
    retrieve3: function (req, res){
        Question.find({},function (err, questions) {
            // console.log(questions);
           
            var result = [];
            for (i = 0; i < 3; i ++){
                let randomNum = Math.floor(Math.random() * questions.length);
                console.log("***** Random number:", randomNum);
                // if index already used, continue; else, push to array
                result.push(questions[randomNum]);
                console.log(result);
            }
            console.log("****** Array of 3 contains:", result);
            return res.json(result);        
        })
    },

    getAllQs: function (req, res) {
        // console.log(1, "arrived at trivia.js")
        Question.find({}, function (err, questions) {
            // console.log(2)
            res.json(questions);
            // console.log(3);
        })
    },

    getAllGames: function (req, res) {
        // console.log(1, "arrived at trivia.js")
        Game.find({}, function (err, games) {
            // console.log(2)
            res.json(games);
            // console.log(3);
        })
    },


    newQ: function (req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newQuestion = new Question(req.body);
        // console.log(4, "Before we save...", newQuestion)
        newQuestion.save(function (err) {
            if (err) {
                console.log('something went wrong when creating new Question');
                return res.json();

            }
            else {
                console.log(5, "Question added to database:", newQuestion)
                return res.json();
            }
        })
    },

    newG: function (req, res) {
        console.log("Here's what we got from the front end:", req.body);
        let newGame = new Game(req.body);
        // console.log(4, "Before we save...", newGame)
        newGame.save(function (err) {
            if (err) {
                console.log('something went wrong when creating new Game');
                return res.json();

            }
            else {
                console.log("Game added to database:", newGame)
                return res.json();
            }
        })
    },

    // destroy: function (req, res, id) {
    //     console.log(1, "Removing item...")
    //     Item.findByIdAndRemove(req.params.id, function (err) {
    //         console.log(2)
    //         if (err) {
    //             console.log('something went wrong when deleting Item');
    //             res.json(err);

    //         }
    //         else {
    //             console.log(5, "Item deleted from database:")
    //             Item.find({}, function (err, items) {
    //                 // console.log(2)
    //                 res.json(items);
    //                 // console.log(3);
    //             })
    //         }
    //     })
    // },

    // update: function (req, res) {
    //     console.log(1, "Updating item...")
    //     Item.findById(req.params.id, function (err, item) {
    //         if (err) {
    //             console.log('Could not find item by id.');
    //             res.json(err);

    //         }
    //         else {
    //             console.log(2)
    //             item['game' + req.body.game]= req.body.status;
    //             item.save(function (err) {
    //                 if (err) {
    //                     console.log('Could not save updates to Item');
    //                     return res.json();
        
    //                 }
    //                 else {
    //                     console.log(3, "Item updates successfully saved");
    //                     Item.find({}, function (err, items) {
    //                         res.json(items);
    //                     })
    //                 }
    //             })                
    //         }
    //     })
    // },

    // closing curly brace: don't paste over!
}

