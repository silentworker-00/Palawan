var size = 0;
var placement = 'point';
function categories_upland_18(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Broad alluvial valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(224,208,37,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collu-alluvial fans':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,50,56,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Infilled/localized/enclosed valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(101,219,121,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(102,168,221,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, lower terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(214,147,46,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, upper terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(117,59,203,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low basltic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,13,89,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low Conglomeratic hill':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(49,31,236,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low limestone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(152,216,100,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low meta-volcanic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,68,213,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low metamorphic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(85,224,196,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(239,92,234,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low shale/sandstone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(107,200,214,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(20,63,201,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                                                  (volcanic hills or mountains)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,48,153,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Narrow Alluvial plains                                       (width <500m)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(181,214,73,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, gently sloping to undulating':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(82,204,141,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, undulating to rolling':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,96,41,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_upland_18 = function(feature, resolution){
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
    
    var style = categories_upland_18(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
