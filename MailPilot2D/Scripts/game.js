var stage;
var queue;

function preload()
{
    queue = new createjs.LoadQueue();
    queue.installPlugin(createjs.Sound);
    queue.addEventListener("complete", init);
    queue.loadManifest([
        //{id: "picture", src: "Images/example.jpg"},
        //{ id: "sound", src: "Sounds/example.mp3" }
    ]);
}

function init()
{
    stage = new createjs.Stage(document.getElementById);
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", gameLoop);
    main();

}

function gameLoop(event)
{
    stage.update();
}

var CharacterImage = (function ()
{
    function CharacterImage(){
    }
    CharacterImage.prototype.update = function () {
    };
    return CharacterImage;
})();

function main()
{
    //add code here
    //some sample code to be replaced

}