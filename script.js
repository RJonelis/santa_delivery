function calculateDeliveryTime(houses, speed) {
    
    // Distance forwards and backwards (Pythagorean theorem)
    const distance = (x1, y1, x2, y2) => {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    };

    let totalDistance = 0;
    let startingPoint = [0, 0];

    // Calculate total distance
    for (let i = 0; i < houses.length; i++) {
        totalDistance += distance(startingPoint[0], startingPoint[1], houses[i][0], houses[i][1]) * 2;
    }

    // Total time
    const totalTime = totalDistance / speed;

    return totalTime;
}

// Example usage
const houses = [[1, 2], [3, 4], [5, 6]];
const speed = 10; 
console.log(calculateDeliveryTime(houses, speed)); 