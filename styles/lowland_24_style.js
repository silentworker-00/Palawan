var size = 0;
var placement = 'point';
function categories_lowland_24(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Collu-alluvial fans':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(228,72,92,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                   (pyroclastic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(184,224,115,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes                 (limestone hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(84,136,220,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes (granitic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,151,26,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes sedimentary hills with (unconsolidated cinglomerate, shale and lenses of corraline limestone)/lower footslopes (meta-sedimentary hills)/lower footslopes (complex sedimentary hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,79,204,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lower footslopes(metamorphic hills) / lower footslopes (meta rock complex hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(121,218,205,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ultrabasic piedmonts / (lower footslopes (ultrabasic hills)':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(230,92,214,0.5)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_lowland_24 = function(feature, resolution){
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
    
    var style = categories_lowland_24(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
