var size = 0;
var placement = 'point';
function categories_lowland2_23(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Collu-alluvial fans':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(123,126,220,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Infilled/localized/ enclosed  valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(45,217,240,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(232,125,159,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (basaltic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,165,87,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Narrow alluvial plains(<500m width) [interhill mini plains]':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,124,226,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Solutional depressions (karst valleys, sinkhole)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(157,218,65,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_lowland2_23 = function(feature, resolution){
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
    
    var style = categories_lowland2_23(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
