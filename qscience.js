function onsearch() {
	alert("onsubmit");
	if(!livingscience) 
	{
		livingscience = new ch.ethz.livingscience.gwtclient.api.LivingScienceSearch();
		livingscience.setMap("mapcontainer");
	}
	
	if (!livingscience) return;
	document.getElementById("#watchProgress").innerHTML = "Search started...";
	var query = document.getElementById("#edit-search-button").value;
	console.log("query: " + query);
	livingscience.search(query, function(publications) {
		document.getElementById("#watchProgress").innerHTML = "Search finished.";

		var html = "";
		if (publications)
		{
		    for (var i=0; i<publications.length; i++)
			{
				var pub = publications[i];
				html += "<p>";
				if (pub.authors)
				{
					for (var j=0; j<pub.authors.length; j++)
					{
						var author = pub.authors[j];
						html += author.name;
						if (j < pub.authors.length - 1) html += ", ";
					}
				}
				html += " (" + pub.year + "): <b>" + pub.title + "</b>";
				html += "</p>";
			}
		}
		document.getElementById("#searchResults").innerHTML = html;
	});
}
