
export interface SchoolTransferListItem {
    id: number;
    studentCode: string;
    studentName: string;
    dateOfBirth: Date;
    gender: string;
    transferFrom: string;
    transferSemester: string;
    grade: string;
    transferDate: Date;
}

const TransferListData: SchoolTransferListItem[] = [
    { id: 1, studentCode: "PC07506", studentName: "Nguyễn Văn A", dateOfBirth: new Date("2013-10-10"), gender: "Nam", transferFrom: "THCS A", transferSemester: "Học kỳ 1", grade: "6", transferDate: new Date("2025-02-27") },
    { id: 2, studentCode: "PC07507", studentName: "Trần Thị B", dateOfBirth: new Date("2012-05-15"), gender: "Nữ", transferFrom: "THCS B", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-03-01") },
    { id: 3, studentCode: "PC07508", studentName: "Lê Hoàng C", dateOfBirth: new Date("2011-08-21"), gender: "Nam", transferFrom: "THCS C", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-02-15") },
    { id: 4, studentCode: "PC07509", studentName: "Phạm Thị D", dateOfBirth: new Date("2013-12-30"), gender: "Nữ", transferFrom: "THCS D", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-04-10") },
    { id: 5, studentCode: "PC07510", studentName: "Đỗ Thanh E", dateOfBirth: new Date("2010-03-25"), gender: "Nam", transferFrom: "THCS E", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-05-20") },
    { id: 6, studentCode: "PC07511", studentName: "Nguyễn Thị F", dateOfBirth: new Date("2012-07-18"), gender: "Nữ", transferFrom: "THCS F", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-06-30") },
    { id: 7, studentCode: "PC07512", studentName: "Hoàng Minh G", dateOfBirth: new Date("2011-09-12"), gender: "Nam", transferFrom: "THCS G", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-02-05") },
    { id: 8, studentCode: "PC07513", studentName: "Võ Thị H", dateOfBirth: new Date("2013-04-08"), gender: "Nữ", transferFrom: "THCS H", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-03-12") },
    { id: 9, studentCode: "PC07514", studentName: "Bùi Văn I", dateOfBirth: new Date("2010-11-01"), gender: "Nam", transferFrom: "THCS I", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-07-05") },
    { id: 10, studentCode: "PC07515", studentName: "Trần Thị J", dateOfBirth: new Date("2012-06-22"), gender: "Nữ", transferFrom: "THCS J", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-04-25") },
    { id: 11, studentCode: "PC07516", studentName: "Lê Quốc K", dateOfBirth: new Date("2011-10-14"), gender: "Nam", transferFrom: "THCS K", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-08-15") },
    { id: 12, studentCode: "PC07517", studentName: "Nguyễn Văn L", dateOfBirth: new Date("2013-03-19"), gender: "Nam", transferFrom: "THCS L", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-09-30") },
    { id: 13, studentCode: "PC07518", studentName: "Phạm Thị M", dateOfBirth: new Date("2010-12-09"), gender: "Nữ", transferFrom: "THCS M", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-10-10") },
    { id: 14, studentCode: "PC07519", studentName: "Đỗ Hữu N", dateOfBirth: new Date("2012-02-17"), gender: "Nam", transferFrom: "THCS N", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-11-22") },
    { id: 15, studentCode: "PC07520", studentName: "Võ Thanh O", dateOfBirth: new Date("2011-07-07"), gender: "Nam", transferFrom: "THCS O", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-12-05") },
    { id: 16, studentCode: "PC07521", studentName: "Bùi Thị P", dateOfBirth: new Date("2013-01-27"), gender: "Nữ", transferFrom: "THCS P", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-01-15") },
    { id: 17, studentCode: "PC07522", studentName: "Nguyễn Hoàng Q", dateOfBirth: new Date("2010-05-03"), gender: "Nam", transferFrom: "THCS Q", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-02-28") },
    { id: 18, studentCode: "PC07523", studentName: "Lê Minh R", dateOfBirth: new Date("2012-09-25"), gender: "Nam", transferFrom: "THCS R", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-03-18") },
    { id: 19, studentCode: "PC07524", studentName: "Trần Thị S", dateOfBirth: new Date("2011-06-11"), gender: "Nữ", transferFrom: "THCS S", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-04-08") },
    { id: 20, studentCode: "PC07525", studentName: "Phạm Văn T", dateOfBirth: new Date("2013-08-29"), gender: "Nam", transferFrom: "THCS T", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-05-12") },
    { id: 21, studentCode: "PC07526", studentName: "Nguyễn Thị U", dateOfBirth: new Date("2011-03-15"), gender: "Nữ", transferFrom: "THCS U", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-06-01") },
    { id: 22, studentCode: "PC07527", studentName: "Lê Văn V", dateOfBirth: new Date("2010-09-23"), gender: "Nam", transferFrom: "THCS V", transferSemester: "Học kỳ 2", grade: "9", transferDate: new Date("2025-08-10") },
    { id: 23, studentCode: "PC07528", studentName: "Trần Thị W", dateOfBirth: new Date("2012-01-30"), gender: "Nữ", transferFrom: "THCS W", transferSemester: "Học kỳ 1", grade: "7", transferDate: new Date("2025-11-18") },
    { id: 24, studentCode: "PC07529", studentName: "Hoàng Minh X", dateOfBirth: new Date("2013-05-22"), gender: "Nam", transferFrom: "THCS X", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-09-01") },
    { id: 25, studentCode: "PC07530", studentName: "Võ Thị Y", dateOfBirth: new Date("2011-07-03"), gender: "Nữ", transferFrom: "THCS Y", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-10-15") },
    { id: 26, studentCode: "PC07531", studentName: "Phạm Văn Z", dateOfBirth: new Date("2010-10-11"), gender: "Nam", transferFrom: "THCS Z", transferSemester: "Học kỳ 2", grade: "9", transferDate: new Date("2025-12-20") },
    { id: 27, studentCode: "PC07532", studentName: "Nguyễn Thị AA", dateOfBirth: new Date("2012-11-12"), gender: "Nữ", transferFrom: "THCS AA", transferSemester: "Học kỳ 1", grade: "7", transferDate: new Date("2025-05-14") },
    { id: 28, studentCode: "PC07533", studentName: "Lê Hoàng BB", dateOfBirth: new Date("2013-04-28"), gender: "Nam", transferFrom: "THCS BB", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-07-08") },
    { id: 29, studentCode: "PC07534", studentName: "Trần Thị CC", dateOfBirth: new Date("2011-02-21"), gender: "Nữ", transferFrom: "THCS CC", transferSemester: "Học kỳ 1", grade: "8", transferDate: new Date("2025-03-16") },
    { id: 30, studentCode: "PC07535", studentName: "Hoàng Minh DD", dateOfBirth: new Date("2010-05-29"), gender: "Nam", transferFrom: "THCS DD", transferSemester: "Học kỳ 2", grade: "9", transferDate: new Date("2025-11-28") },
    { id: 31, studentCode: "PC07536", studentName: "Võ Thị EE", dateOfBirth: new Date("2012-07-11"), gender: "Nữ", transferFrom: "THCS EE", transferSemester: "Học kỳ 1", grade: "7", transferDate: new Date("2025-08-22") },
    { id: 32, studentCode: "PC07537", studentName: "Phạm Văn FF", dateOfBirth: new Date("2013-09-17"), gender: "Nam", transferFrom: "THCS FF", transferSemester: "Học kỳ 2", grade: "6", transferDate: new Date("2025-10-04") },
    { id: 33, studentCode: "PC07538", studentName: "Nguyễn Thị GG", dateOfBirth: new Date("2010-12-24"), gender: "Nữ", transferFrom: "THCS GG", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-04-18") },
    { id: 34, studentCode: "PC07539", studentName: "Lê Hoàng HH", dateOfBirth: new Date("2012-02-27"), gender: "Nam", transferFrom: "THCS HH", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-05-23") },
    { id: 35, studentCode: "PC07540", studentName: "Trần Thị II", dateOfBirth: new Date("2013-06-16"), gender: "Nữ", transferFrom: "THCS II", transferSemester: "Học kỳ 1", grade: "6", transferDate: new Date("2025-06-27") },
    { id: 36, studentCode:"PC07541",studentName:"Hoàng Minh JJ", dateOfBirth: new Date("2011-08-02"), gender: "Nam", transferFrom: "THCS JJ", transferSemester: "Học kỳ 2", grade: "8", transferDate: new Date("2025-07-13") },
    { id: 37, studentCode: "PC07542", studentName: "Võ Thị KK", dateOfBirth: new Date("2010-09-19"), gender: "Nữ", transferFrom: "THCS KK", transferSemester: "Học kỳ 1", grade: "9", transferDate: new Date("2025-08-24") },
    { id: 38, studentCode: "PC07543", studentName: "Phạm Văn LL", dateOfBirth: new Date("2012-10-25"), gender: "Nam", transferFrom: "THCS LL", transferSemester: "Học kỳ 2", grade: "7", transferDate: new Date("2025-09-18") },
    { id: 39, studentCode: "PC07544", studentName: "Nguyễn Thị MM", dateOfBirth: new Date("2013-12-30"), gender: "Nữ", transferFrom: "THCS MM", transferSemester: "Học kỳ 1", grade: "6", transferDate: new Date("2025-10-31") },
    { id: 40, studentCode: "PC07545", studentName: "Lê Hoàng NN", dateOfBirth: new Date("2010-03-27"), gender: "Nam", transferFrom: "THCS NN", transferSemester: "Học kỳ 2", grade: "9", transferDate: new Date("2025-12-15") }
];
export default TransferListData;