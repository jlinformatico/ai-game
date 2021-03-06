var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['Phaser'], function(Phaser) {
  var Player;
  return Player = (function(_super) {
    __extends(Player, _super);

    function Player(game, x, y, sprite) {
      this.game = game;
      Phaser.Sprite.call(this, game, x, y, sprite);
      this.cursors = this.game.input.keyboard.createCursorKeys();
      this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    Player.prototype.create = function() {};

    Player.prototype.update = function() {
      this.body.velocity.x = 0;
      this.body.velocity.y = 0;
      if (this.cursors.left.isDown) {
        this.body.velocity.x = -150;
        this.animations.play('left');
      }
      if (this.cursors.right.isDown) {
        this.body.velocity.x = 150;
        this.animations.play('right');
      }
      if (this.cursors.up.isDown) {
        this.body.velocity.y = -150;
      }
      if (this.cursors.down.isDown) {
        return this.body.velocity.y = 150;
      }
    };

    Player;

    return Player;

  })(Phaser.Sprite);
});
