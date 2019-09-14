javascript:
var list;
list[0] = document.getElementById('dependencies_section').getElementsByClassName('dep');
list[1] = document.getElementById('dependents_section').getElementsByClassName('dep');
for(var x=0;x < list.length; x++){
    var dep = list[x];
    for(var i=0;i < dep.length; i++){
        var link=dep[i].querySelector('.name a').href;
        var taskID=link.substr(link.length - 8);
        var waitElement=dep[i].querySelector('.wait_time');
        waitElement.innerHTML='<a href="https://app.liquidplanner.com/space/172009/projects/panel/'+taskID+'" target="_blank" style="font-size:1.5em;">'+taskID+'</a>';
    }
}
