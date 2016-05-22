chrome.browserAction.onClicked.addListener(function(tab){
    function getClipBoard() {
        var result = '',
            sandbox = $('#sandbox').val('').select();
        if (document.execCommand('paste')) {
            result = sandbox.val();
        }
        sandbox.val('');
        return result;
    }
    function sendClipBoard(data){
        $.ajax({
            url: 'http://localhost:4567/',
            method: 'POST',
            data: {
                'data': data,
            },
        });
    }
    sendClipBoard(getClipBoard());
});

