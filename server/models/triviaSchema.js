var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 15 },
    correct: { type: String, required: true },
    false1: { type: String, required: true },
    false2: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now }
});

var GameSchema = new mongoose.Schema({
    username: { type: String, required: true},
    score: { type: Number },
    percentage: { type: String },
    created_at: { type: Date, required: true, default: Date.now }
    });

    var Question = mongoose.model('Question', QuestionSchema);
    var Game = mongoose.model('Game', GameSchema);