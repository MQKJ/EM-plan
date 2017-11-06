$(function(){
    /*$('.sign-name').on('mousedown',function(){
       $('.sign-name').remove(); 
    })*/
            
    $(function(){
        var signBxH = $('.esign-sign').height();
        var signBxW = $('.esign-sign').width();
        //初始化插件 
        //设置canvas宽度和高度 
        var dHeight = signBxH;  
        var dWidth = signBxW;   
  
        $("#signature").jSignature({height:dHeight,width:dWidth, signatureLine:true});//初始化调整手写屏大小  
  
    }) 
    //保存签名
    $('#signOk').click(function(){

        var $sigdiv = $("#signature");  
//        $sigdiv.jSignature() // inits the jSignature widget.  
        // after some doodling...  
//        $sigdiv.jSignature("reset") // clears the canvas and rerenders the decor on it.  
        var datapair = $sigdiv.jSignature("getData", "svgbase64")   
        // console.log(datapair[0]);
        // console.log(datapair[1].length);
        // console.log(datapair[2]);
        sessionStorage['signImg'] =  datapair;
        if (datapair[1].length<=312) {
        } else {
            window.location.href='signPhoto'
        } 
        /**/
//          datapair = ["image/svg+xml;base64","PD94bWwgdmVyc2lvbj0iMS4wIi  
//          BlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2Zy  
//          BQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My  
//          5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHhtbG5zPS  
//          JodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiB3aWR0aD  
//          0iMzEiIGhlaWdodD0iMzQiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMD  
//          AwMCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm  
//          9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0gMSAxIGMgMC4xMiAwLjExIDUuMDEgMy  
//          43NiA3IDYgYyAzLjI1IDMuNjUgNS43MSA4LjM1IDkgMTIgYyAyLjY0IDIuOTMgNi  
//          4zNyA1LjE2IDkgOCBjIDEuNTggMS43IDQgNiA0IDYiLz48L3N2Zz4="] 
    })
    //清除图片
    $('#clear').click(function(){
        var $sigdiv = $("#signature");  
        $sigdiv.jSignature("reset");  
        $("#images img").remove();  
    }) 

});

