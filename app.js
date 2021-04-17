document.querySelector('ul').addEventListener('click', deleteortick);
function addTask()
{
    var taskele = document.getElementById('task');
    var taskvalue = taskele.value;
    if(taskvalue != '')
        {
            //alert('Task added '+taskvalue);
            let ul = document.querySelector('ul');
              let li = document.createElement('li');
              li.innerHTML = '<span class="delete">×</span><input type="checkbox"><label>'+taskvalue+'</label>';
              ul.appendChild(li);
              document.querySelector('.tasksBoard').style.display = 'block';
            taskele.value=''
        }
    else{
        alert('Please add a task');
    }
}

function clearList()
{
    var ele = document.querySelector('ul');
    ele.innerHTML ='';
    document.querySelector('.tasksBoard').style.display = 'none';
}
function deleteortick(event)
{  
    console.log(event.target.nodeName)
    console.log(event.target.parentNode)
    if(event.target.className=='delete')
        deleteTask(event)
    else{
        tickTask(event)
    }
}
function deleteTask(event)
{
    var liele = event.target.parentNode;
    var ulele = liele.parentNode
    ulele.removeChild(liele)
}
function tickTask(e)
{
    const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
}  }

