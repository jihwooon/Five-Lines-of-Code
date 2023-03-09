enum RawTrafficLight {
    RED, YELLOW, GREEN
}

//TODO 인터페이스에 새로운 기능을 추가하라
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
    updateCar() {}
}

class Yellow implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return true }
    isGreen(): boolean { return false }
    updateCar() {}
}

class Green implements TrafficLight {
    isRed(): boolean { return false }
    isYellow(): boolean { return false }
    isGreen(): boolean { return true }
    updateCar() {}
}

const CYCLE = [new Red(), new Yellow(), new Green()]
function updateCarForLight(current: TrafficLight) {
    if(current.isRed()) {
        // car.stop()
    } else {
        // car.drive()
    }
}
