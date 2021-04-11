export const calcularTotal = (objeto) => {
    let total=0
    Object.entries(objeto).forEach(([key, value]) => {
        if(value > 0){
            total = total + value
        }
    })
    return total
}