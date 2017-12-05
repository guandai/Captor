(function() {
    window.Captor = {
        addTextfieldToBody: function() {
            return $('<textarea>')
                .addClass('.hidden_text')
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
        
        toggle: function(){
          this.enabled = !this.enabled
          console.log("Captor.enabled:",this.enabled)
          if(this.enabled == false && $('#captor_result').length) {
            $('#captor_result').remove();
          }
        },
      
        enabled: true,

        test_clip: function() {
          var clipboard_str = this.getClipboardContents()
          var list = this.parselist()
          return list.includes(clipboard_str.replace(/(\s|\n)/g, ""))
        },
        
        get_msg_div: function() {
          var d = null
          if ($('#captor_result').length) {
            d = $('#captor_result') 
          } else {
            d = $('<div>').addClass('result').appendTo('body').attr("id", "captor_result")
            var content = $('<div>').addClass('content').appendTo(d)
            var cross = $('<div>').addClass('cross').appendTo(d).text('X')
            cross.on('click', function(){ d.remove() })
          }
          return d
        },

        quickshow: function(msg) {
          var d = this.get_msg_div()
          d.find('.content').text(msg)
          d.fadeIn( 200 ).delay( 1000 ).fadeOut( 200 )
        },
        
        parselist: () => captor_list_data.split('\n')
    }
}())
