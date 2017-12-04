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
        
        toggle: function(){
          this.enabled = !this.enabled
          console.log("Captor.enabled:",this.enabled)
          if(this.enabled == false && $('#captor_result').length) {
            $('#captor_result').remove();
          }
        },
      
        enabled: true,

        loadclip: function() {
          var d = null
          if ($('#captor_result').length) {
            d = $('#captor_result') 
          } else {
            d = $('<div>').addClass('result').appendTo('body').attr("id", "captor_result")
            var content = $('<div>').addClass('content').appendTo(d)
            var cross = $('<div>').addClass('cross').appendTo(d).text('X')
            cross.on('click', function(){ d.remove() })
          }
          
          var clip = this.getClipboardContents()
          var list = this.parselist()
          var inlist = list.includes(clip.replace(/(\s|\n)/g, ""))
          d.find('.content').text(clip  + "\n" + inlist)
        },
        
        parselist: function(){
          return captor_list_data.split('\n')
        }
    }
}())
