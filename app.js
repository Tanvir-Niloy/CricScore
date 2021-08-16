var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var app = express();
var apiKey = "your api key";



// Middleware


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine","ejs");
app.use(express.static("public"));





const results = require("./models/Results")
const home = require("./models/Home")
const scheduleOf = require("./models/ScheduleOf")
const tournamentResults = require("./models/Tournaments/TournamentResults")
const recentTournaments = require("./models/Tournaments/RecentTournament")
const tournamentInfo = require("./models/Tournaments/TournamentInfo")
const tournamentStandings = require("./models/Tournaments/TournamentStandings")
const tournamentLeaders = require("./models/Tournaments/TournamentLeaders")
const playerInfo = require("./models/PlayerInfo")
const matchInfo = require("./models/Matches/MatchInfo")
const matchProbabilities = require("./models/Matches/MatchProbabilities")
const matchLineups = require("./models/Matches/MatchLineups")


app.get("/",home)
app.get("/results",results)
app.get("/scheduleOf-:id",scheduleOf)
app.get("/playerInfo-:id",playerInfo)
app.get("/recentTournaments",recentTournaments)
app.get("/tournamentInfo-:id",tournamentInfo)
app.get("/tournamentStandings-:id",tournamentStandings)
app.get("/tournamentLeaders-:id",tournamentLeaders)
app.get("/tournamentResults-:id",tournamentResults)
app.get("/match-:id",matchInfo)
app.get("/matchProbabilities-:id",matchProbabilities)
app.get("/lineups-:id",matchLineups)

var port = process.env.PORT || 1100

app.listen(port,function(){
    console.log("CricClaw server started for " + port)
})


// Made With Love By Tanvir Hasan Niloy //