import usersStore from '../../store/users-store'
import './render-table.css'

let table;

const createTable = () =>{
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML =`
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders,tableBody)
    return table;
} 
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) =>{

    const users = usersStore.getUsers();
    
    if (!table){
        table = createTable();
        element.append(table);

        // TODO: Listeners a la tabla
    }

    let tableHtml ='';
    users.forEach(user =>{
       tableHtml  += `
       <tr>
            <td> ${user.id}  </td>
            <td>${user.balance}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.isActive}</td>
            <td>
                <a href="#/" data-id="${user.id}"> Select </a>
                |
                <a href="#/" data-id"${user.id}"> Delete </a>
                
            </td>
       </tr>

       `
    });


    table.querySelector('tbody').innerHTML=tableHtml;



}