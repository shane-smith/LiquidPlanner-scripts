javascript:
var dependents=document.getElementById('dependents_section').getElementsByClassName('dep');
for(var i=0;i < dependents.length; i++){
    var link=dependents[i].querySelector('.name a').href;
    var taskID=link.substr(link.length - 8);
    var waitElement=dependents[i].querySelector('.wait_time');
    waitElement.innerHTML='<a href="https://app.liquidplanner.com/space/172009/projects/panel/'+taskID+'" target="_blank" style="font-size:1.5em;">'+taskID+'</a>';
}

