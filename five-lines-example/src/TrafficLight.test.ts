//TODO 열거형의 이름을 변경하라
enum RawTrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight2 {
    isRed(): boolean;
    isYellow(): boolean;
    isGreen(): boolean; 
}

class Red implements TrafficLight2 {
    isRed(): boolean { return true }
    isYellow(): boolean { return false }
    isGreen(): boolean { return false }
}

class Yellow implements TrafficLight2 {
    isRed(): boolean { return false }
    isYellow(): boolean { return true }
    isGreen(): boolean { return false }
}

class Green implements TrafficLight2 {
    isRed(): boolean { return false }
    isYellow(): boolean { return false }
    isGreen(): boolean { return true }
}

const CYCLE = [RawTrafficLight.RED, RawTrafficLight.YELLOW, RawTrafficLight.GREEN]
function updateCarForLight(current: RawTrafficLight) {
    if(current === RawTrafficLight.RED) {
        // car.stop()
    } else {
        // car.drive()
    }
}
