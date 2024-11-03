const Employees =  [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123"
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123"
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123"
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123"
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123"
      }
    ]
  
  const admin = [ {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
]
  
export const setLocalStorage =() =>{
    localStorage.setItem('employees', JSON.stringify(Employees))
    localStorage.setItem('admin',JSON.stringify(admin))
    
}
  
export const getLocalStorage = ()=>{
    const Employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    console.log(Employees, admin)

}