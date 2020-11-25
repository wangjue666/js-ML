import {getIrisData, IRIS_CLASSES} from "./data"


window.onload = async ()=>{
    const [xTrain, yTrain, xTest, yTest] = getIrisData(0.15)
    xTrain.print()
    console.log(xTrain)
    yTrain.print()
    console.log(IRIS_CLASSES)
}