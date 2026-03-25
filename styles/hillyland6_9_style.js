var size = 0;
var placement = 'point';
function categories_hillyland6_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(101,221,115,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High basaltic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,104,157,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High limestone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,226,24,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High meta-volcanic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(180,116,210,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High shale /sandstone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,238,234,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(89,112,215,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_hillyland6_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("DESCRIPTIO");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_hillyland6_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
