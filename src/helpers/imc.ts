export type Level = {
    title: string
    color: string
    icon: 'down' | 'up'
    imc: number[],
    yourImc?: number
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.599] },
    { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.999] },
    { title: 'Sobrepeso', color: '#e2b039', icon: 'down', imc: [25, 30.999] },
    { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [31, 99] },
]

export const calculateImc = (height: number, weight: number) => {
    const imc = parseFloat((weight / (height * height)).toFixed(3))

    for(let i in levels) {
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy:Level = {...levels[i]}
            levelCopy.yourImc = parseFloat(imc.toFixed(3))
            return levelCopy
        }
    }

    return null
}