var __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

define(['Phaser', 'KinematicSteeringOutput'], function(Phaser, KinematicSteeringOutput) {
  var Align;
  Align = (function(_super) {
    __extends(Align, _super);

    function Align(character, target, maxAngularAcceleration, maxRotation, targetRadius, slowRadius) {
      this.character = character;
      this.target = target;
      this.maxAngularAcceleration = maxAngularAcceleration;
      this.maxRotation = maxRotation;
      this.targetRadius = targetRadius;
      this.slowRadius = slowRadius;
      this.timeToTarget = 0.5;
    }

    Align.prototype.getSteering = function() {
      var angularAcceleration, rotation, rotationSize, steering, targetRotation;
      steering = new KinematicSteeringOutput();
      rotation = this.target.orientation - this.character.orientation;
      rotation = Phaser.Math.mapLinear(rotation, -this.maxRotation, this.maxRotation, -Math.PI, Math.PI);
      rotationSize = Math.abs(rotation);
      if (rotationSize < this.targetRadius) {
        return null;
      }
      if (rotationSize > this.slowRadius) {
        targetRotation = this.maxRotation;
      } else {
        targetRotation = this.maxRotation * rotationSize / this.slowRadius;
      }
      targetRotation *= rotation / rotationSize;
      steering.angular = targetRotation - this.character.rotation;
      steering.angular /= this.timeToTarget;
      angularAcceleration = Math.abs(steering.angular);
      if (angularAcceleration > this.maxAngularAcceleration) {
        steering.angular /= angularAcceleration;
        steering.angular *= this.maxAngularAcceleration;
      }
      steering.linear.setTo(0, 0);
      return steering;
    };

    return Align;

  })(Phaser.Sprite);
  return Align;
});
