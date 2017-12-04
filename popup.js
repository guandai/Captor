var ca = $("#captor_switch")
ca.on('click', function(){
	if(ca.text() == 'disabled') {
		ca.text('enabled')
	} else {
	    ca.text('disabled')		
	}
	chrome.tabs.executeScript({code: "Captor.toggle()"});
})
