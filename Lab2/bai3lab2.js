const class1 = [
    {
        mssv: 'PS0000',
        name: 'Nguyen Van A',
        avgPoint: 8.9,
        avgTraningPoint: 7,
        status: 'pass',
    },
    {
        mssv: 'PS0001',
        name: 'Nguyen Van B',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'pass',
    }
];
const class2 = [
    {
        mssv: 'PS0002',
        name: 'Nguyen Van C',
        avgPoint: 4.9,
        avgTraningPoint: 10,
        status: 'failed',
    },
    {
        mssv: 'PS0003',
        name: 'Nguyen Van D',
        avgPoint: 10,
        avgTraningPoint: 10,
        status: 'pass',
    },
    {
        mssv: 'PS0004',
        name: 'Nguyen Van E',
        avgPoint: 10,
        avgTraningPoint: 2,
        status: 'pass',
    },
]
//  loại bỏ sinh viên có status = "failed"
const allStudentPass = class1.concat(class2).filter(students => students?.status !== "failed");
console.log(allStudentPass);

// sinh viên có điểm số avgPoint từ cao xuống thấp
const studentsAvgPoint = allStudentPass.sort((a, b) => b.avgPoint - a.avgPoint);
console.table(studentsAvgPoint);
// sinh viên có điểm rèn luyện avgTraningPoint từ cao xuống thấp
const avgTraningPoint = allStudentPass.sort((a, b) => b.avgTraningPoint - a.avgTraningPoint);
console.table(avgTraningPoint);

// ong vàng
const YellowBee = allStudentPass.reduce((a, b) => {
    return b.avgTraningPoint > a.avgTraningPoint ? b : a;
}, allStudentPass[0])
console.log(YellowBee);