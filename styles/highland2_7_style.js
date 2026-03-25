var size = 0;
var placement = 'point';
function categories_highland2_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Conglomeratic mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,211,91,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'High metamorphic  hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(200,88,208,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Intermontane valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(19,94,208,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Meta rock complex mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(148,118,230,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Meta-volcanic mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(176,239,130,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Metamorphic mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(30,201,190,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Shale/sandstone mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(105,204,131,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ultrabasic mountains':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,140,117,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_highland2_7 = function(feature, resolution){
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
    
    var style = categories_highland2_7(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
