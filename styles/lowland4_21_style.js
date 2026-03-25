var size = 0;
var placement = 'point';
function categories_lowland4_21(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Limestone/karst plains, lower terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(86,48,209,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, upper terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,89,169,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                   (pyroclastic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,219,222,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                 (limestone hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(187,214,97,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (granitic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(22,103,234,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (meta-volcanic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(88,203,65,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes(metamorphic hills) / lower footslopes (meta rock complex hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(213,96,92,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes(shale/sandstone hills) (<100m elev)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,20,239,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower piedmont plains/ footslopes (volcanic hills) [volcanic plains/ residual terraces]':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(113,234,163,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_lowland4_21 = function(feature, resolution){
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
    
    var style = categories_lowland4_21(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
