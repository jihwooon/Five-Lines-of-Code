enum RawTrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight {
    isRed(): boolean
    isYellow(): boolean
    isGreen(): boolean
    updateCar(): void
}

class Red implements TrafficLight {
    isRed(): boolean { return true }
    isYellow(): boolean { return false }
    isGreen(): boolean { return false }
    updateCar() {
        // car.stop()
    }
}

class Yellow implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return true }
    isGreen(): boolean { return false }
    updateCar() {
        // car.drive()
    }
}

class Green implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return false }
    isGreen(): boolean { return true }
    updateCar() {
        // car.drive()
    }
}

const CYCLE = [new Red(), new Yellow(), new Green()]
function updateCarForLight(current: TrafficLight) {
    current.updateCar()
}
