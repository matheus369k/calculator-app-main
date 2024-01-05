interface Calcule {
    calcAll: string[];
    result: number;
}

let calcule: Calcule = {
    calcAll: [],
    result: 0,
};

let numberCalc: string = '';

const barToggleThemer = document.querySelectorAll('.btn');

console.log(barToggleThemer);

barToggleThemer.forEach((btn) => {
    btn.addEventListener('click', () => {

        if (btn.textContent === null) return

        if (parseInt(btn.textContent) || parseInt(btn.textContent) == 0 || btn.textContent == '.') {

            numberCalc = `${numberCalc}${btn.textContent}`

        } else if (btn.textContent === '-' || 'x' || '/' || '+') {

            calcule.calcAll.push(numberCalc)

            calcule.calcAll.push(btn.textContent)

            numberCalc = '';

        }

        AddRemoveScreenElement(btn.textContent)

        console.log(calcule.calcAll)

    });
});


document.querySelector('#result')?.addEventListener('click', () => {

    let calcDiviMultipl: number= 0;

    calcule.calcAll.forEach((number, index)=>{

        if (calcule.calcAll.indexOf('/') == 1) {
    
            calcDiviMultipl = Number(calcule.calcAll[index-1]) / Number(calcule.calcAll[index+1])

            calcule.calcAll.splice(index-1, index+2)
            
            calcule.calcAll.calcDiviMultipl
    
        } 
        
        if (calcule.calcAll.indexOf('x') == 1) {
    
            calcDiviMultipl = Number(calcule.calcAll[index-1]) * Number(calcule.calcAll[index+1])

            calcule.calcAll.splice(index-1, index+2)
        }

    })

    console.log(calcDiviMultipl)
    console.log(calcule.calcAll)
})


function AddRemoveScreenElement(textElement: string) {

    //console.log(textElement)

    const screenContainer: HTMLElement | null = document.getElementById('screen');

    if (screenContainer === null || screenContainer.textContent == undefined) return

    if (textElement != 'del' && 'reset') screenContainer.innerText += `${textElement}`;

    if (textElement == 'reset'){ 
        screenContainer.innerText = '';
        calcule.calcAll = []
    }

}

