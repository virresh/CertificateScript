//Select the currently active document
var docRef = app.activeDocument;

// Change the array below           <--------------------
var names = ["Person A", "Person B", "Person C", "Person D"];

var fPath = Folder.selectDialog("Select a location to save the certificates to");

var win = new Window("window{text:'Progress',bounds:[100,100,400,150],bar:Progressbar{bounds:[20,20,280,31] , value:0,maxvalue:" + names.length +"}};");
win.show();

pdfSaveOptions = new PDFSaveOptions();

for(x=0; x<names.length; x++){
	// Create a new art layer containing text
	var layerRef = app.activeDocument.layers["Name"]
	// Set the contents of the text layer.
	var textItemRef = layerRef.textItem
	textItemRef.contents = names[x]
	var pdfFile = new File(fPath + "/" + names[x]+".pdf");
	app.activeDocument.saveAs(pdfFile, pdfSaveOptions, true, Extension.LOWERCASE)
	win.bar.value +=1;
}
// Release references
docRef = null
layerRef = null
textItemRef = null

win.close();
alert("Completed saving all the certificates.");