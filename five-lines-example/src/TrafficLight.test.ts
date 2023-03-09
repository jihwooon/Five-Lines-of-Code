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
//TODO 이전 타입에서 임시 이름으로 변경하고 일치 여부 검사를 하라
function updateCarForLight(current: TrafficLight2) {
    if(current.isRed()) {
        // car.stop()
    } else {
        // car.drive()
    }
}
