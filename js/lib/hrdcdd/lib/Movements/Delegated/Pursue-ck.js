var __hasProp={}.hasOwnProperty,__extends=function(e,t){function r(){this.constructor=e}for(var n in t)__hasProp.call(t,n)&&(e[n]=t[n]);r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e};define(["Phaser","KinematicSteeringOutput","Seek"],function(e,t,n){var r;r=function(r){function i(e,t,r,i){this.character=e;this.target=t;this.maxPrediction=i;this.Seek=new n(e,t,r)}__extends(i,r);i.prototype.getSteering=function(){var n,r,i,s,o;o=new t;n=e.Point.subtract(this.target.position,this.character.position);r=n.getMagnitude();s=this.character.velocity.getMagnitude();s<=r/this.maxPrediction?i=this.maxPrediction:i=r/s;this.Seek.target.position=e.Point.add(this.Seek.target.position,this.target.velocity.multiply(i,i));return this.Seek.getSteering()};return i}(e.Sprite);return r});