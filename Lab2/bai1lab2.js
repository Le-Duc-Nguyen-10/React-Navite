let in_so = (a, b) => {
    let even_number = 0, odd_number = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            even_number++;
        } else {
            odd_number++;
        }
    }
    console.log("Tổng số chẵn là : ", even_number);
    console.log("Tổng số lẽ là : ", odd_number);
}
in_so(2, 10);   