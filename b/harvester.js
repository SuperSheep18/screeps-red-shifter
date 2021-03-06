module.exports = {
	creeps: [], 
	parts:   ["work", "work", "carry", "carry", "move"],
	fn: function (creep) {
		if(creep.energy < creep.energyCapacity) {
			var sources = creep.room.find(Game.SOURCES);
			creep.moveTo(sources[0]);
			creep.harvest(sources[0]);
		}
		else {
			creep.moveTo(Game.spawns.Spawn1);
			creep.transferEnergy(Game.spawns.Spawn1)
		}
	}
}
