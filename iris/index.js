import {getIrisData, IRIS_CLASSES} from "./data"
import * as tf from '@tensorflow/tfjs';

window.onload = async ()=>{
    const [xTrain, yTrain, xTest, yTest] = getIrisData(0.15)
    const model = tf.sequential()
    model.add(tf.layers.dense({
        units: 10,
        inputShape: [xTrain.shape[1]],
        activation: 'sigmoid'
    }))
    model.add(tf.layers.dense({
        units: 3,
        activation: 'softmax'
    }))
}