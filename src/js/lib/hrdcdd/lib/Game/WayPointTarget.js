var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['Phaser'], function(Phaser) {
  var WayPointTarget;
  return WayPointTarget = (function(_super) {
    __extends(WayPointTarget, _super);

    function WayPointTarget(game, x, y, sprite) {
      this.game = game;
      Phaser.Sprite.call(this, game, x, y, sprite);
      this.anchor.setTo(0.5, 0.5);
    }

    WayPointTarget.prototype.create = function() {};

    WayPointTarget.prototype.update = function() {
      if (this.game.input.mousePointer.isDown) {
        this.x = this.game.input.mousePointer.x;
        this.y = this.game.input.mousePointer.y;
      }
      if (this.game.input.pointer1.isDown) {
        this.x = this.game.input.pointer1.x;
        return this.y = this.game.input.pointer1.y;
      }
    };

    WayPointTarget;

    return WayPointTarget;

  })(Phaser.Sprite);
});
