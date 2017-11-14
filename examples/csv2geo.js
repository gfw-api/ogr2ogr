var ogr2ogr = require('../')
var url = 'untitled_table_1.csv'
var ogr = ogr2ogr(url).project('EPSG:4326').options(['-oo','GEOM_POSSIBLE_NAMES=*geom*','-oo','X_POSSIBLE_NAMES=Lon*','-oo','Y_POSSIBLE_NAMES=Lat*','-oo','KEEP_GEOM_COLUMNS=NO'])

ogr.exec(function(er, data) {
  if (er) console.error(er)
  console.log(data) // reprojected geojson data
})

ogr.pipe(fs.createWriteStream('/test.geojson'))