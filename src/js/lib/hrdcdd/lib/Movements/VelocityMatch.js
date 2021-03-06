var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['Phaser', 'KinematicSteeringOutput'], function(Phaser, KinematicSteeringOutput) {
  var VelocityMatch;
  VelocityMatch = (function(_super) {
    __extends(VelocityMatch, _super);

    function VelocityMatch(character, target, maxAcceleration) {
      this.character = character;
      this.target = target;
      this.maxAcceleration = maxAcceleration;
      this.timeToTarget = 0.5;
    }

    VelocityMatch.prototype.getSteering = function() {
      var steering;
      steering = new KinematicSteeringOutput();
      steering.linear = Phaser.Point.subtract(this.target.velocity, this.character.velocity);
      steering.linear.divide(this.timeToTarget, this.timeToTarget);
      if (steering.linear.getMagnitude() > this.maxAcceleration) {
        steering.linear.normalize();
        steering.linear.multiply(this.maxAcceleration, this.maxAcceleration);
      }
      steering.angular = 0;
      return steering;
    };

    return VelocityMatch;

  })(Phaser.Sprite);
  return VelocityMatch;
});
