interface Calcule {
    calcAll: string[];
    caclUmount: string[];
    result: number;
}

let calcule: Calcule = {
    calcAll: [],
    caclUmount: [],
    result: 0,
};

let numberCalc: string = '';

const barToggleThemer = document.querySelectorAll('.btn');

function indexOfItem(indexOf: string): number {
    return calcule.calcAll.indexOf(indexOf);
}

function includesItems(include: string): boolean {
    return calcule.calcAll.includes(include);
}

// console.log(barToggleThemer);

barToggleThemer.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        e.stopPropagation();

        if (btn.textContent === null) return

        mountCalc(btn.textContent)

        //console.log(isNaN(Number(calcule.calcAll[calcule.calcAll.length - 1])))

        //console.log(calcule.calcAll)
    });
});

function mountCalc(item: string) {
    //console.log(calcule.caclUmount.length)

    if (
        (
            item != 'del' &&
            item != 'reset' &&
            item != '.' &&
            (
                (
                    item != '-' && calcule.caclUmount.length == 0

                ) || (

                    calcule.caclUmount.length != 0
                )
            )
        ) && (
            isNaN(parseInt(item)
            ) && (
                isNaN(Number(calcule.caclUmount[calcule.caclUmount.length - 1]))
                ||
                calcule.caclUmount.length == 0
            )
        )
    ) {

        return

    }

    calcule.caclUmount.push(item)

    AddRemoveScreenElement(calcule.caclUmount, false)

    //console.log(calcule.caclUmount)

}

function Calc() {

    calcule.caclUmount = []

    if (includesItems('x') || includesItems('/')) {

        calcule.calcAll.forEach((item, index) => {
            

            if (item == 'x') {

                compostCalcSide(index);

            } 
            
            if (item == '/') {

                compostCalcSide(index);

            }

        })

    } else if (includesItems('+') || includesItems('-')) {

        calcule.calcAll.forEach((item, index) => {

            if (item == '+') {

                compostCalcSide(index);

            }
            
            if (item == '-') {

                compostCalcSide(index);

            }

        })

    } else if (calcule.calcAll.length <= 1) {

        for (let index = 0; index < calcule.calcAll[0].length; index++) {

            calcule.caclUmount.push(calcule.calcAll[0][index])

        }

        AddRemoveScreenElement(calcule.caclUmount, true)

    }
}

document.querySelector('#result')?.addEventListener('click', (e) => {

    e.stopPropagation();

    calcule.caclUmount.push('=')

    for (let index = 0; index < calcule.caclUmount.length; index++) {

        if (
            parseInt(calcule.caclUmount[index]) ||
            parseInt(calcule.caclUmount[index]) == 0 ||
            calcule.caclUmount[index] == '.' ||
            (
                calcule.caclUmount[index] == '-' && index == 0
            )
        ) {

            numberCalc = `${numberCalc}${calcule.caclUmount[index]}`

        } else if (!Number(calcule.caclUmount[index])) {

            if (numberCalc) calcule.calcAll.push(numberCalc)

            calcule.calcAll.push(calcule.caclUmount[index])

            numberCalc = '';
        }

    }

    //console.log(calcule.calcAll)

    if (calcule.caclUmount.includes('=')) calcule.caclUmount.pop()
    if (calcule.calcAll.includes('=')) calcule.calcAll.pop()

    if (Number(calcule.caclUmount[calcule.caclUmount.length - 1])) Calc()

});

function compostCalcSide(index: number) {

    let calc: number = 0;
    var cont = 0;

    switch (calcule.calcAll[index]) {

        case '/':

            calc = Number(calcule.calcAll[index - 1]) / Number(calcule.calcAll[index + 1]);
            cont++

            break

        case 'x':

            calc = Number(calcule.calcAll[index - 1]) * Number(calcule.calcAll[index + 1]);
            cont++

            break

        case '+':

            calc = Number(calcule.calcAll[index - 1]) + Number(calcule.calcAll[index + 1]);
            cont++

            break

        case '-':

            calc = Number(calcule.calcAll[index - 1]) - Number(calcule.calcAll[index + 1]);
            cont++

            break
    }

    console.log(calc, index, cont)
    console.log(calcule.calcAll)

    calcule.calcAll.splice(index - 1, index + 2, `${calc}`)

    Calc()
}

function AddRemoveScreenElement(textElement: string[], confimation: boolean) {

    //console.log(textElement)

    const screenContainer: HTMLElement | null = document.getElementById('screen');

    if (screenContainer === null) return

    if (confimation) calcule.calcAll = []

    for (const index in textElement) {

        if (textElement[index] == '=') continue

        if (textElement.includes('del')) calcule.caclUmount.splice(textElement.length - 2, textElement.length);

        if (textElement.includes('reset')) {

            calcule.caclUmount = []

            break

        } else if (parseInt(index) === 0) {

            screenContainer.innerText = `${textElement[index]}`;

        } else {

            screenContainer.innerText += `${textElement[index]}`;

        }
    }

    if (calcule.caclUmount.length == 0) screenContainer.innerText = '';

}

