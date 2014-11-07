
/// <reference path="../objects/gameobject.js" />
/// <reference path="../objects/cloud.js" />
/// <reference path="../objects/island.js" />
/// <reference path="../objects/ocean.js" />
/// <reference path="../objects/plane.js" />
var states;
(function (states) {
    function menuState() {
        ocean.update();
        plane.update();
    }
    states.menuState = menuState;

    function Menu() {
        var mailPilotText;

        game = new createjs.Container();

        ocean = new objects.Ocean(game);

        plane = new objects.Plane(game);

        mailPilotText = new createjs.Text("START", constants.GAME_FONT, constants.FONT_COLOUR);
        mailPilotText.regX = mailPilotText.getBounds().width * 0.5;
        mailPilotText.regY = mailPilotText.getBounds().height * 0.5;
        mailPilotText.x = stage.canvas.width * 0.5;
        mailPilotText.y = stage.canvas.height * 0.5;
        game.addChild(mailPilotText);

        mailPilotText.addEventListener("click", function (e) {
            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
        });

        stage.addChild(game);
    }
    states.Menu = Menu;
})(states || (states = {}));
