const MissionCommander = require('./../app/missionCommander');

describe("Unit Test For Mission Commander Class", () => {
    test('1) Create a mission Commander object', () => {
      const myMissionCommander = new MissionCommander("Woopa") 
      expect(myMissionCommander.name).toBe("Woopa");
    });
  })
  