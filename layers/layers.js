var wms_layers = [];


var lyr_EsriTopographic_0 = new ol.layer.Tile({
    'title': 'Esri Topographic',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    })
});

var lyr_GoogleMaps_1 = new ol.layer.Tile({
    'title': 'Google Maps',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
    })
});

var lyr_GoogleSatellite_2 = new ol.layer.Tile({
    'title': 'Google Satellite',
    'type': 'base',
    'opacity': 1.000000,


    source: new ol.source.XYZ({
        attributions: ' ',
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});
var format_Palawan_Climate_3_3 = new ol.format.GeoJSON();
var features_Palawan_Climate_3_3 = format_Palawan_Climate_3_3.readFeatures(json_Palawan_Climate_3_3,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Palawan_Climate_3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palawan_Climate_3_3.addFeatures(features_Palawan_Climate_3_3);
var lyr_Palawan_Climate_3_3 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Palawan_Climate_3_3,
    style: style_Palawan_Climate_3_3,
    popuplayertitle: 'Palawan_Climate_3',
    interactive: false,
    title: '<img src="styles/legend/Palawan_Climate_3_3.png" /> Palawan_Climate_3'
});
var format_Palawan_Climate_1_4 = new ol.format.GeoJSON();
var features_Palawan_Climate_1_4 = format_Palawan_Climate_1_4.readFeatures(json_Palawan_Climate_1_4,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Palawan_Climate_1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Palawan_Climate_1_4.addFeatures(features_Palawan_Climate_1_4);
var lyr_Palawan_Climate_1_4 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Palawan_Climate_1_4,
    style: style_Palawan_Climate_1_4,
    popuplayertitle: 'Palawan_Climate_1',
    interactive: false,
    title: '<img src="styles/legend/Palawan_Climate_1_4.png" /> Palawan_Climate_1'
});
var format_highland4_5 = new ol.format.GeoJSON();
var features_highland4_5 = format_highland4_5.readFeatures(json_highland4_5,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_highland4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highland4_5.addFeatures(features_highland4_5);
var lyr_highland4_5 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_highland4_5,
    style: style_highland4_5,
    popuplayertitle: 'highland 4',
    interactive: true,
    title: 'highland 4<br />\
    <img src="styles/legend/highland4_5_0.png" /> High metamorphic  hills<br />' });
var format_highland3_6 = new ol.format.GeoJSON();
var features_highland3_6 = format_highland3_6.readFeatures(json_highland3_6,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_highland3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highland3_6.addFeatures(features_highland3_6);
var lyr_highland3_6 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_highland3_6,
    style: style_highland3_6,
    popuplayertitle: 'highland 3',
    interactive: true,
    title: 'highland 3<br />\
    <img src="styles/legend/highland3_6_0.png" /> High metamorphic  hills<br />' });
var format_highland2_7 = new ol.format.GeoJSON();
var features_highland2_7 = format_highland2_7.readFeatures(json_highland2_7,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_highland2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highland2_7.addFeatures(features_highland2_7);
var lyr_highland2_7 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_highland2_7,
    style: style_highland2_7,
    popuplayertitle: 'highland 2',
    interactive: true,
    title: 'highland 2<br />\
    <img src="styles/legend/highland2_7_0.png" /> Conglomeratic mountains<br />\
    <img src="styles/legend/highland2_7_1.png" /> High metamorphic  hills<br />\
    <img src="styles/legend/highland2_7_2.png" /> Intermontane valleys<br />\
    <img src="styles/legend/highland2_7_3.png" /> Meta rock complex mountains<br />\
    <img src="styles/legend/highland2_7_4.png" /> Meta-volcanic mountains<br />\
    <img src="styles/legend/highland2_7_5.png" /> Metamorphic mountains<br />\
    <img src="styles/legend/highland2_7_6.png" /> Shale/sandstone mountains<br />\
    <img src="styles/legend/highland2_7_7.png" /> Ultrabasic mountains<br />' });
var format_highland_8 = new ol.format.GeoJSON();
var features_highland_8 = format_highland_8.readFeatures(json_highland_8,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_highland_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highland_8.addFeatures(features_highland_8);
var lyr_highland_8 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_highland_8,
    style: style_highland_8,
    popuplayertitle: 'highland',
    interactive: true,
    title: 'highland<br />\
    <img src="styles/legend/highland_8_0.png" /> Conglomeratic mountains<br />\
    <img src="styles/legend/highland_8_1.png" /> Meta rock complex mountains<br />\
    <img src="styles/legend/highland_8_2.png" /> Meta-volcanic mountains<br />\
    <img src="styles/legend/highland_8_3.png" /> Metamorphic mountains<br />\
    <img src="styles/legend/highland_8_4.png" /> Shale/sandstone mountains<br />\
    <img src="styles/legend/highland_8_5.png" /> Ultrabasic mountains<br />' });
var format_hillyland6_9 = new ol.format.GeoJSON();
var features_hillyland6_9 = format_hillyland6_9.readFeatures(json_hillyland6_9,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland6_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland6_9.addFeatures(features_hillyland6_9);
var lyr_hillyland6_9 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland6_9,
    style: style_hillyland6_9,
    popuplayertitle: 'hillyland 6',
    interactive: true,
    title: 'hillyland 6<br />\
    <img src="styles/legend/hillyland6_9_0.png" /> Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression<br />\
    <img src="styles/legend/hillyland6_9_1.png" /> High basaltic hills<br />\
    <img src="styles/legend/hillyland6_9_2.png" /> High limestone hills<br />\
    <img src="styles/legend/hillyland6_9_3.png" /> High meta-volcanic hills<br />\
    <img src="styles/legend/hillyland6_9_4.png" /> High shale /sandstone hills<br />\
    <img src="styles/legend/hillyland6_9_5.png" /> High ultrabasic hills<br />' });
var format_hillyland5_10 = new ol.format.GeoJSON();
var features_hillyland5_10 = format_hillyland5_10.readFeatures(json_hillyland5_10,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland5_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland5_10.addFeatures(features_hillyland5_10);
var lyr_hillyland5_10 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland5_10,
    style: style_hillyland5_10,
    popuplayertitle: 'hillyland 5',
    interactive: true,
    title: 'hillyland 5<br />\
    <img src="styles/legend/hillyland5_10_0.png" /> Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression<br />\
    <img src="styles/legend/hillyland5_10_1.png" /> High shale /sandstone hills<br />\
    <img src="styles/legend/hillyland5_10_2.png" /> High ultrabasic hills<br />' });
var format_hillyland4_11 = new ol.format.GeoJSON();
var features_hillyland4_11 = format_hillyland4_11.readFeatures(json_hillyland4_11,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland4_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland4_11.addFeatures(features_hillyland4_11);
var lyr_hillyland4_11 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland4_11,
    style: style_hillyland4_11,
    popuplayertitle: 'hillyland 4',
    interactive: true,
    title: 'hillyland 4<br />\
    <img src="styles/legend/hillyland4_11_0.png" /> Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression<br />\
    <img src="styles/legend/hillyland4_11_1.png" /> High metamorphic  hills<br />' });
var format_hillyland3_12 = new ol.format.GeoJSON();
var features_hillyland3_12 = format_hillyland3_12.readFeatures(json_hillyland3_12,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland3_12.addFeatures(features_hillyland3_12);
var lyr_hillyland3_12 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland3_12,
    style: style_hillyland3_12,
    popuplayertitle: 'hillyland 3',
    interactive: true,
    title: 'hillyland 3<br />\
    <img src="styles/legend/hillyland3_12_0.png" /> High basaltic hills<br />\
    <img src="styles/legend/hillyland3_12_1.png" /> High metamorphic  hills<br />\
    <img src="styles/legend/hillyland3_12_2.png" /> High ultrabasic hills<br />\
    <img src="styles/legend/hillyland3_12_3.png" /> High volcanic complex hills<br />' });
var format_hillyland2_13 = new ol.format.GeoJSON();
var features_hillyland2_13 = format_hillyland2_13.readFeatures(json_hillyland2_13,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland2_13.addFeatures(features_hillyland2_13);
var lyr_hillyland2_13 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland2_13,
    style: style_hillyland2_13,
    popuplayertitle: 'hillyland 2',
    interactive: true,
    title: 'hillyland 2<br />\
    <img src="styles/legend/hillyland2_13_0.png" /> Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression<br />\
    <img src="styles/legend/hillyland2_13_1.png" /> High karstic limestone hills, rocky<br />\
    <img src="styles/legend/hillyland2_13_2.png" /> High limestone hills<br />\
    <img src="styles/legend/hillyland2_13_3.png" /> High meta-rock complex hills<br />\
    <img src="styles/legend/hillyland2_13_4.png" /> High meta-volcanic hills<br />\
    <img src="styles/legend/hillyland2_13_5.png" /> High sedimentary hills (unconsolidated, shale and lenses of corraline limestone)<br />\
    <img src="styles/legend/hillyland2_13_6.png" /> High shale /sandstone hills<br />\
    <img src="styles/legend/hillyland2_13_7.png" /> High ultrabasic hills<br />\
    <img src="styles/legend/hillyland2_13_8.png" /> High volcanic complex hills<br />' });
var format_hillyland_14 = new ol.format.GeoJSON();
var features_hillyland_14 = format_hillyland_14.readFeatures(json_hillyland_14,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_hillyland_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hillyland_14.addFeatures(features_hillyland_14);
var lyr_hillyland_14 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_hillyland_14,
    style: style_hillyland_14,
    popuplayertitle: 'hillyland',
    interactive: true,
    title: 'hillyland<br />\
    <img src="styles/legend/hillyland_14_0.png" /> Association of volcanic hills with sharp ridges and scattered limestone hills with some solutional depression<br />\
    <img src="styles/legend/hillyland_14_1.png" /> High limestone hills<br />\
    <img src="styles/legend/hillyland_14_2.png" /> High metamorphic  hills<br />' });
var format_upland4_15 = new ol.format.GeoJSON();
var features_upland4_15 = format_upland4_15.readFeatures(json_upland4_15,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_upland4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_upland4_15.addFeatures(features_upland4_15);
var lyr_upland4_15 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_upland4_15,
    style: style_upland4_15,
    popuplayertitle: 'upland 4',
    interactive: true,
    title: 'upland 4<br />\
    <img src="styles/legend/upland4_15_0.png" /> Broad alluvial valleys<br />\
    <img src="styles/legend/upland4_15_1.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/upland4_15_2.png" /> Infilled/localized/enclosed valleys<br />\
    <img src="styles/legend/upland4_15_3.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/upland4_15_4.png" /> Limestone/karst plains, upper terraces<br />\
    <img src="styles/legend/upland4_15_5.png" /> Low basltic hills<br />\
    <img src="styles/legend/upland4_15_6.png" /> Low granitic hills<br />\
    <img src="styles/legend/upland4_15_7.png" /> Low limestone hills<br />\
    <img src="styles/legend/upland4_15_8.png" /> Low meta-rock complex hills<br />\
    <img src="styles/legend/upland4_15_9.png" /> Low meta-volcanic hills<br />\
    <img src="styles/legend/upland4_15_10.png" /> Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)<br />\
    <img src="styles/legend/upland4_15_11.png" /> Low shale/sandstone hills<br />\
    <img src="styles/legend/upland4_15_12.png" /> Low ultrabasic hills<br />\
    <img src="styles/legend/upland4_15_13.png" /> Low volcanic complex hills (volcanic cones, <18% slope)<br />\
    <img src="styles/legend/upland4_15_14.png" /> Lower footslopes                                             (limestone hills)<br />\
    <img src="styles/legend/upland4_15_15.png" /> Lower footslopes (ultrabasic hill)<br />\
    <img src="styles/legend/upland4_15_16.png" /> Residual terraces, gently sloping to undulating<br />\
    <img src="styles/legend/upland4_15_17.png" /> Residual terraces, level to gently sloping<br />\
    <img src="styles/legend/upland4_15_18.png" /> Residual terraces, undulating to rolling<br />\
    <img src="styles/legend/upland4_15_19.png" /> Solutional depressions                         (karst valley, sinkhole)<br />' });
var format_upland3_16 = new ol.format.GeoJSON();
var features_upland3_16 = format_upland3_16.readFeatures(json_upland3_16,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_upland3_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_upland3_16.addFeatures(features_upland3_16);
var lyr_upland3_16 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_upland3_16,
    style: style_upland3_16,
    popuplayertitle: 'upland 3',
    interactive: true,
    title: 'upland 3<br />\
    <img src="styles/legend/upland3_16_0.png" /> Infilled/localized/enclosed valleys<br />\
    <img src="styles/legend/upland3_16_1.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/upland3_16_2.png" /> Limestone/karst plains, lower terraces<br />\
    <img src="styles/legend/upland3_16_3.png" /> Low granitic hills<br />\
    <img src="styles/legend/upland3_16_4.png" /> Low meta-rock complex hills<br />\
    <img src="styles/legend/upland3_16_5.png" /> Low metamorphic hills<br />\
    <img src="styles/legend/upland3_16_6.png" /> Low pyroclastic hills<br />\
    <img src="styles/legend/upland3_16_7.png" /> Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)<br />\
    <img src="styles/legend/upland3_16_8.png" /> Low ultrabasic hills<br />\
    <img src="styles/legend/upland3_16_9.png" /> Lower footslopes                                                  (volcanic hills or mountains)<br />\
    <img src="styles/legend/upland3_16_10.png" /> Lower footslopes (ultrabasic hill)<br />\
    <img src="styles/legend/upland3_16_11.png" /> Lower river terraces<br />' });
var format_upland2_17 = new ol.format.GeoJSON();
var features_upland2_17 = format_upland2_17.readFeatures(json_upland2_17,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_upland2_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_upland2_17.addFeatures(features_upland2_17);
var lyr_upland2_17 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_upland2_17,
    style: style_upland2_17,
    popuplayertitle: 'upland 2',
    interactive: true,
    title: 'upland 2<br />\
    <img src="styles/legend/upland2_17_0.png" /> Broad alluvial valleys<br />\
    <img src="styles/legend/upland2_17_1.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/upland2_17_2.png" /> Infilled/localized/enclosed valleys<br />\
    <img src="styles/legend/upland2_17_3.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/upland2_17_4.png" /> Limestone/karst plains, lower terraces<br />\
    <img src="styles/legend/upland2_17_5.png" /> Low granitic hills<br />\
    <img src="styles/legend/upland2_17_6.png" /> Low limestone hills<br />\
    <img src="styles/legend/upland2_17_7.png" /> Low meta-volcanic hills<br />\
    <img src="styles/legend/upland2_17_8.png" /> Low metamorphic hills<br />\
    <img src="styles/legend/upland2_17_9.png" /> Low pyroclastic hills<br />\
    <img src="styles/legend/upland2_17_10.png" /> Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)<br />\
    <img src="styles/legend/upland2_17_11.png" /> Low shale/sandstone hills<br />\
    <img src="styles/legend/upland2_17_12.png" /> Low ultrabasic hills<br />\
    <img src="styles/legend/upland2_17_13.png" /> Lower footslopes                                                  (volcanic hills or mountains)<br />\
    <img src="styles/legend/upland2_17_14.png" /> Lower footslopes                                             (limestone hills)<br />\
    <img src="styles/legend/upland2_17_15.png" /> Lower footslopes (ultrabasic hill)<br />\
    <img src="styles/legend/upland2_17_16.png" /> Narrow Alluvial plains                                       (width <500m)<br />\
    <img src="styles/legend/upland2_17_17.png" /> Residual terraces, gently sloping to undulating<br />\
    <img src="styles/legend/upland2_17_18.png" /> Residual terraces, level to gently sloping<br />\
    <img src="styles/legend/upland2_17_19.png" /> Residual terraces, undulating to rolling<br />\
    <img src="styles/legend/upland2_17_20.png" /> Solutional depressions                         (karst valley, sinkhole)<br />' });
var format_upland_18 = new ol.format.GeoJSON();
var features_upland_18 = format_upland_18.readFeatures(json_upland_18,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_upland_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_upland_18.addFeatures(features_upland_18);
var lyr_upland_18 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_upland_18,
    style: style_upland_18,
    popuplayertitle: 'upland',
    interactive: true,
    title: 'upland<br />\
    <img src="styles/legend/upland_18_0.png" /> Broad alluvial valleys<br />\
    <img src="styles/legend/upland_18_1.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/upland_18_2.png" /> Infilled/localized/enclosed valleys<br />\
    <img src="styles/legend/upland_18_3.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/upland_18_4.png" /> Limestone/karst plains, lower terraces<br />\
    <img src="styles/legend/upland_18_5.png" /> Limestone/karst plains, upper terraces<br />\
    <img src="styles/legend/upland_18_6.png" /> Low basltic hills<br />\
    <img src="styles/legend/upland_18_7.png" /> Low Conglomeratic hill<br />\
    <img src="styles/legend/upland_18_8.png" /> Low limestone hills<br />\
    <img src="styles/legend/upland_18_9.png" /> Low meta-volcanic hills<br />\
    <img src="styles/legend/upland_18_10.png" /> Low metamorphic hills<br />\
    <img src="styles/legend/upland_18_11.png" /> Low sedimentary hills (unconsolidated conglomerate, shale and lenses of corraline limestone)<br />\
    <img src="styles/legend/upland_18_12.png" /> Low shale/sandstone hills<br />\
    <img src="styles/legend/upland_18_13.png" /> Low ultrabasic hills<br />\
    <img src="styles/legend/upland_18_14.png" /> Lower footslopes                                                  (volcanic hills or mountains)<br />\
    <img src="styles/legend/upland_18_15.png" /> Narrow Alluvial plains                                       (width <500m)<br />\
    <img src="styles/legend/upland_18_16.png" /> Residual terraces, gently sloping to undulating<br />\
    <img src="styles/legend/upland_18_17.png" /> Residual terraces, undulating to rolling<br />' });
var format_lowland_6_19 = new ol.format.GeoJSON();
var features_lowland_6_19 = format_lowland_6_19.readFeatures(json_lowland_6_19,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland_6_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland_6_19.addFeatures(features_lowland_6_19);
var lyr_lowland_6_19 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland_6_19,
    style: style_lowland_6_19,
    popuplayertitle: 'lowland_6',
    interactive: true,
    title: 'lowland_6<br />\
    <img src="styles/legend/lowland_6_19_0.png" /> broad alluvial plains (>500 m width)<br />' });
var format_lowland5_20 = new ol.format.GeoJSON();
var features_lowland5_20 = format_lowland5_20.readFeatures(json_lowland5_20,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland5_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland5_20.addFeatures(features_lowland5_20);
var lyr_lowland5_20 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland5_20,
    style: style_lowland5_20,
    popuplayertitle: 'lowland 5',
    interactive: true,
    title: 'lowland 5<br />\
    <img src="styles/legend/lowland5_20_0.png" /> Infilled/localized/ enclosed  valleys<br />\
    <img src="styles/legend/lowland5_20_1.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/lowland5_20_2.png" /> Lower footslopes                   (pyroclastic hills)<br />\
    <img src="styles/legend/lowland5_20_3.png" /> Lower footslopes                 (limestone hills)<br />\
    <img src="styles/legend/lowland5_20_4.png" /> Lower footslopes (granitic hills)<br />\
    <img src="styles/legend/lowland5_20_5.png" /> Narrow alluvial plains(<500m width) [interhill mini plains]<br />\
    <img src="styles/legend/lowland5_20_6.png" /> Ultrabasic piedmonts / (lower footslopes (ultrabasic hills)<br />' });
var format_lowland4_21 = new ol.format.GeoJSON();
var features_lowland4_21 = format_lowland4_21.readFeatures(json_lowland4_21,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland4_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland4_21.addFeatures(features_lowland4_21);
var lyr_lowland4_21 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland4_21,
    style: style_lowland4_21,
    popuplayertitle: 'lowland 4',
    interactive: true,
    title: 'lowland 4<br />\
    <img src="styles/legend/lowland4_21_0.png" /> Limestone/karst plains, lower terraces<br />\
    <img src="styles/legend/lowland4_21_1.png" /> Limestone/karst plains, upper terraces<br />\
    <img src="styles/legend/lowland4_21_2.png" /> Lower footslopes                   (pyroclastic hills)<br />\
    <img src="styles/legend/lowland4_21_3.png" /> Lower footslopes                 (limestone hills)<br />\
    <img src="styles/legend/lowland4_21_4.png" /> Lower footslopes (granitic hills)<br />\
    <img src="styles/legend/lowland4_21_5.png" /> Lower footslopes (meta-volcanic hills)<br />\
    <img src="styles/legend/lowland4_21_6.png" /> Lower footslopes(metamorphic hills) / lower footslopes (meta rock complex hills)<br />\
    <img src="styles/legend/lowland4_21_7.png" /> Lower footslopes(shale/sandstone hills) (<100m elev)<br />\
    <img src="styles/legend/lowland4_21_8.png" /> Lower piedmont plains/ footslopes (volcanic hills) [volcanic plains/ residual terraces]<br />' });
var format_lowland3_22 = new ol.format.GeoJSON();
var features_lowland3_22 = format_lowland3_22.readFeatures(json_lowland3_22,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland3_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland3_22.addFeatures(features_lowland3_22);
var lyr_lowland3_22 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland3_22,
    style: style_lowland3_22,
    popuplayertitle: 'lowland 3',
    interactive: true,
    title: 'lowland 3<br />\
    <img src="styles/legend/lowland3_22_0.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/lowland3_22_1.png" /> Infilled/localized/ enclosed  valleys<br />\
    <img src="styles/legend/lowland3_22_2.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/lowland3_22_3.png" /> Limestone/karst plains, lower terraces<br />\
    <img src="styles/legend/lowland3_22_4.png" /> Lower footslopes (basaltic hills)<br />\
    <img src="styles/legend/lowland3_22_5.png" /> Lower river terraces<br />\
    <img src="styles/legend/lowland3_22_6.png" /> Narrow alluvial plains(<500m width) [interhill mini plains]<br />\
    <img src="styles/legend/lowland3_22_7.png" /> Solutional depressions (karst valleys, sinkhole)<br />' });
var format_lowland2_23 = new ol.format.GeoJSON();
var features_lowland2_23 = format_lowland2_23.readFeatures(json_lowland2_23,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland2_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland2_23.addFeatures(features_lowland2_23);
var lyr_lowland2_23 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland2_23,
    style: style_lowland2_23,
    popuplayertitle: 'lowland 2',
    interactive: true,
    title: 'lowland 2<br />\
    <img src="styles/legend/lowland2_23_0.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/lowland2_23_1.png" /> Infilled/localized/ enclosed  valleys<br />\
    <img src="styles/legend/lowland2_23_2.png" /> Inland/stream valleys<br />\
    <img src="styles/legend/lowland2_23_3.png" /> Lower footslopes (basaltic hills)<br />\
    <img src="styles/legend/lowland2_23_4.png" /> Narrow alluvial plains(<500m width) [interhill mini plains]<br />\
    <img src="styles/legend/lowland2_23_5.png" /> Solutional depressions (karst valleys, sinkhole)<br />' });
var format_lowland_24 = new ol.format.GeoJSON();
var features_lowland_24 = format_lowland_24.readFeatures(json_lowland_24,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_lowland_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lowland_24.addFeatures(features_lowland_24);
var lyr_lowland_24 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_lowland_24,
    style: style_lowland_24,
    popuplayertitle: 'lowland',
    interactive: true,
    title: 'lowland<br />\
    <img src="styles/legend/lowland_24_0.png" /> Collu-alluvial fans<br />\
    <img src="styles/legend/lowland_24_1.png" /> Lower footslopes                   (pyroclastic hills)<br />\
    <img src="styles/legend/lowland_24_2.png" /> Lower footslopes                 (limestone hills)<br />\
    <img src="styles/legend/lowland_24_3.png" /> Lower footslopes (granitic hills)<br />\
    <img src="styles/legend/lowland_24_4.png" /> Lower footslopes sedimentary hills with (unconsolidated cinglomerate, shale and lenses of corraline limestone)/lower footslopes (meta-sedimentary hills)/lower footslopes (complex sedimentary hills)<br />\
    <img src="styles/legend/lowland_24_5.png" /> Lower footslopes(metamorphic hills) / lower footslopes (meta rock complex hills)<br />\
    <img src="styles/legend/lowland_24_6.png" /> Ultrabasic piedmonts / (lower footslopes (ultrabasic hills)<br />' });
var format_RiceTerraceNotIrrigated_25 = new ol.format.GeoJSON();
var features_RiceTerraceNotIrrigated_25 = format_RiceTerraceNotIrrigated_25.readFeatures(json_RiceTerraceNotIrrigated_25,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_RiceTerraceNotIrrigated_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceTerraceNotIrrigated_25.addFeatures(features_RiceTerraceNotIrrigated_25);
var lyr_RiceTerraceNotIrrigated_25 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiceTerraceNotIrrigated_25,
    style: style_RiceTerraceNotIrrigated_25,
    popuplayertitle: 'Rice Terrace Not Irrigated',
    interactive: true,
    title: '<img src="styles/legend/RiceTerraceNotIrrigated_25.png" /> Rice Terrace Not Irrigated'
});
var format_RiceTerraceIrrigated_26 = new ol.format.GeoJSON();
var features_RiceTerraceIrrigated_26 = format_RiceTerraceIrrigated_26.readFeatures(json_RiceTerraceIrrigated_26,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_RiceTerraceIrrigated_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceTerraceIrrigated_26.addFeatures(features_RiceTerraceIrrigated_26);
var lyr_RiceTerraceIrrigated_26 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiceTerraceIrrigated_26,
    style: style_RiceTerraceIrrigated_26,
    popuplayertitle: 'Rice Terrace Irrigated',
    interactive: true,
    title: '<img src="styles/legend/RiceTerraceIrrigated_26.png" /> Rice Terrace Irrigated'
});
var format_RiceNotIrrigated_27 = new ol.format.GeoJSON();
var features_RiceNotIrrigated_27 = format_RiceNotIrrigated_27.readFeatures(json_RiceNotIrrigated_27,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_RiceNotIrrigated_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceNotIrrigated_27.addFeatures(features_RiceNotIrrigated_27);
var lyr_RiceNotIrrigated_27 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiceNotIrrigated_27,
    style: style_RiceNotIrrigated_27,
    popuplayertitle: 'Rice Not Irrigated',
    interactive: true,
    title: '<img src="styles/legend/RiceNotIrrigated_27.png" /> Rice Not Irrigated'
});
var format_RiceIrrigated2_28 = new ol.format.GeoJSON();
var features_RiceIrrigated2_28 = format_RiceIrrigated2_28.readFeatures(json_RiceIrrigated2_28,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_RiceIrrigated2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceIrrigated2_28.addFeatures(features_RiceIrrigated2_28);
var lyr_RiceIrrigated2_28 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiceIrrigated2_28,
    style: style_RiceIrrigated2_28,
    popuplayertitle: 'Rice Irrigated 2',
    interactive: true,
    title: '<img src="styles/legend/RiceIrrigated2_28.png" /> Rice Irrigated 2'
});
var format_RiceIrrigated_29 = new ol.format.GeoJSON();
var features_RiceIrrigated_29 = format_RiceIrrigated_29.readFeatures(json_RiceIrrigated_29,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_RiceIrrigated_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceIrrigated_29.addFeatures(features_RiceIrrigated_29);
var lyr_RiceIrrigated_29 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_RiceIrrigated_29,
    style: style_RiceIrrigated_29,
    popuplayertitle: 'Rice Irrigated',
    interactive: true,
    title: '<img src="styles/legend/RiceIrrigated_29.png" /> Rice Irrigated'
});
var format_OilPalm_30 = new ol.format.GeoJSON();
var features_OilPalm_30 = format_OilPalm_30.readFeatures(json_OilPalm_30,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_OilPalm_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OilPalm_30.addFeatures(features_OilPalm_30);
var lyr_OilPalm_30 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_OilPalm_30,
    style: style_OilPalm_30,
    popuplayertitle: 'Oil Palm',
    interactive: true,
    title: '<img src="styles/legend/OilPalm_30.png" /> Oil Palm'
});
var format_MixedVegetables_31 = new ol.format.GeoJSON();
var features_MixedVegetables_31 = format_MixedVegetables_31.readFeatures(json_MixedVegetables_31,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_MixedVegetables_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedVegetables_31.addFeatures(features_MixedVegetables_31);
var lyr_MixedVegetables_31 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_MixedVegetables_31,
    style: style_MixedVegetables_31,
    popuplayertitle: 'Mixed Vegetables',
    interactive: true,
    title: '<img src="styles/legend/MixedVegetables_31.png" /> Mixed Vegetables'
});
var format_MixedFruitTrees_32 = new ol.format.GeoJSON();
var features_MixedFruitTrees_32 = format_MixedFruitTrees_32.readFeatures(json_MixedFruitTrees_32,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_MixedFruitTrees_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixedFruitTrees_32.addFeatures(features_MixedFruitTrees_32);
var lyr_MixedFruitTrees_32 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_MixedFruitTrees_32,
    style: style_MixedFruitTrees_32,
    popuplayertitle: 'Mixed Fruit Trees',
    interactive: true,
    title: '<img src="styles/legend/MixedFruitTrees_32.png" /> Mixed Fruit Trees'
});
var format_Mangroves_33 = new ol.format.GeoJSON();
var features_Mangroves_33 = format_Mangroves_33.readFeatures(json_Mangroves_33,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Mangroves_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mangroves_33.addFeatures(features_Mangroves_33);
var lyr_Mangroves_33 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Mangroves_33,
    style: style_Mangroves_33,
    popuplayertitle: 'Mangroves',
    interactive: true,
    title: '<img src="styles/legend/Mangroves_33.png" /> Mangroves'
});
var format_Mango_34 = new ol.format.GeoJSON();
var features_Mango_34 = format_Mango_34.readFeatures(json_Mango_34,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Mango_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mango_34.addFeatures(features_Mango_34);
var lyr_Mango_34 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Mango_34,
    style: style_Mango_34,
    popuplayertitle: 'Mango',
    interactive: true,
    title: '<img src="styles/legend/Mango_34.png" /> Mango'
});
var format_Fishpond_35 = new ol.format.GeoJSON();
var features_Fishpond_35 = format_Fishpond_35.readFeatures(json_Fishpond_35,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Fishpond_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishpond_35.addFeatures(features_Fishpond_35);
var lyr_Fishpond_35 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Fishpond_35,
    style: style_Fishpond_35,
    popuplayertitle: 'Fishpond',
    interactive: true,
    title: '<img src="styles/legend/Fishpond_35.png" /> Fishpond'
});
var format_Falcata_36 = new ol.format.GeoJSON();
var features_Falcata_36 = format_Falcata_36.readFeatures(json_Falcata_36,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Falcata_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Falcata_36.addFeatures(features_Falcata_36);
var lyr_Falcata_36 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Falcata_36,
    style: style_Falcata_36,
    popuplayertitle: 'Falcata',
    interactive: true,
    title: '<img src="styles/legend/Falcata_36.png" /> Falcata'
});
var format_DragonFruit_37 = new ol.format.GeoJSON();
var features_DragonFruit_37 = format_DragonFruit_37.readFeatures(json_DragonFruit_37,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DragonFruit_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DragonFruit_37.addFeatures(features_DragonFruit_37);
var lyr_DragonFruit_37 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DragonFruit_37,
    style: style_DragonFruit_37,
    popuplayertitle: 'Dragon Fruit',
    interactive: true,
    title: '<img src="styles/legend/DragonFruit_37.png" /> Dragon Fruit'
});
var format_DiversifiedCrops_38 = new ol.format.GeoJSON();
var features_DiversifiedCrops_38 = format_DiversifiedCrops_38.readFeatures(json_DiversifiedCrops_38,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DiversifiedCrops_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiversifiedCrops_38.addFeatures(features_DiversifiedCrops_38);
var lyr_DiversifiedCrops_38 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DiversifiedCrops_38,
    style: style_DiversifiedCrops_38,
    popuplayertitle: 'Diversified Crops',
    interactive: true,
    title: '<img src="styles/legend/DiversifiedCrops_38.png" /> Diversified Crops'
});
var format_Corn_39 = new ol.format.GeoJSON();
var features_Corn_39 = format_Corn_39.readFeatures(json_Corn_39,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Corn_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corn_39.addFeatures(features_Corn_39);
var lyr_Corn_39 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Corn_39,
    style: style_Corn_39,
    popuplayertitle: 'Corn',
    interactive: true,
    title: '<img src="styles/legend/Corn_39.png" /> Corn'
});
var format_Coffee_40 = new ol.format.GeoJSON();
var features_Coffee_40 = format_Coffee_40.readFeatures(json_Coffee_40,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Coffee_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coffee_40.addFeatures(features_Coffee_40);
var lyr_Coffee_40 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Coffee_40,
    style: style_Coffee_40,
    popuplayertitle: 'Coffee',
    interactive: true,
    title: '<img src="styles/legend/Coffee_40.png" /> Coffee'
});
var format_Coconut2_41 = new ol.format.GeoJSON();
var features_Coconut2_41 = format_Coconut2_41.readFeatures(json_Coconut2_41,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Coconut2_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coconut2_41.addFeatures(features_Coconut2_41);
var lyr_Coconut2_41 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Coconut2_41,
    style: style_Coconut2_41,
    popuplayertitle: 'Coconut 2',
    interactive: true,
    title: '<img src="styles/legend/Coconut2_41.png" /> Coconut 2'
});
var format_Coconut_42 = new ol.format.GeoJSON();
var features_Coconut_42 = format_Coconut_42.readFeatures(json_Coconut_42,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Coconut_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Coconut_42.addFeatures(features_Coconut_42);
var lyr_Coconut_42 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Coconut_42,
    style: style_Coconut_42,
    popuplayertitle: 'Coconut',
    interactive: true,
    title: '<img src="styles/legend/Coconut_42.png" /> Coconut'
});
var format_Citrus_43 = new ol.format.GeoJSON();
var features_Citrus_43 = format_Citrus_43.readFeatures(json_Citrus_43,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Citrus_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Citrus_43.addFeatures(features_Citrus_43);
var lyr_Citrus_43 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Citrus_43,
    style: style_Citrus_43,
    popuplayertitle: 'Citrus',
    interactive: true,
    title: '<img src="styles/legend/Citrus_43.png" /> Citrus'
});
var format_Cashew_44 = new ol.format.GeoJSON();
var features_Cashew_44 = format_Cashew_44.readFeatures(json_Cashew_44,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Cashew_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cashew_44.addFeatures(features_Cashew_44);
var lyr_Cashew_44 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Cashew_44,
    style: style_Cashew_44,
    popuplayertitle: 'Cashew',
    interactive: true,
    title: '<img src="styles/legend/Cashew_44.png" /> Cashew'
});
var format_Calamansi_45 = new ol.format.GeoJSON();
var features_Calamansi_45 = format_Calamansi_45.readFeatures(json_Calamansi_45,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Calamansi_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Calamansi_45.addFeatures(features_Calamansi_45);
var lyr_Calamansi_45 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Calamansi_45,
    style: style_Calamansi_45,
    popuplayertitle: 'Calamansi',
    interactive: true,
    title: '<img src="styles/legend/Calamansi_45.png" /> Calamansi'
});
var format_Cacao_46 = new ol.format.GeoJSON();
var features_Cacao_46 = format_Cacao_46.readFeatures(json_Cacao_46,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Cacao_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cacao_46.addFeatures(features_Cacao_46);
var lyr_Cacao_46 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Cacao_46,
    style: style_Cacao_46,
    popuplayertitle: 'Cacao',
    interactive: true,
    title: '<img src="styles/legend/Cacao_46.png" /> Cacao'
});
var format_Banana_47 = new ol.format.GeoJSON();
var features_Banana_47 = format_Banana_47.readFeatures(json_Banana_47,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_Banana_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Banana_47.addFeatures(features_Banana_47);
var lyr_Banana_47 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_Banana_47,
    style: style_Banana_47,
    popuplayertitle: 'Banana',
    interactive: true,
    title: '<img src="styles/legend/Banana_47.png" /> Banana'
});
var format_DistrictIII_48 = new ol.format.GeoJSON();
var features_DistrictIII_48 = format_DistrictIII_48.readFeatures(json_DistrictIII_48,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictIII_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictIII_48.addFeatures(features_DistrictIII_48);
var lyr_DistrictIII_48 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictIII_48,
    style: style_DistrictIII_48,
    popuplayertitle: 'District III',
    interactive: false,
    title: '<img src="styles/legend/DistrictIII_48.png" /> District III'
});
var format_DistrictII_49 = new ol.format.GeoJSON();
var features_DistrictII_49 = format_DistrictII_49.readFeatures(json_DistrictII_49,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictII_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictII_49.addFeatures(features_DistrictII_49);
var lyr_DistrictII_49 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictII_49,
    style: style_DistrictII_49,
    popuplayertitle: 'District II',
    interactive: false,
    title: '<img src="styles/legend/DistrictII_49.png" /> District II'
});
var format_DistrictI4_50 = new ol.format.GeoJSON();
var features_DistrictI4_50 = format_DistrictI4_50.readFeatures(json_DistrictI4_50,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictI4_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictI4_50.addFeatures(features_DistrictI4_50);
var lyr_DistrictI4_50 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictI4_50,
    style: style_DistrictI4_50,
    popuplayertitle: 'District I.4',
    interactive: false,
    title: '<img src="styles/legend/DistrictI4_50.png" /> District I.4'
});
var format_DistrictI3_51 = new ol.format.GeoJSON();
var features_DistrictI3_51 = format_DistrictI3_51.readFeatures(json_DistrictI3_51,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictI3_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictI3_51.addFeatures(features_DistrictI3_51);
var lyr_DistrictI3_51 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictI3_51,
    style: style_DistrictI3_51,
    popuplayertitle: 'District I.3',
    interactive: false,
    title: '<img src="styles/legend/DistrictI3_51.png" /> District I.3'
});
var format_DistrictI2_52 = new ol.format.GeoJSON();
var features_DistrictI2_52 = format_DistrictI2_52.readFeatures(json_DistrictI2_52,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictI2_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictI2_52.addFeatures(features_DistrictI2_52);
var lyr_DistrictI2_52 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictI2_52,
    style: style_DistrictI2_52,
    popuplayertitle: 'District I.2',
    interactive: false,
    title: '<img src="styles/legend/DistrictI2_52.png" /> District I.2'
});
var format_DistrictI_53 = new ol.format.GeoJSON();
var features_DistrictI_53 = format_DistrictI_53.readFeatures(json_DistrictI_53,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_DistrictI_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistrictI_53.addFeatures(features_DistrictI_53);
var lyr_DistrictI_53 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_DistrictI_53,
    style: style_DistrictI_53,
    popuplayertitle: 'District I',
    interactive: false,
    title: '<img src="styles/legend/DistrictI_53.png" /> District I'
});
var format_PALAWAN_POINTS_WGS_54 = new ol.format.GeoJSON();
var features_PALAWAN_POINTS_WGS_54 = format_PALAWAN_POINTS_WGS_54.readFeatures(json_PALAWAN_POINTS_WGS_54,
    { dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857' });
var jsonSource_PALAWAN_POINTS_WGS_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PALAWAN_POINTS_WGS_54.addFeatures(features_PALAWAN_POINTS_WGS_54);
var lyr_PALAWAN_POINTS_WGS_54 = new ol.layer.Vector({
    declutter: false,
    source: jsonSource_PALAWAN_POINTS_WGS_54,
    style: style_PALAWAN_POINTS_WGS_54,
    popuplayertitle: 'PALAWAN_POINTS_WGS',
    interactive: true,
    title: '<img src="styles/legend/PALAWAN_POINTS_WGS_54.png" /> PALAWAN_POINTS_WGS'
});
var group_Boundary = new ol.layer.Group({
    layers: [lyr_DistrictIII_48, lyr_DistrictII_49, lyr_DistrictI4_50, lyr_DistrictI3_51, lyr_DistrictI2_52, lyr_DistrictI_53,],
    fold: 'open',
    title: 'Boundary'
});
var group_LandUse = new ol.layer.Group({
    layers: [lyr_RiceTerraceNotIrrigated_25, lyr_RiceTerraceIrrigated_26, lyr_RiceNotIrrigated_27, lyr_RiceIrrigated2_28, lyr_RiceIrrigated_29, lyr_OilPalm_30, lyr_MixedVegetables_31, lyr_MixedFruitTrees_32, lyr_Mangroves_33, lyr_Mango_34, lyr_Fishpond_35, lyr_Falcata_36, lyr_DragonFruit_37, lyr_DiversifiedCrops_38, lyr_Corn_39, lyr_Coffee_40, lyr_Coconut2_41, lyr_Coconut_42, lyr_Citrus_43, lyr_Cashew_44, lyr_Calamansi_45, lyr_Cacao_46, lyr_Banana_47,],
    fold: 'close',
    title: 'Land Use'
});
var group_LowlandLMU = new ol.layer.Group({
    layers: [lyr_lowland_6_19, lyr_lowland5_20, lyr_lowland4_21, lyr_lowland3_22, lyr_lowland2_23, lyr_lowland_24,],
    fold: 'close',
    title: 'Lowland LMU'
});
var group_UplandLMU = new ol.layer.Group({
    layers: [lyr_upland4_15, lyr_upland3_16, lyr_upland2_17, lyr_upland_18,],
    fold: 'close',
    title: 'Upland LMU'
});
var group_HillylandLMU = new ol.layer.Group({
    layers: [lyr_hillyland6_9, lyr_hillyland5_10, lyr_hillyland4_11, lyr_hillyland3_12, lyr_hillyland2_13, lyr_hillyland_14,],
    fold: 'close',
    title: 'Hillyland LMU'
});
var group_HighlandLMU = new ol.layer.Group({
    layers: [lyr_highland4_5, lyr_highland3_6, lyr_highland2_7, lyr_highland_8,],
    fold: 'close',
    title: 'Highland LMU'
});
var group_Climate = new ol.layer.Group({
    layers: [lyr_Palawan_Climate_3_3, lyr_Palawan_Climate_1_4,],
    fold: 'open',
    title: 'Climate'
});
var group_SoilSeries = new ol.layer.Group({
    layers: [],
    fold: 'close',
    title: 'Soil Series'
});

lyr_EsriTopographic_0.setVisible(true); lyr_GoogleMaps_1.setVisible(true); lyr_GoogleSatellite_2.setVisible(true); lyr_Palawan_Climate_3_3.setVisible(true); lyr_Palawan_Climate_1_4.setVisible(true); lyr_highland4_5.setVisible(true); lyr_highland3_6.setVisible(true); lyr_highland2_7.setVisible(true); lyr_highland_8.setVisible(true); lyr_hillyland6_9.setVisible(true); lyr_hillyland5_10.setVisible(true); lyr_hillyland4_11.setVisible(true); lyr_hillyland3_12.setVisible(true); lyr_hillyland2_13.setVisible(true); lyr_hillyland_14.setVisible(true); lyr_upland4_15.setVisible(true); lyr_upland3_16.setVisible(true); lyr_upland2_17.setVisible(true); lyr_upland_18.setVisible(true); lyr_lowland_6_19.setVisible(true); lyr_lowland5_20.setVisible(true); lyr_lowland4_21.setVisible(true); lyr_lowland3_22.setVisible(true); lyr_lowland2_23.setVisible(true); lyr_lowland_24.setVisible(true); lyr_RiceTerraceNotIrrigated_25.setVisible(true); lyr_RiceTerraceIrrigated_26.setVisible(true); lyr_RiceNotIrrigated_27.setVisible(true); lyr_RiceIrrigated2_28.setVisible(true); lyr_RiceIrrigated_29.setVisible(true); lyr_OilPalm_30.setVisible(true); lyr_MixedVegetables_31.setVisible(true); lyr_MixedFruitTrees_32.setVisible(true); lyr_Mangroves_33.setVisible(true); lyr_Mango_34.setVisible(true); lyr_Fishpond_35.setVisible(true); lyr_Falcata_36.setVisible(true); lyr_DragonFruit_37.setVisible(true); lyr_DiversifiedCrops_38.setVisible(true); lyr_Corn_39.setVisible(true); lyr_Coffee_40.setVisible(true); lyr_Coconut2_41.setVisible(true); lyr_Coconut_42.setVisible(true); lyr_Citrus_43.setVisible(true); lyr_Cashew_44.setVisible(true); lyr_Calamansi_45.setVisible(true); lyr_Cacao_46.setVisible(true); lyr_Banana_47.setVisible(true); lyr_DistrictIII_48.setVisible(true); lyr_DistrictII_49.setVisible(true); lyr_DistrictI4_50.setVisible(true); lyr_DistrictI3_51.setVisible(true); lyr_DistrictI2_52.setVisible(true); lyr_DistrictI_53.setVisible(true); lyr_PALAWAN_POINTS_WGS_54.setVisible(true);
var layersList = [lyr_EsriTopographic_0, lyr_GoogleMaps_1, lyr_GoogleSatellite_2, group_Climate, group_HighlandLMU, group_HillylandLMU, group_UplandLMU, group_LowlandLMU, group_LandUse, group_Boundary, lyr_PALAWAN_POINTS_WGS_54];
lyr_Palawan_Climate_3_3.set('fieldAliases', { 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ORIG_FID': 'ORIG_FID', 'CLIMATE': 'CLIMATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Palawan_Climate_1_4.set('fieldAliases', { 'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'ORIG_FID': 'ORIG_FID', 'CLIMATE': 'CLIMATE', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_highland4_5.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_highland3_6.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_highland2_7.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_highland_8.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland6_9.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland5_10.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland4_11.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland3_12.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland2_13.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_hillyland_14.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_upland4_15.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_upland3_16.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_upland2_17.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_upland_18.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_lowland_6_19.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIP': 'DESCRIP', 'SOILDESC': 'SOILDESC', });
lyr_lowland5_20.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_lowland4_21.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_lowland3_22.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_lowland2_23.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_lowland_24.set('fieldAliases', { 'SLOPECLASS': 'SLOPECLASS', 'ELEVCLASS': 'ELEVCLASS', 'LMU': 'LMU', 'DESCRIPTIO': 'DESCRIPTIO', 'SOIL_DEPTH': 'SOIL_DEPTH', 'DRAINAGE_5': 'DRAINAGE_5', 'INHER_FERT': 'INHER_FERT', 'FLOODING_5': 'FLOODING_5', 'EROSION_5': 'EROSION_5', 'ROCK_OUT_5': 'ROCK_OUT_5', 'area': 'area', });
lyr_RiceTerraceNotIrrigated_25.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_RiceTerraceIrrigated_26.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_RiceNotIrrigated_27.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_RiceIrrigated2_28.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_RiceIrrigated_29.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_OilPalm_30.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_MixedVegetables_31.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_MixedFruitTrees_32.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Mangroves_33.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Mango_34.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Fishpond_35.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Falcata_36.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_DragonFruit_37.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_DiversifiedCrops_38.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Corn_39.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Coffee_40.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Coconut2_41.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Coconut_42.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Citrus_43.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Cashew_44.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Calamansi_45.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Cacao_46.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_Banana_47.set('fieldAliases', { 'LANDUSE': 'LANDUSE', });
lyr_DistrictIII_48.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictII_49.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictI4_50.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictI3_51.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictI2_52.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_DistrictI_53.set('fieldAliases', { 'OBJECTID': 'OBJECTID', 'Reg_Name': 'Reg_Name', 'Pro_Name': 'Pro_Name', 'Mun_Name': 'Mun_Name', 'Island': 'Island', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PALAWAN_POINTS_WGS_54.set('fieldAliases', { 'FID_POINTs': 'FID_POINTs', 'OBJECTID_1': 'OBJECTID_1', 'POINT': 'POINT', 'FID_LMU_2_': 'FID_LMU_2_', 'LMU': 'LMU', 'DESCRIP': 'DESCRIP', });
lyr_Palawan_Climate_3_3.set('fieldImages', { 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', 'CLIMATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Palawan_Climate_1_4.set('fieldImages', { 'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'ORIG_FID': 'TextEdit', 'CLIMATE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_highland4_5.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_highland3_6.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_highland2_7.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_highland_8.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland6_9.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland5_10.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland4_11.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland3_12.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland2_13.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_hillyland_14.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_upland4_15.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_upland3_16.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_upland2_17.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_upland_18.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_lowland_6_19.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIP': 'TextEdit', 'SOILDESC': 'TextEdit', });
lyr_lowland5_20.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_lowland4_21.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_lowland3_22.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_lowland2_23.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_lowland_24.set('fieldImages', { 'SLOPECLASS': 'TextEdit', 'ELEVCLASS': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIPTIO': 'TextEdit', 'SOIL_DEPTH': 'TextEdit', 'DRAINAGE_5': 'TextEdit', 'INHER_FERT': 'TextEdit', 'FLOODING_5': 'TextEdit', 'EROSION_5': 'TextEdit', 'ROCK_OUT_5': 'TextEdit', 'area': 'TextEdit', });
lyr_RiceTerraceNotIrrigated_25.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_RiceTerraceIrrigated_26.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_RiceNotIrrigated_27.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_RiceIrrigated2_28.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_RiceIrrigated_29.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_OilPalm_30.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_MixedVegetables_31.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_MixedFruitTrees_32.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Mangroves_33.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Mango_34.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Fishpond_35.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Falcata_36.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_DragonFruit_37.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_DiversifiedCrops_38.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Corn_39.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Coffee_40.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Coconut2_41.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Coconut_42.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Citrus_43.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Cashew_44.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Calamansi_45.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Cacao_46.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_Banana_47.set('fieldImages', { 'LANDUSE': 'TextEdit', });
lyr_DistrictIII_48.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictII_49.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictI4_50.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictI3_51.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictI2_52.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_DistrictI_53.set('fieldImages', { 'OBJECTID': 'TextEdit', 'Reg_Name': 'TextEdit', 'Pro_Name': 'TextEdit', 'Mun_Name': 'TextEdit', 'Island': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PALAWAN_POINTS_WGS_54.set('fieldImages', { 'FID_POINTs': 'TextEdit', 'OBJECTID_1': 'TextEdit', 'POINT': 'Range', 'FID_LMU_2_': 'TextEdit', 'LMU': 'TextEdit', 'DESCRIP': 'TextEdit', });
lyr_Palawan_Climate_3_3.set('fieldLabels', { 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'ORIG_FID': 'no label', 'CLIMATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Palawan_Climate_1_4.set('fieldLabels', { 'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'ORIG_FID': 'no label', 'CLIMATE': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_highland4_5.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'header label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_highland3_6.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_highland2_7.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_highland_8.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland6_9.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland5_10.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland4_11.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland3_12.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland2_13.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_hillyland_14.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_upland4_15.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_upland3_16.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_upland2_17.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_upland_18.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_lowland_6_19.set('fieldLabels', { 'SLOPECLASS': 'no label', 'ELEVCLASS': 'no label', 'LMU': 'no label', 'DESCRIP': 'no label', 'SOILDESC': 'no label', });
lyr_lowland5_20.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_lowland4_21.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_lowland3_22.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_lowland2_23.set('fieldLabels', { 'SLOPECLASS': 'inline label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_lowland_24.set('fieldLabels', { 'SLOPECLASS': 'header label - visible with data', 'ELEVCLASS': 'inline label - visible with data', 'LMU': 'inline label - visible with data', 'DESCRIPTIO': 'inline label - visible with data', 'SOIL_DEPTH': 'inline label - visible with data', 'DRAINAGE_5': 'inline label - visible with data', 'INHER_FERT': 'inline label - visible with data', 'FLOODING_5': 'inline label - visible with data', 'EROSION_5': 'inline label - visible with data', 'ROCK_OUT_5': 'inline label - visible with data', 'area': 'inline label - visible with data', });
lyr_RiceTerraceNotIrrigated_25.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_RiceTerraceIrrigated_26.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_RiceNotIrrigated_27.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_RiceIrrigated2_28.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_RiceIrrigated_29.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_OilPalm_30.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_MixedVegetables_31.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_MixedFruitTrees_32.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Mangroves_33.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Mango_34.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Fishpond_35.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Falcata_36.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_DragonFruit_37.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_DiversifiedCrops_38.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Corn_39.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Coffee_40.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Coconut2_41.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Coconut_42.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Citrus_43.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Cashew_44.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Calamansi_45.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Cacao_46.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_Banana_47.set('fieldLabels', { 'LANDUSE': 'inline label - visible with data', });
lyr_DistrictIII_48.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictII_49.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictI4_50.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictI3_51.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictI2_52.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_DistrictI_53.set('fieldLabels', { 'OBJECTID': 'no label', 'Reg_Name': 'no label', 'Pro_Name': 'no label', 'Mun_Name': 'no label', 'Island': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PALAWAN_POINTS_WGS_54.set('fieldLabels', { 'FID_POINTs': 'hidden field', 'OBJECTID_1': 'hidden field', 'POINT': 'hidden field', 'FID_LMU_2_': 'hidden field', 'LMU': 'inline label - visible with data', 'DESCRIP': 'inline label - visible with data', });
lyr_PALAWAN_POINTS_WGS_54.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});