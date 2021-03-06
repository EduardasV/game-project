function Fist(x, y, enemy_x) {
  this.x = x;
  this.y = y;
  this.r = 100;

  this.show = function() {
    push();
    fill(0, 0, 0, 0);
    noStroke();
    if (x > enemy_x) 
      rect(this.x - 60, this.y, this.r, this.r);
    else if (x < enemy_x) 
      rect(this.x + 60, this.y, this.r, this.r);
    pop();
  }

  this.hits = function(player) {
    var d = dist(this.x, this.y, player.x, player.y);
    if (d < this.r + player.r) {
      return true;
    } else {
      return false;
    }
  }
}
