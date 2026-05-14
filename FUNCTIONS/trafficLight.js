const trafficLight = (light) => {

if(light == "Red" ){
    return "Stop"
}
else if(light == "Yellow" ){
    return "Get Ready"
}
else if(light == "Green" ){
    return "Go"
}

}

console.log(trafficLight("Red"))
