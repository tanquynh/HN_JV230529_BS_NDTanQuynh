// query selector
let btnSelector =document.querySelector('.save')
let tbodySelector = document.querySelector('.tbody');
let nameSelector = document.querySelector('#name');
let emailSelector = document.querySelector('#email');
let phoneSelector = document.querySelector('#phone');
let addressSelector = document.querySelector('#address');
let searchSelecttor = document.querySelector('.btn_search');
let inputSearchSelector = document.querySelector('.input_search');
let btnSortSelector = document.querySelector('.arrange');

const validRegex =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
let students =[
    {
        id:crypto.randomUUID(),
        name: 'rikkei',
        email: 'rikkei@gmail.com',
        phone: '0823868888',
        address: 'Hà nội',
        sex: 'nam'
    },
    {
        id:crypto.randomUUID(),
        name: 'academy',
        email: 'academy@gmail.com',
        phone: '0828638888',
        address: 'HCM',
        sex: 'nu'
    }
]

function showStudent() {
        let Result ='';
        for(let i = 0; i < students.length; i++) {
            Result += `<tr>
                            <td>${i +1}</td>
                            <td>${students[i].name}</td>
                            <td>${students[i].email}</td>
                            <td>${students[i].phone}</td>
                            <td>${students[i].address}</td>
                            <td>${students[i].sex}</td>
                            <td> 
                            <button data-id = '${students[i].id}' class ="btn  edit">Edit</button>
                            <button  data-id = '${students[i].id}'class ="btn delete">Delete</button>
                            </td
                            
                    </tr>`
    }
    tbodySelector.innerHTML = Result
    } 


// Thêm sinh viên
function handleAddStudent(event) {
    if(nameSelector.value && emailSelector.value && phoneSelector.value && addressSelector.value) {   
        if(emailSelector.value.trim().match(validRegex)) {
            if(phoneSelector.value.match(phoneno)) {
                let radioValue = document.querySelector('.gender_choose:checked').value; 
                if(btnSelector.classList.contains('update')) {
                    let indexUpdate;
                    for(i = 0; i < students.length; i++) {
                        if(students[i].id === btnSelector.getAttribute('data-id')) {
                            indexUpdate = i;
                            break;
                        }
                    }s
                    students[indexUpdate].name = nameSelector.value;
                    students[indexUpdate].email = emailSelector.value;
                    students[indexUpdate].phone = phoneSelector.value ;
                    students[indexUpdate].address = addressSelector.value;
                    students[indexUpdate].sex = radioValue;
                    showStudent()
                    btnSelector.innerText = 'Lưu lại';
                    btnSelector.classList.remove('update');
                    btnSelector.removeAttribute('data-id');
                    document.querySelector('form').reset();
        
                } else {
            
                    let addNewStudent = {
                        id: crypto.randomUUID(),
                        name: nameSelector.value,
                        email: emailSelector.value,
                        phone: phoneSelector.value,
                        address: addressSelector.value,
                        sex: radioValue
                    }
                    students.push(addNewStudent)
                    showStudent()
                    document.querySelector('form').reset();
                } 
            } else alert("Mời bạn nhập lại số điện thoại"); 
            
        }else alert("Mời bạn nhập lại email");
       
    } else {
        alert("Mời bạn nhập đầy đủ thông tin")
    }
 
}
function handleProcessStudent (event) {
    if(event.target.classList.contains('delete')) {
        let confirmDelete = confirm('Bạn chắc chẵn muốn xóa không?')
        if(confirmDelete) {
            let indexDelete;
            for(i = 0; i < students.length; i++) {
                if(students[i].id  === event.target.getAttribute('data-id')) {
                    indexDelete = i;
                    break
                }    
            }
            students.splice(indexDelete, 1);
            if( event.target.getAttribute('data-id') === btnSelector.getAttribute('data-id') ) {
                document.querySelector('form').reset();
                btnSelector.innerText = 'Lưu lại';
                btnSelector.classList.remove('update');
                btnSelector.removeAttribute('data-id');
            }
            showStudent();
        }   
    }
    else if(event.target.classList.contains('edit')) {
        let indexEdit;
        let idEdit = event.target.getAttribute('data-id');
        for(i = 0; i < students.length; i++) {
            if(students[i].id  === event.target.getAttribute('data-id')) {
                indexEdit = i;
                break
            } 
        }
        nameSelector.value = students[indexEdit].name;
        emailSelector.value = students[indexEdit].email;
        phoneSelector.value = students[indexEdit].phone;
        addressSelector.value = students[indexEdit].address;
        document.querySelector(`input[value=${students[indexEdit].sex}]`).checked = true;
        showStudent()
        btnSelector.innerText = 'Update';
        btnSelector.classList.add('update');
        btnSelector.setAttribute('data-id', idEdit);
    }
}

function handleSearch() {
    let valueSearch = inputSearchSelector.value.toLowerCase();
    let studentsFilter = students.filter(
        function(StudentItem) {
            return StudentItem.name.toLowerCase().indexOf(valueSearch) !== -1;
        }
    )
    let Result = '';
    for(let i = 0; i < studentsFilter.length; i++) {
            Result += `<tr>
                            <td>${i +1}</td>
                            <td>${studentsFilter[i].name}</td>
                            <td>${studentsFilter[i].email}</td>
                            <td>${studentsFilter[i].phone}</td>
                            <td>${studentsFilter[i].address}</td>
                            <td>${studentsFilter[i].sex}</td>
                            <td> 
                            <button data-id = '${studentsFilter[i].id}' class ="btn  edit">Edit</button>
                            <button  data-id = '${studentsFilter[i].id}'class ="btn delete">Delete</button>
                            </td>
                        </tr>`
       
        }
        tbodySelector.innerHTML = Result;  
}
function handleArrange() {
    students.sort(function(sv1,sv2) {
        let a = sv1.name.toLowerCase();
        let b = sv2.name.toLowerCase();
        return a === b ? 0 : a > b ? 1 : -1;
    })
   
    showStudent()
}
showStudent()
btnSelector.addEventListener('click', handleAddStudent)
tbodySelector.addEventListener('click', handleProcessStudent);
searchSelecttor.addEventListener('click', handleSearch);
btnSortSelector.addEventListener('click', handleArrange);
inputSearchSelector.addEventListener('keyup', handleSearch)
