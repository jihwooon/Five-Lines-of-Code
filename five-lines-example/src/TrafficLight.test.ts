enum RawTrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight {
    isRed(): boolean;
    isYellow(): boolean;
    isGreen(): boolean; 
}

class Red implements TrafficLight {
    isRed(): boolean { return true }
    isYellow(): boolean { return false }
    isGreen(): boolean { return false }
}

class Yellow implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return true }
    isGreen(): boolean { return false }
}

class Green implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return false }
    isGreen(): boolean { return true }
}

const CYCLE = [new Red(), new Yellow(), new Green()]
function updateCarForLight(current: TrafficLight) {
    if(current.isRed()) {
        // car.stop()
    } else {
        // car.drive()
    }
}
