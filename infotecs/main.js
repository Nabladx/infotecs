//sort
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});
//edit
for(var i = 1; i < table.rows.length; i++)
    {      
        table.rows[i].onclick = function()
        {                       
            rIndex = this.rowIndex;
            console.log(rIndex);                          
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("ab").value = this.cells[2].innerHTML;
            document.getElementById("eyeColor").value = this.cells[3].innerHTML;
            document.getElementById("editform").style.display="inline";
        };                   
    }        

    function editRow()
    {
        table.rows[rIndex].cells[0].innerHTML = document.getElementById("fname").value;
        table.rows[rIndex].cells[1].innerHTML = document.getElementById("lname").value;
        table.rows[rIndex].cells[2].innerHTML = document.getElementById("ab").value;
        table.rows[rIndex].cells[3].innerHTML = document.getElementById("eyeColor").value;
    } 
        
    function cancel()
    {
        if(document.getElementById("editform").style.display=="inline")
        {
            document.getElementById("editform").style.display="none";
        }
    }
    
    function show_hide_about()
    {
        if(document.getElementById("about").style.display=="inline")
        {
            document.getElementById("about").style.display="none";
        }
        else{
            document.getElementById("about").style.display="inline"
        }
    }

    

