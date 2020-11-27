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
    const labels = recognizer.wordLabels().slice(2)
    console.log(labels)

    const resultEl = document.querySelector('#result')
    resultEl.innerHTML = labels.map(l => `
        <div>${l}</div>
    `).join('')

    recognizer.listen(result => {
        console.log("result", result)
        const { scores } = result;
        const maxValue = Math.max(...scores);
        const index = scores.indexOf(maxValue) - 2;
        resultEl.innerHTML = labels.map((l, i) => `
        <div style="background: ${i === index && 'green'}">${l}</div>
        `).join('');
    }, {
        overlapFactor: 0.3,
        probabilityThreshold: 0.9
    });
}