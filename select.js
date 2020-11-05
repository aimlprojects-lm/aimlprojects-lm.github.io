function SelectD3Graph() {
    var x = document.getElementById("selectD3GraphOption")
    var y = x.options[x.selectedIndex].value;
    console.log(y);

    //document.getElementById("selectionArea").innerHTML = "Found " + y + " options in the list.";
    switch(y){
        case 'anonymous':
            document.getElementById('d3graph_input').src = "./resources/d3graph_input_anonymous.js";
            break;
        case 'positive':
            document.getElementById('d3graph_input').src = "./resources/d3graph_input_positive.js";
            console.log("P");
            break;
        case 'support':
            document.getElementById('d3graph_input').src = "./resources/d3graph_input_support.js";
            console.log("S");
            break;
        
    }
    var svg = d3.select("body")
    .selectAll("svg")
    .data([settings.dataset]);  
    svg.enter().append("svg");

    console.log("xxxxx");
  }

function DisplayText(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').innerHTML  = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
DisplayText('./resources/output_topics.txt');