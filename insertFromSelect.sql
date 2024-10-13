INSERT INTO layers.plants_point(geom, location, class_id, locationno, plantnumbe, name, lifeforms, height_m, crowndiam_, trunkgirt_, condition, noteplant, event, noteevent, numoffoto, latitude, longitude, gps_number, invdatetim, gps_elevat, condithedg, notehedges, lengthhedg)

SELECT geom, location, class_id, locationno, plantnumbe, name, lifeforms, height_m, crowndiam_, trunkgirt_, condition, noteplant, event, noteevent, numoffoto, latitude, longitude, gps_number, invdatetim, gps_elevat, condithedg, notehedges, lengthhedg
	FROM layers."plantPnt"