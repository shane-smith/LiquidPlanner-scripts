/**
 * Purpose: Make the Task ID easily accessible in a copy-paste compatible way, without opening the task directly.
 * How to use: Click the bookmark while the "My Work" tab is open.
 */

javascript:
var tasks=document.getElementsByClassName('task_row large_row');
for(var i=0;i < tasks.length; i++){
    var taskID=tasks[i].getAttribute('data-item-id');
    var timerElement=tasks[i].getElementsByClassName('timer_column')[0];
    timerElement.innerHTML='<span style="font-size:1.5em">'+taskID+'</span>';
}