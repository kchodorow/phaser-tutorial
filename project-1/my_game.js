var create = function() {
  this.add.text(10, 10, "I'm a game.", {fill: '#ffffff'});
};

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {create: create});
