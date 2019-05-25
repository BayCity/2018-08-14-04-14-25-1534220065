module.exports = function main(c) {

    var output=new Array();
    for(var k=0;k<3;k++){                        
        output[k]=new Array();
      }
    
    for(var i=0;i<3;i++){
        for(var j=0;j<c.length;j++){
            if(i==0) {
                if (c[j] == '1' || c[j] == '4')
                    output[i][j]="...";
                else
                    output[i][j]="._.";
            }
            if(i==1) {
                if (c[j] == '1' || c[j] == '7')
                    output[i][j]="..|" ;
                else if (c[j] == '0')
                    output[i][j]="|.|" ;
                else if (c[j] == '2' || c[j] == '3')
                    output[i][j]="._|" ;
                else if (c[j] == '4' || c[j] == '8' || c[j] == '9')
                    output[i][j]="|_|" ;
                else
                    output[i][j]="|_." ;
            }
            if(i==2) {
                if (c[j] == '0' || c[j] == '6' || c[j] == '8')
                    output[i][j]="|_|";
                else if (c[j] == '1' || c[j] == '4' || c[j] == '7' || c[j] == '9')
                    output[i][j]="..|" ;
                else if (c[j] == '2')
                    output[i][j]="|_." ;
                else
                    output[i][j]="._|" ;
            }
        }
    }
   
     var strs=output[0].join(" ") + "\n" + output[1].join(" ")+ "\n" + output[2].join(" ") + "\n";
     
     return strs;
};