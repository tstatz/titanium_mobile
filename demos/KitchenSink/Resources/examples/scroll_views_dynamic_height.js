var win = Ti.UI.currentWindow;

var scrollView = Ti.UI.createScrollView({
	contentHeight:'auto',
	contentWidth:'auto',
});

var header = Ti.UI.createView({
	top:10,
	height:50,
	backgroundColor:'#336699',
	borderRadius:10
});
var headerLabel = Ti.UI.createLabel({color:'white', text:'Header'});
header.add(headerLabel);
scrollView.add(header);

var body = Ti.UI.createView({
	height:'auto',
	backgroundColor:'red',
	borderRadius:10,
	top:70
});
var bodyText = 'i am really long text\ni am really long text\n i am really long text\n i am really long text\n i am really long text\n i am really long text\n i am really long text\n i am really long text\n  ';
var bodyLabel = Ti.UI.createLabel({
	color:'white', 
	text:bodyText,
	height:'auto'
});
body.add(bodyLabel);
scrollView.add(body);

var footer = Ti.UI.createView({
	height:50,
	backgroundColor:'#336699',
	borderRadius:10,
	bottom:10
});
var footerLabel = Ti.UI.createLabel({color:'white', text:'Footer'});
footer.add(footerLabel);
scrollView.add(footer);

win.add(scrollView);