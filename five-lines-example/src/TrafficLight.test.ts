enum TrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight2 {
    isRed(): boolean;
    isYellow(): boolean;
    isGreen(): boolean; 
}

//TODO 각 열거형 값에 대한 클래스를 생성하라
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

const CYCLE = [TrafficLight.RED, TrafficLight.YELLOW, TrafficLight.GREEN]
function updateCarForLight(current: TrafficLight) {
    if(current === TrafficLight.RED) {
        // car.stop()
    } else {
        // car.drive()
    }
}
