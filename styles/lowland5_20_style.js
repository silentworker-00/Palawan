var size = 0;
var placement = 'point';
function categories_lowland5_20(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Infilled/localized/ enclosed  valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(185,114,232,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,190,84,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                   (pyroclastic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,215,27,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                 (limestone hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(56,210,107,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (granitic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(89,215,229,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Narrow alluvial plains(<500m width) [interhill mini plains]':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,147,140,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ultrabasic piedmonts / (lower footslopes (ultrabasic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(73,92,204,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_lowland5_20 = function(feature, resolution){
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
    
    var style = categories_lowland5_20(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
