enum RawTrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight {
    isRed(): boolean
    isYellow(): boolean
    isGreen(): boolean
    updateCar(): void
}

//TODO 함수를 클래스로 복제하라
class Red implements TrafficLight {
    isRed(): boolean { return true }
    isYellow(): boolean { return false }
    isGreen(): boolean { return false }
    updateCar(): void {}
    updateCarForLight() {
        if(this.isRed()) {
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
        if(this.isYellow()) {
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
        if(this.isGreen()) {
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
