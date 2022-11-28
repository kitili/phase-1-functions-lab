// Code your solution in this file!
function distanceFromHqInBlocks(distanceInBlocks) {
    if (distanceInBlocks > 42) {
      return distanceInBlocks - 42;
    } else {
      return 42 - distanceInBlocks;
    }
  }
  function distanceFromHqInFeet(distanceInBlocks) {
    return distanceFromHqInBlocks(distanceInBlocks) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    return destination > start
      ? (destination - start) * 264
      : (start - destination) * 264;
  }
  function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
      return 0;
    } else if (
      (400 < distanceTravelledInFeet(start, destination),
      distanceTravelledInFeet(start, destination) < 2000)
    ) {
      return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (
      (2000 < distanceTravelledInFeet(start, destination),
      distanceTravelledInFeet(start, destination) < 2500)
    ) {
      return 25;
    } else if (2500 < distanceTravelledInFeet(start, destination)) {
      return `cannot travel that far`;
    }
  }