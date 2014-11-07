var managers;
(function (managers)
{
    var Asset = (function ()
    {
        function Asset() {
        }
        Asset.init = function () {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(this.manifest);

            this.atlas = new createjs.SpriteSheet(this.spriteSheetData);
        };
        Asset.spriteSheetData = {
            "images": ["assets/images/atlas.png"],
            "frames": [
             [2, 2, 226, 178],
             [69, 182, 62, 63],
             [2, 182, 65, 65]
            ],
            "animations": {
                "cloud":[0], 
                "island":[1], 
                "plane":[2]
                }
        };

        Asset.manifest = [
            { id: "ocean", src: "Assets/Images/ocean.gif" },
            { id: "yay", src: "Assets/Sounds/yay.mp3" },
            { id: "explosion", src: "Assets/Sounds/explosion.wav" }
        ];
        return Asset;
    })();
    managers.Asset = Asset;
})(managers || (managers = {}));
