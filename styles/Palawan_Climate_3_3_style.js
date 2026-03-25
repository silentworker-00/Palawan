var size = 0;
var placement = 'point';

var style_Palawan_Climate_3_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "13.0px \'Arial\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("CLIMATE") !== null) {
        labelText = String(feature.get("CLIMATE"));
    }
    var style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,180,60,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
