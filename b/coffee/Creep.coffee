_ = require 'Score'


module.exports = class Creep extends _
	constructor: (@creep) ->
		if @creep.energy < creep.energyCapacity
			sources = creep.room.find(Game.SOURCES)
			creep.moveTo(sources[0])
			creep.harvest(sources[0])
		else
			creep.moveTo(Game.spawns.Spawn1)
			creep.transferEnergy(Game.spawns.Spawn1)
	@test2: -> @test()
