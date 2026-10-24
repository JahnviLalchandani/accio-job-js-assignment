/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    arr.map((item) => {
        if (item.profession === "developer") {
            console.log(item);
        }
    })
}

function PrintDeveloperbyForEach() {
    arr.forEach((item) => {
        if (item.profession === "developer") {
            console.log(item);
        }
    })
}

function addData() {
    const newData = { id: 4, name: 'susan', age: '20', profession: 'intern' };
    arr.push(newData);
    console.log(arr);
}

function removeAdmin() {
    arr = arr.filter((employee) => employee.profession !== 'admin');
    console.log(arr);
}

function concatenateArray() {
    const newArray = [{ id: 5, name: 'jenny', age: '25', profession: 'designer' }, { id: 6, name: 'emma', age: '22', profession: 'intern' }, { id: 7, name: 'alex', age: '23', profession: 'developer' }]

    let concatedArray = arr.concat(newArray);
    console.log(concatedArray)
}