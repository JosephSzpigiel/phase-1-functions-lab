function distanceFromHqInBlocks(location){
    if (location >= 42){
        return location - 42;
    } else{
        return 42 - location;
    }
}
function distanceFromHqInFeet(location){
    let blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
}
function distanceTravelledInFeet(start,stop){
    let distance = (start >= stop ? start - stop : stop - start);
    return distance * 264;
}
function calculatesFarePrice(start, stop){
    let feetTraveled = distanceTravelledInFeet(start,stop);
    switch (true){
        case feetTraveled <= 400:
            return 0;
        case feetTraveled >= 2500:
            return `cannot travel that far`;
        case feetTraveled > 2000:
            return 25;
        case feetTraveled > 400:
            return .02 * (feetTraveled - 400);
    }
}