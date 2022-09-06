/* Open when someone clicks on the span element */
function openNav(){
  document.getElementById("myNav").style.width = "50%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function loadRSS(){
	
	var proxy = 'https://cors-anywhere.herokuapp.com/';
	
	var url = "https://www.nasa.gov/content/nasa-rss-feeds";
	
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send;
	
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			parseRSS(this);
			
		}
	};
	
	function parseRSS(rss){
		let txt, nodes;
		txt = "";
		const items = rss.responseXML.getElementsByTagName("item");
		
		for (let i = 0; i< items.length; i++){
			nodes = items[i].children;
			let title, pubdate, description, link;
			for (let j = 0; < nodes.length; j++){
				if (nodes[j].tagName == "title"){
					title = nodes[j].innerHTML;
					}else if (nodes[j].tagName == "link"){
						link = nodes[j].innerHTML;
					}else if (nodes[j].tagName== "description"){
						description = nodes[j].innerHTML;
					}else if (nodes[j].tagName == "pubdate"){
						pubdate = nodes[j].innerHTML;
					}
					}
			}
		}
		</div>
						<div class="box">
							<a herf="${link}">
								<div class="item">
									<h3>${title}<h3>
									<p>${description}</p>
									<p>${pubdate}</p>
								</div>
							</a>
						
						</div>
		document.getElementById("RssFeed").innerHTML = txt;
	}
	
	
}