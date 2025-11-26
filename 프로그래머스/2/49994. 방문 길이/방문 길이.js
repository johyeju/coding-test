function solution(dirs) {
    const currentLocation = { x: 0, y: 0 };
    const moves = {
        U: { x: 0, y: 1 },
        D: { x: 0, y: -1 },
        R: { x: 1, y: 0 },
        L: { x: -1, y: 0 }
    }
    const visitedLoad = new Set();

    const visitedKey = (currentX, currentY, nextX, nextY) => {
        const current = `${currentX},${currentY}`;
        const next = `${nextX},${nextY}`;
        return current < next ? `${current}|${next}` : `${next}|${current}`
    }

    for (const dir of dirs) {
        const move = moves[dir];
        const nextX = currentLocation.x + move.x;
        const nextY = currentLocation.y + move.y;

        if (nextX < -5 || nextX > 5 || nextY < -5 || nextY > 5) {
            continue;
        }

        visitedLoad.add(visitedKey(currentLocation.x, currentLocation.y, nextX, nextY));
        currentLocation.x = nextX;
        currentLocation.y = nextY;
    }

    return visitedLoad.size;
}
