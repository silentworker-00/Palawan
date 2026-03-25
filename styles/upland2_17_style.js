var size = 0;
var placement = 'point';
function categories_upland2_17(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Broad alluvial valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(204,194,85,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collu-alluvial fans':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(202,143,34,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Infilled/localized/enclosed valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(73,215,21,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(217,37,217,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, lower terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,146,135,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low granitic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(209,25,56,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low limestone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(139,60,229,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low meta-volcanic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(231,141,85,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low metamorphic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(189,108,219,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low pyroclastic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(182,212,62,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(111,187,231,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low shale/sandstone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(13,202,17,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,107,207,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                                                  (volcanic hills or mountains)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(76,201,112,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                                             (limestone hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,102,194,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (ultrabasic hill)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,83,148,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Narrow Alluvial plains                                       (width <500m)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(118,204,165,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, gently sloping to undulating':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(25,187,205,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, level to gently sloping':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(176,236,108,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, undulating to rolling':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(54,108,207,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Solutional depressions                         (karst valley, sinkhole)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(82,93,211,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_upland2_17 = function(feature, resolution){
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
    
    var style = categories_upland2_17(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
