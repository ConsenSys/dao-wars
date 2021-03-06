contract('Creature', function(accounts) {

  it("should let the brain move it", function(done) {
    var creature = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    board.set_dimensions(10,10).
      then(function() { return board.spawn(15, creature.address); }).
      then(function() { return board.set_game(game.address); }).
      then(function() { return game.register_creature(creature.address); }).
      then(function() { return creature.set_board(board.address); }).
      then(function() { return creature.set_location(15); }).
      then(function() { return creature.notify_of_turn(); }).
      then(function() { return creature.set_brain(accounts[0]); }).

      then(function() { return creature.move(0) }).
      then(function() { return creature.location.call() }).
      then(function(result) {
        assert.equal(result, 14);
      }).
      then(function() { return board.creatures.call(14) }).
      then(function(result) {
        assert.equal(result, creature.address);
      }).
      then(function() { return board.creatures.call(15) }).
      then(function(result) {
        assert.equal(result, 0);
        done();
      }).
      catch(done)
  });

  it("should let the brain harvest eth", function(done) {
    var creature = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    board.replace_square(23, false, 15000, creature.address).
      then(function() { return board.set_harvest_amount(10000) }).
      then(function() { return board.set_game(game.address); }).
      then(function() { return game.register_creature(creature.address); }).
      then(function() { return creature.set_location(23) }).
      then(function() { return creature.set_brain(accounts[0]); }).
      then(function() { return creature.set_board(board.address); }).
      then(function() { return creature.notify_of_turn(); }).
      then(function() { return creature.harvest() }).
      then(function() { return creature.eth.call() }).
      then(function(result) { assert.equal(result, 10000) }).
      then(function() { return board.eth.call(23) }).
      then(function(result) { assert.equal(result, 5000) }).

      then(function() { return creature.notify_of_turn(); }).
      then(function() { return creature.harvest() }).
      then(function() { return creature.eth.call() }).
      then(function(result) { assert.equal(result, 15000) }).
      then(function() { return board.eth.call(23) }).
      then(function(result) {
        assert.equal(result, 0);
        done()
    }).catch(done)
  });

  it("should let the brain attack neighbors", function(done) {
    var creature_1 = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    Creature.new().
      then(function(new_creature) {
        var creature_2 = new_creature;
        creature_1.set_brain(accounts[0]).
          then(function() { return board.set_game(game.address); }).
          then(function() { return game.register_creature(creature_1.address); }).
          then(function() { return game.register_creature(creature_2.address); }).
          then(function() { return creature_1.set_game(game.address); }).
          then(function() { return creature_2.set_game(game.address); }).
          then(function() { return creature_1.set_board(board.address); }).
          then(function() { return creature_1.notify_of_turn(); }).
          then(function() { return creature_2.set_hp(3) }).
          then(function() { return creature_1.set_location(42) }).
          then(function() { return creature_2.set_location(43) }).
          then(function() { return board.spawn(42, creature_1.address) }).
          then(function() { return board.spawn(43, creature_2.address) }).

          then(function() { return creature_1.attack(1) }).
          then(function() { return creature_2.hp.call() }).
          then(function(result) {
            assert.equal(result, 2);
            done()
        }).catch(done)
    }).catch(done)
  });

  it("should die if brought to 0 hp", function(done) {
    var creature_1 = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    Creature.new().
      then(function(new_creature) {
        var creature_2 = new_creature;
        creature_1.set_brain(accounts[0]).
          then(function() { return creature_1.set_board(board.address); }).
          then(function() { return creature_1.notify_of_turn(); }).
          then(function() { return board.set_game(game.address); }).
          then(function() { return game.register_creature(creature_1.address); }).
          then(function() { return game.register_creature(creature_2.address); }).
          then(function() { return creature_1.set_game(game.address); }).
          then(function() { return creature_2.set_game(game.address); }).
          then(function() { return creature_2.set_hp(1) }).
          then(function() { return creature_2.set_eth(1000) }).
          then(function() { return creature_2.set_board(board.address); }).
          then(function() { return creature_1.set_location(42) }).
          then(function() { return creature_2.set_location(52) }).
          then(function() { return board.spawn(42, creature_1.address) }).
          then(function() { return board.spawn(52, creature_2.address) }).

          then(function() { return creature_1.attack(3) }).
          then(function() { return creature_2.hp.call() }).
          then(function() { return creature_2.dead.call() }).
          then(function(result) { assert.equal(result, true) }).
          then(function() { return board.eth.call(52) }).
          then(function(result) { assert.equal(result, 1000) }).
          then(function() { return board.creatures.call(52) }).
          then(function(result) {
            assert.equal(result, 0);
            done()
        }).catch(done)
    }).catch(done)
  });

  it("should allow the brain to reproduce", function(done) {
    var creature_1 = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    creature_1.set_location(92).
    then(function() { return creature_1.set_species(1) }).
    then(function() { return creature_1.set_creature_builder(CreatureBuilder.deployed_address) }).
    then(function() { return creature_1.set_brain(accounts[0]); }).
    then(function() { return creature_1.set_board(board.address); }).
    then(function() { return creature_1.notify_of_turn(); }).
    then(function() { return board.set_game(game.address); }).
    then(function() { return game.register_creature(creature_1.address); }).
    then(function() { return board.spawn(92, creature_1.address) }).
    then(function() { return creature_1.reproduce(2, accounts[0], 0) }).
    then(function() { return board.creatures.call(82) }).
    then(function(result) {
      var creature_2 = Creature.at(result);
      creature_2.validate.call().
        then(function(result) { assert.equal(result, 42) }).
        then(function() { return creature_2.species.call() }).
        then(function(result) {
          assert.equal(result, 1);
          done();
        }).catch(done)
    }).catch(done)
  })

  it("should only allow actions on its turn", function(done) {
    var creature = Creature.at(Creature.deployed_address);
    var board = Board.at(Board.deployed_address);
    var game = Game.at(Game.deployed_address);

    board.replace_square(99, false, 15000, creature.address).
      then(function() { return board.set_harvest_amount(10000) }).
      then(function() { return board.set_game(game.address); }).
      then(function() { return game.register_creature(creature.address); }).
      then(function() { return creature.set_location(99) }).
      then(function() { return creature.set_brain(accounts[0]); }).
      then(function() { return creature.set_eth(0); }).
      then(function() { return creature.set_board(board.address); }).
      then(function() { return creature.notify_of_turn(); }).
      then(function() { return creature.harvest() }).
      then(function() { return creature.eth.call() }).
      then(function(result) { assert.equal(result, 10000) }).
      then(function() { return creature.harvest() }).
      then(function() { return creature.eth.call() }).
      then(function(result) {
        assert.equal(result, 10000);
        done();
      }).catch(done)
  })
})
