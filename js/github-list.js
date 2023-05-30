var repos = [];

$.get("api.github.com/users/LucasFerrenti/repos", function(data){
    repos = data;
    console.log(data);
    var list = $("#git-list");

    data.forEach(element => {
        list.append( "<strong>" + element.name +"</strong>" );
    });
});