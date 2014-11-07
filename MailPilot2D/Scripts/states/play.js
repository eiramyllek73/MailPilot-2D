/// <reference path="../objects/gameobject.js" />
/// <reference path="../objects/cloud.js" />
/// <reference path="../objects/island.js" />
/// <reference path="../objects/ocean.js" />
/// <reference path="../objects/plane.js" />
/// <reference path="../objects/scoreboard.js" />
var states;
(function (states) {
    function playState() {
        ocean.update();
        island.update();
        plane.update();

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count].update();
        }

        collisionCheck();

        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;

    function Play() {
        game = new createjs.Container();

        ocean = new objects.Ocean(game);
        island = new objects.Island(game);
        plane = new objects.Plane(game);

        for (var count = 0; count < constants.CLOUD_NUM; count++) {
            clouds[count] = new objects.Cloud(game);
        }

        scoreboard = new objects.Scoreboard(game);

        stage.addChild(game);
    }
    states.Play = Play;
})(states || (states = {}));
