module.exports = {
	creeps: [],
	parts: ["tough", "move", "attack", "attack", "attack"],
	fn: function(creep){
		var targets = creep.room.find(Game.HOSTILE_CREEPS);
		if(targets.length) {
			creep.moveTo(targets[0]);
			creep.attack(targets[0]);
		}
	}
}

