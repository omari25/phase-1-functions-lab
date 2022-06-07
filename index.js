// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const Scuber = 42;
    if (pickup > Scuber){
        return (pickup - Scuber);
    }else{
        return  (Scuber - pickup);
    }
}

function distanceFromHqInFeet(pickup){
    return (parseInt(distanceFromHqInBlocks(pickup), 10) * 264);
}

function distanceTravelledInFeet(start, destination){
    if (start > destination){
        var travelled = start - destination;
    }else{
        var travelled = destination - start;
    }
    return (parseInt((travelled), 10) * 264);
}

function calculatesFarePrice(start, destination){
    
    let totalDistance = parseInt((distanceTravelledInFeet(start, destination)));
    if (totalDistance <= 400){
        return 0;
    }else if (totalDistance <= 2000){
        return ((totalDistance - 400) * 0.02);
    }else if (totalDistance <= 2500){
        return 25;
    }else{
        return "cannot travel that far"
    }
}