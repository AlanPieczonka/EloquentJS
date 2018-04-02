const countTurns = (state, robot, memory) => {
    for (let turns = 0; ; turns++) {
        if (state.parcels.length == 0) { return turns }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let turns1 = 0,
        turns2 = 0;
    for (let i = 0; i < 100; i++) {
        const state = VillageState.random();
        turns1 += countTurns(state, robot1, memory1);
        turns2 += countTurns(state, robot2, memory2);
    }
    console.log('Robot 1 turns total: ' + turns1);
    console.log('Robot 2 turns total: ' + turns2);

    console.log('Robot 1 average: ' + (turns1 / 100));
    console.log('Robot 2 average: ' + (turns2 / 100));
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
