const Widget = {
	id:"widget",
	init:function(){
		if(!document.getElementById(this.id)){
            console.log("Неверный ID")
        }else{
            let self = this;
            const xhr =  new XMLHttpRequest() ;
            xhr.open('GET', 'http://localhost:3000/api/news', true);
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            xhr.send()
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status != 200) {
                        alert( "ERR" )
                    } 
                    else {
                        let news = JSON.parse(xhr.responseText);
                        self.addWidget(news)
                    }
                }
            };
        }
	},
	addWidget:function(data){
		const ul_ = document.createElement("ul");
        let parent = document.getElementById(this.id);
        parent.appendChild(ul_)
        for(let key in data){
            let li_ = document.createElement("li");
            li_.textContent = `${key}:${data[key]}`
            ul_.appendChild(li_)
        }
	}

}

Widget.init()