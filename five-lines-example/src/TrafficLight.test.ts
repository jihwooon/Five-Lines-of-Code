//TODO enum 타입에서 interface으로 도입하라
enum TrafficLight {
    RED, YELLOW, GREEN
}

interface TrafficLight2 {
    isRed(): boolean;
    isYellow(): boolean;
    isGreen(): boolean; 
}

const CYCLE = [TrafficLight.RED, TrafficLight.YELLOW, TrafficLight.GREEN]
function updateCarForLight(current: TrafficLight) {
    if(current === TrafficLight.RED) {
        // car.stop()
    } else {
        // car.drive()
    }
}
