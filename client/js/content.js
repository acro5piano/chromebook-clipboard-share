(function() {
    function getClipBoard() {
        var result = '',
            sandbox = $('#sandbox').val('').select();
        if (document.execCommand('paste')) {
            result = sandbox.val();
        }
        sandbox.val('');
        return result;
    }
    $('#check').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: 'http://localhost:4567/',
            method: 'POST',
            data: {
                'data': getClipBoard(),
            },
        });

        return window.close();
    });
}).call(this);
