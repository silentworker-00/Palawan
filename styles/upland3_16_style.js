var size = 0;
var placement = 'point';
function categories_upland3_16(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Infilled/localized/enclosed valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(104,12,203,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,97,240,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, lower terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,220,15,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low granitic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(67,214,94,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low meta-rock complex hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,19,222,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low metamorphic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(75,210,225,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low pyroclastic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(227,132,88,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(208,166,13,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(88,229,32,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                                                  (volcanic hills or mountains)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(207,117,129,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (ultrabasic hill)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(49,240,170,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower river terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(110,158,217,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_upland3_16 = function(feature, resolution){
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
    
    var style = categories_upland3_16(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
