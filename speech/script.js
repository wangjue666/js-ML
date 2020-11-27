import * as speechCommands from "@tensorflow-models/speech-commands"
const MODEL_PATH = 'http://127.0.0.1:5000/speech';
window.onload = async ()=>{
    const recognizer = speechCommands.create(
        'BROWSER_FFT',
        null,
        MODEL_PATH + '/model.json',
        MODEL_PATH + '/metadata.json'
    )
    //确保模型加载好
    await recognizer.ensureModelLoaded();

    //查看模型可以识别哪些单词
    const labels = recognizer.wordLabels()
    console.log(labels)
}