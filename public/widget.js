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
	addWidget:function(news){
		const ul = document.createElement("ul");
        let parent = document.getElementById(this.id);
        let num = news.length
        document.getElementById("widgetBadgeValue").textContent = num
        parent.appendChild(ul)
        for(let n of news){
            let li = document.createElement("li");
            li.insertAdjacentHTML("beforeend",`
                <p>${n.title}</p>
                <p>${n.author}</p>
                <p>${n.timestamp}</p>
                <p>Подробнее</p>
                <p class="list-item"">Отметить как прочитанное</p>
                <hr>
                `)
            ul.appendChild(li)
           
        }
        const els = document.querySelectorAll(".list-item")
		els.forEach(el=>{
			el.addEventListener("click",function(e){
				e.target.parentElement.style.display = "none";
                if(num > 1)
                    document.getElementById("widgetBadgeValue").textContent = --num
                else
                    document.getElementById("widget").style.display = "none"
			})
		})
	}

}

Widget.init()