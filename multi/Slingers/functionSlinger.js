module.exports = {
    clean: function(text){
        if (typeof(text) === "string")        
          return text.replace(/`/g, "`javascript" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
    },
    formatDate: function(toFormate, onlyDate){
        let formatted_date;
        if(onlyDate){
            formatted_date = toFormate.getDate() + "/" + (toFormate.getMonth() + 1) + "/" + toFormate.getFullYear();
        }else{
            formatted_date = toFormate.getDate() + "/" + (toFormate.getMonth() + 1) + "/" + toFormate.getFullYear() + " " + toFormate.getHours() + ":" + toFormate.getMinutes() + ":" + toFormate.getSeconds();
        }
        return formatted_date;
    }
}