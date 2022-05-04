const range = (start, end) => { // range: (number, number) => array // range: (number) => function
    let container = [];   
    if (end === undefined) {
        const secondRange = (end2) => { // secondRange: (number) => array
            let container2 = [];
            if (end2 === 0) {
                return container2;
            }
            for (let i = start ; i <= end2; i++) {
                container2.push(i);
            }
            return container2
        }
        return secondRange;
    }
    if (end === 0) {
        return container;
    }
    for (let i = start; i <= end; i++) {
        container.push(i);
    }
    return container
}
    
module.exports = {
    range,
}
