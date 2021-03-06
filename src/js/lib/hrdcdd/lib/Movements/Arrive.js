var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['Phaser', 'KinematicSteeringOutput'], function(Phaser, KinematicSteeringOutput) {
  var Arrive;
  Arrive = (function(_super) {
    __extends(Arrive, _super);

    function Arrive(character, target, maxAcceleration, maxSpeed, targetRadius, slowRadius) {
      this.character = character;
      this.target = target;
      this.maxAcceleration = maxAcceleration;
      this.maxSpeed = maxSpeed;
      this.targetRadius = targetRadius;
      this.slowRadius = slowRadius;
      this.timeToTarget = 0.5;
    }

    Arrive.prototype.getSteering = function() {
      var direction, distance, steering, targetSpeed, targetVelocity;
      steering = new KinematicSteeringOutput();
      direction = Phaser.Point.subtract(this.target.position, this.character.position);
      distance = direction.getMagnitude();
      if (distance < this.targetRadius) {
        return null;
      }
      if (distance > this.slowRadius) {
        targetSpeed = this.maxSpeed;
      } else {
        targetSpeed = this.maxSpeed * distance / this.slowRadius;
      }
      targetVelocity = direction;
      targetVelocity.normalize();
      targetVelocity.multiply(targetSpeed, targetSpeed);
      steering.linear.x = targetVelocity.x - this.character.velocity.x;
      steering.linear.y = targetVelocity.y - this.character.velocity.y;
      steering.linear.divide(this.timeToTarget, this.timeToTarget);
      if (steering.linear.getMagnitude() > this.maxAcceleration) {
        steering.linear.normalize();
        steering.linear.multiply(this.maxAcceleration, this.maxAcceleration);
      }
      steering.angular = 0;
      return steering;
    };

    return Arrive;

  })(Phaser.Sprite);
  return Arrive;
});
