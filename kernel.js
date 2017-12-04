(function() {
    window.Captor = {
        addTextfieldToBody: function() {
            return $('<textarea>')
                .css({
                    position: 'absolute',
                    top: -1000,
                    left: -1000
                })
                .appendTo('body');
        },

        copyToClipboard: function(text) {
            var cc = this.addTextfieldToBody();
            cc.val(text).focus().select();
            document.execCommand('Copy');
            cc.remove();
        },

        getClipboardContents: function() {
            var cc = this.addTextfieldToBody();
            cc.val('').focus().select();
            document.execCommand('Paste');

            var val = cc.val();
            cc.remove();
            return val;
        },

        loadclip: function() {
            console.log(this.getClipboardContents())
        }
    }
}())
