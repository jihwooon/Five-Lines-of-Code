enum RawTrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight {
    isRed(): boolean
    isYellow(): boolean
    isGreen(): boolean
    updateCar(): void
}

//TODO 
class Red implements TrafficLight {
    isRed(): boolean { return true }
    isYellow(): boolean { return false }
    isGreen(): boolean { return false }
    updateCar(): void {}
    updateCarForLight() {
        if(true) {
            // car.stop()
        } else {
            // car.drive()
        }
    }
}

class Yellow implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return true }
    isGreen(): boolean { return false }
    updateCar() {}
    updateCarForLight() {
        if(false) {
            // car.stop()
        } else {
            // car.drive()
        }
    }
}

class Green implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return false }
    isGreen(): boolean { return true }
    updateCar() {}
    updateCarForLight() {
        if(false) {
            // car.stop()
        } else {
            // car.drive()
        }
    }
}

const CYCLE = [new Red(), new Yellow(), new Green()]
function updateCarForLight(current: TrafficLight) {
    if(current.isRed()) {
        // car.stop()
    } else {
        // car.drive()
    }
}
