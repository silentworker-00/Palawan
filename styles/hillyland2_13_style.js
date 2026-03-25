var size = 0;
var placement = 'point';
function categories_hillyland2_13(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(63,94,207,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High karstic limestone hills, rocky':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,55,20,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High limestone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(187,238,98,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High meta-rock complex hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,165,20,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High meta-volcanic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(135,82,219,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High sedimentary hills (unconsolidated, shale and lenses of corraline limestone)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,67,214,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High shale /sandstone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(206,23,99,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,198,233,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High volcanic complex hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(60,215,150,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_hillyland2_13 = function(feature, resolution){
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
    
    var style = categories_hillyland2_13(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
