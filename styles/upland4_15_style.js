var size = 0;
var placement = 'point';
function categories_upland4_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Broad alluvial valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,223,127,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Collu-alluvial fans':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(203,213,69,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Infilled/localized/enclosed valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,127,106,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Inland/stream valleys':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(83,207,16,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Limestone/karst plains, upper terraces':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(83,211,74,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low basltic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(172,228,67,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low granitic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(65,126,239,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low limestone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(146,122,235,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low meta-rock complex hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,128,166,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low meta-volcanic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(211,126,205,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(169,119,219,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low shale/sandstone hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,175,66,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low ultrabasic hills':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(229,112,122,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Low volcanic complex hills (volcanic cones, <18% slope)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(222,134,191,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                                             (limestone hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(38,48,200,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (ultrabasic hill)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(88,209,183,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, gently sloping to undulating':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(64,167,227,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, level to gently sloping':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,105,233,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Residual terraces, undulating to rolling':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,129,21,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Solutional depressions                         (karst valley, sinkhole)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(52,216,228,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_upland4_15 = function(feature, resolution){
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
    
    var style = categories_upland4_15(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
