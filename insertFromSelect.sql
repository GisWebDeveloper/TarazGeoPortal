INSERT INTO layers.plants_point(geom, location, class_id, locationno, plantnumbe, name, lifeforms, height_m, crowndiam_, trunkgirt_, condition, noteplant, event, noteevent, numoffoto, latitude, longitude, gps_number, invdatetim, gps_elevat, condithedg, notehedges, lengthhedg)

SELECT geom, location, class_id, locationno, plantnumbe, name, lifeforms, height_m, crowndiam_, trunkgirt_, condition, noteplant, event, noteevent, numoffoto, latitude, longitude, gps_number, invdatetim, gps_elevat, condithedg, notehedges, lengthhedg
	FROM layers."plantPnt"

/*

{
  "nameKk": "Орналасқан жері ",
  "nameRu": "Место Расположения",
  "nameEn": "location",
  "attrname": "location",
  "attrType": "BIGINT",
  "shortInfo": true,
  "fullInfo": true,
  "rank": 1,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  

  {
"nameKk": "Өсімдік атауы",
      "nameRu": "Название растений",
      "nameEn": "name",
      "attrname": "name",
      "attrType": "BIGINT",
      "rank": 2,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
"nameKk": "Тіршлік формасы",
      "nameRu": "Жизненная форма",
      "nameEn": "lifeforms",
      "attrname": "lifeforms",
      "attrType": "BIGINT",
      "rank": 3,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
"nameKk": "Биіктік, м",
      "nameRu": "Высота, м",
      "nameEn": "height_m",
      "attrname": "height_m",
      "attrType": "NUMERIC",
      "rank": 4,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
"nameKk": "Ұшарбасының диаметрі, м",
      "nameRu": "Диаметр кроны, м",
      "nameEn": "crowndiam_",
      "attrname": "crowndiam_",
      "attrType": "NUMERIC",
      "rank": 5,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}



{
"nameKk": "Дің айналымы, см ",
      "nameRu": "Обхват ствола, см",
      "nameEn": "trunkgirt_",
      "attrname": "trunkgirt_",
      "attrType": "TEXT",
      "rank": 6,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
"nameKk": "Өсімдіктің жағдайы ",
      "nameRu": "Состояние растения",
      "nameEn": "condition",
      "attrname": "condition",
      "attrType": "TEXT",
      "rank": 7,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
 "nameKk": "Іс -шара ескертпесі",
      "nameRu": " Примечание мероприятия",
      "nameEn": "noteevent",
      "attrname": "noteevent",
      "attrType": "TEXT",
      "rank": 8,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
"nameKk": "Қосымша жазба",
      "nameRu": "Примечание растений",
      "nameEn": "noteplant",
      "attrname": "noteplant",
      "attrType": "TEXT",
      "rank": 9,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
"nameKk": "GPS Номері",
      "nameRu": "Номер GPS съемки",
      "nameEn": "gps_number",
      "attrname": "gps_number",
      "attrType": "BIGINT",
      "rank": 10,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
"nameKk": "Ендік",
      "nameRu": "Широта",
      "nameEn": "latitude",
      "attrname": "latitude",
      "attrType": "TEXT",
      "rank": 11,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
"nameKk": "Бойлық",
      "nameRu": "Долгота",
      "nameEn": "longitude",
      "attrname": "longitude",
      "attrType": "TEXT",
      "rank": 12,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
"nameKk": "Фото түсірілді",
      "nameRu": "Фото сделано ",
      "nameEn": "numoffoto",
      "attrname": "numoffoto",
      "attrType": "TEXT",
      "rank": 13,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
 "nameKk": "Түсірілім уақыты",
      "nameRu": "Дата и Время съемки",
      "nameEn": "invdatetim",
      "attrname": "invdatetim",
      "attrType": "TIMESTAMP",
      "rank": 14,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
 "nameKk": "Реттік номері",
      "nameRu": "пор. № растений от начало",
      "nameEn": "plantnumbe",
      "attrname": "plantnumbe",
      "attrType": "BIGINT",
      "rank": 15,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
 "nameKk": "Орналасу ескертпесі\n",
      "nameRu": " Примечание (Расположения)",
      "nameEn": "locationno",
      "attrname": "locationno",
      "attrType": "TEXT",
      "rank": 16,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
  "nameKk": "Түсірілім биіктігі",
      "nameRu": "Высота съемки",
      "nameEn": "gps_elevat",
      "attrname": "gps_elevat",
      "attrType": "NUMERIC",
      "rank": 17,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
  "nameKk": "Жалпы жағдайы",
      "nameRu": "Общее состояение",
      "nameEn": "class_id_en",
      "attrname": "class_id",
      "attrType": "BIGINT",
      "rank": 18,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
  "nameKk": "Іс -шара",
      "nameRu": "Мероприятия",
      "nameEn": "event",
      "attrname": "event",
      "attrType": "TEXT",
      "rank": 19,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}


{
  "nameKk": "ТБҚ ұзындығы",
      "nameRu": "Длина живой изгороди",
      "nameEn": "",
      "attrname": "lengthhedg",
      "attrType": "TEXT",
      "rank": 20,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
  "nameKk": "ТБҚ қосымша жазбасы",
      "nameRu": "Примечание живой изгороди",
      "nameEn": "",
      "attrname": "notehedges",
      "attrType": "TEXT",
      "rank": 21,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}

{
  "nameKk": "ТБҚ жағдайы",
      "nameRu": "Состояние живой изгороди",
      "nameEn": "",
      "attrname": "condithedg",
      "attrType": "TEXT",
      "rank": 22,
  "shortInfo": true,
  "fullInfo": true,
  "layer": {
    "id": "4a30581b-d4f5-402d-9701-7485ba6c6d03"
  }
  
}
}
