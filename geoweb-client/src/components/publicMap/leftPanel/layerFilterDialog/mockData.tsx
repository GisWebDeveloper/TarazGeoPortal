import { GeometryType, LayerAttrDto, LayerDto, LayerType } from "../../../../api/types/mapFolders";

export const mainLayer:LayerDto =  {
    folders:[],
    id: "4a30581b-d4f5-402d-9701-7485ba6c6d03",
    nameKk: "Жасыл желек",
    nameRu: "Насаждения ",
    nameEn: "Plants (point)",
    descriptionKk: "",
    descriptionRu: "",
    descriptionEn: "",
    layername: "plant_points",
    geometryType: GeometryType.POINT,
    layerType: LayerType.SIMPLE,
    styleId: null,
    url: "",
    baseLayer: false,
    checkIntersection: true,
    isBlockLayer: false,
    isDynamic: false,
    isPublic: true,
    dynamicIdentityColumn: null
  }
export const mainLayerAttributes:LayerAttrDto[] = [
    {
      id: "79c9fb41-65aa-4f22-aa38-924eaef0f9de",
      nameKk: "Орналасқан жері ",
      nameRu: "Место Расположения",
      nameEn: "location",
      attrname: "location",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "006",
      rank: 1
    },
    {
      id: "c4d1b8f1-ed8f-4346-9f65-c77de145ca50",
      nameKk: "Өсімдік атауы",
      nameRu: "Название растений",
      nameEn: "name",
      attrname: "name",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "001",
      rank: 2
    },
    {
      id: "e1fcbbff-08d7-4b55-a606-0461198cf149",
      nameKk: "Тіршлік формасы",
      nameRu: "Жизненная форма",
      nameEn: "lifeforms",
      attrname: "lifeforms",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "002",
      rank: 3
    },
    {
      id: "c5494a88-846a-45cb-bcc1-53b995e5f193",
      nameKk: "Биіктік, м",
      nameRu: "Высота, м",
      nameEn: "height_m",
      attrname: "height_m",
      attrType: "NUMERIC",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 4
    },
    {
      id: "5abba441-4db9-4ebd-8034-a927cd4046c4",
      nameKk: "Ұшарбасының диаметрі, м",
      nameRu: "Диаметр кроны, м",
      nameEn: "crowndiam_",
      attrname: "crowndiam_",
      attrType: "NUMERIC",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 5
    },
    {
      id: "8821c24b-9280-43d7-8fb9-1640ad3a7bb3",
      nameKk: "Дің айналымы, см ",
      nameRu: "Обхват ствола, см",
      nameEn: "trunkgirt_",
      attrname: "trunkgirt_",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 6
    },
    {
      id: "c3b2fc54-93c0-48a5-917c-e19ca33b49c0",
      nameKk: "Өсімдіктің жағдайы ",
      nameRu: "Состояние растения",
      nameEn: "condition",
      attrname: "condition",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "003",
      rank: 7
    },
    {
      id: "e9ccfcf3-6484-4c96-8ed8-8845f341c315",
      nameKk: "Іс -шара ескертпесі",
      nameRu: " Примечание мероприятия",
      nameEn: "noteevent",
      attrname: "noteevent",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 8
    },
    {
      id: "7f25da2a-6b6b-462a-87ca-247f4daa7842",
      nameKk: "Қосымша жазба",
      nameRu: "Примечание растений",
      nameEn: "noteplant",
      attrname: "noteplant",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 9
    },
    {
      id: "74f2bd3e-c22d-47c0-9bad-96f6ed72eec0",
      nameKk: "GPS Номері",
      nameRu: "Номер GPS съемки",
      nameEn: "gps_number",
      attrname: "gps_number",
      attrType: "BIGINT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 10
    },
    {
      id: "9bf754f0-cf0d-48bd-9c1f-d9c07589005f",
      nameKk: "Ендік",
      nameRu: "Широта",
      nameEn: "latitude",
      attrname: "latitude",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 11
    },
    {
      id: "a94dd771-bde5-4960-b6ab-8d99bb9ee096",
      nameKk: "Бойлық",
      nameRu: "Долгота",
      nameEn: "longitude",
      attrname: "longitude",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 12
    },
    {
      id: "c6de2c6e-abbe-436d-a15d-e5fb249305e4",
      nameKk: "Фото түсірілді",
      nameRu: "Фото сделано ",
      nameEn: "numoffoto",
      attrname: "numoffoto",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 13
    },
    {
      id: "0e824488-5a56-47e8-a2c2-0ed7da60999f",
      nameKk: "Түсірілім уақыты",
      nameRu: "Дата и Время съемки",
      nameEn: "invdatetim",
      attrname: "invdatetim",
      attrType: "TIMESTAMP",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 14
    },
    {
      id: "1bd81518-0f6c-4711-9f9c-eef897339a96",
      nameKk: "Реттік номері",
      nameRu: "пор. № растений от начало",
      nameEn: "plantnumbe",
      attrname: "plantnumbe",
      attrType: "BIGINT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 15
    },
    {
      id: "220b069f-8ea2-4f0a-9a88-fefddbe37f4d",
      nameKk: "Орналасу ескертпесі\n",
      nameRu: " Примечание (Расположения)",
      nameEn: "locationno",
      attrname: "locationno",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 16
    },
    {
      id: "3860d390-f978-4037-b177-001ed7731239",
      nameKk: "Түсірілім биіктігі",
      nameRu: "Высота съемки",
      nameEn: "gps_elevat",
      attrname: "gps_elevat",
      attrType: "NUMERIC",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 17
    },
    {
      id: "3b822ec5-267e-420e-a48a-06fc0d733bce",
      nameKk: "Жалпы жағдайы",
      nameRu: "Общее состояение",
      nameEn: "class_id_en",
      attrname: "class_id",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "007",
      rank: 18
    },
    {
      id: "ec4aea50-e292-4fc0-b847-69784172a70d",
      nameKk: "Іс -шара",
      nameRu: "Мероприятия",
      nameEn: "event",
      attrname: "event",
      attrType: "DICTIONARY",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: "005",
      rank: 19
    },
    {
      id: "d02be999-a0b3-41d9-b2ba-d48b75483bf8",
      nameKk: "ТБҚ ұзындығы",
      nameRu: "Длина живой изгороди",
      nameEn: '',
      attrname: "lengthhedg",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 20
    },
    {
      id: "8473ef6a-8885-4b4b-b7bb-9dc9906f9834",
      nameKk: "ТБҚ қосымша жазбасы",
      nameRu: "Примечание живой изгороди",
      nameEn: '',
      attrname: "notehedges",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 21
    },
    {
      id: "0b2fd65e-511b-4819-a510-3086925a8ec6",
      nameKk: "ТБҚ жағдайы",
      nameRu: "Состояние живой изгороди",
      nameEn: '',
      attrname: "condithedg",
      attrType: "TEXT",
      shortInfo: true,
      fullInfo: true,
      layer: mainLayer,
      dictionaryCode: null,
      rank: 22
    }
  ]; 

 export const dictionary_001 = [
  {
    "id": "69fc51d2-b75e-4b76-a9de-455b46bac33d",
    "code": "8",
    "kk": "Өрік - (Armeniaca)",
    "ru": "Абрикос - (Armeniaca)",
    "en": "Armeniaca",
    "rank": 0
  },
  {
    "id": "915bd6b3-8416-4fbb-9ed9-887a55f5ba7f",
    "code": "9",
    "kk": "Кәдімгі өрік - (Armeniaca vulgaris Lam.)",
    "ru": "Абрикос обыкновенный - (Armeniaca vulgaris Lam.)",
    "en": "Armeniaca vulgaris Lam.",
    "rank": 0
  },
  {
    "id": "d14dc52a-d9b6-4b58-857c-dcdcc4727a1f",
    "code": "13",
    "kk": "Катальпа - (Catalpa)",
    "ru": "Катальпа - (Catalpa)",
    "en": "Catalpa",
    "rank": 0
  },
  {
    "id": "7d7dbc6a-a10d-4566-9ec9-51e4b95377fb",
    "code": "14",
    "kk": "Бигнониятүсті катальпа -(Catalpa bignonioides Walter)",
    "ru": "Катальпа бигнониевидная - (Catalpa bignonioides Walter)",
    "en": "Catalpa bignonioides Walter",
    "rank": 0
  },
  {
    "id": "615aa91b-7532-4b9d-929b-3c344565f586",
    "code": "56",
    "kk": "Итмұрын - (Rosa sp.)",
    "ru": "Шиповник sp. - (Rosa sp.)",
    "en": "Rosa sp.",
    "rank": 0
  },
  {
    "id": "d67068e0-6063-4da9-9661-bc677acebb46",
    "code": "57",
    "kk": "Вавилон талы - (Salix babylonica L.)",
    "ru": "Ива вавилонская - (Salix babylonica L.)",
    "en": "Salix babylonica L.",
    "rank": 0
  },
  {
    "id": "2a18c292-cf81-418d-867f-54dcb3f8768f",
    "code": "50",
    "kk": "Жалаңаш сілті - (Rhus glabra L.)",
    "ru": "Сумах голый - (Rhus glabra L.)",
    "en": "Rhus glabra L.",
    "rank": 0
  },
  {
    "id": "80a2b837-6f44-46ab-a188-2a1038f0c8c1",
    "code": "1",
    "kk": "Акация - (Acacia)",
    "ru": "Акация - (Acacia)",
    "en": "Acacia",
    "rank": 0
  },
  {
    "id": "8ace51e5-bd67-4863-8973-043bfe33954c",
    "code": "60",
    "kk": "Тал - (Salix sp.)",
    "ru": "Ива sp. - (Salix sp.)",
    "en": "Salix sp.",
    "rank": 0
  },
  {
    "id": "df738430-6718-494c-abed-a1df66805e36",
    "code": "55",
    "kk": "Ит раушаны - (Rosa canina L.)",
    "ru": "Шиповник собачий - (Rosa canina L.)",
    "en": "Rosa canina L.",
    "rank": 0
  },
  {
    "id": "6c5b52b8-b88a-401f-9a30-9cbcb87bd003",
    "code": "4",
    "kk": "Күміс үйеңкі - (Acer saccharinum L.)",
    "ru": "Клен серебристый - (Acer saccharinum L.)",
    "en": "Acer saccharinum L.",
    "rank": 0
  },
  {
    "id": "44747061-1d7d-4d03-813b-db2805c162d1",
    "code": "5",
    "kk": "Кәдімгі Каштан-(Aesculus hippocastanum L.)",
    "ru": "Конский каштан обыкновенный - (Aesculus hippocastanum L.)",
    "en": "Aesculus hippocastanum L.",
    "rank": 0
  },
  {
    "id": "6121426b-d759-4cd8-91e8-186bcc52c055",
    "code": "10",
    "kk": "Оттава Бөріқарақат - (Berberis × ottawensis C.K. Schneid.)",
    "ru": "Барбарис оттавский - (Berberis × ottawensis C.K. Schneid.)",
    "en": "Berberis × ottawensis C.K. Schneid.",
    "rank": 0
  },
  {
    "id": "9f30f61f-55db-4c46-84d0-024632bb5cff",
    "code": "11",
    "kk": "Қотыр қайың - (Betula pendula Roth)",
    "ru": "Береза повислая - (Betula pendula Roth)",
    "en": "Betula pendula Roth",
    "rank": 0
  },
  {
    "id": "500ad88d-506d-47c3-9908-1db1c925a478",
    "code": "16",
    "kk": "Кәдімгә шие - (Cerasus vulgaris Mill.)",
    "ru": "Вишня обыкновенная - (Cerasus vulgaris Mill.)",
    "en": "Cerasus vulgaris Mill.",
    "rank": 0
  },
  {
    "id": "9a67941c-d240-44ea-882d-6033349c2dfb",
    "code": "52",
    "kk": "Робиния - (Robinia)",
    "ru": "Робиния - (Robinia)",
    "en": "Robinia",
    "rank": 0
  },
  {
    "id": "a3621a9f-8530-47df-8872-ed7b2ad190d7",
    "code": "54",
    "kk": "Ит раушаны - (Rosa canina)",
    "ru": "Роза собачья - (Rosa canina)",
    "en": "Rosa canina",
    "rank": 0
  },
  {
    "id": "f47f5e4b-45fa-4e11-b8ad-f8dbae36dcf6",
    "code": "58",
    "kk": "Құбашілік тал - (Salix cinerea L.)",
    "ru": "Ива пепельная - (Salix cinerea L.)",
    "en": "Salix cinerea L.",
    "rank": 0
  },
  {
    "id": "4e3995b2-dc94-4534-8615-f99e2049ce20",
    "code": "41",
    "kk": "Үйеңкі жапырақты Платан - (Platanus × acerifolia (Aiton) Willd.)",
    "ru": "Платан клёнолистный - (Platanus × acerifolia (Aiton) Willd.)",
    "en": "Platanus × acerifolia (Aiton) Willd.",
    "rank": 0
  },
  {
    "id": "e9827c3e-7b35-4e69-93ea-c9c3aac5fd5e",
    "code": "48",
    "kk": "Кәдімгі қара өрік - (Prunus domestica L.)",
    "ru": "Слива домашняя - (Prunus domestica L.)",
    "en": "Prunus domestica L.",
    "rank": 0
  },
  {
    "id": "e7a1def7-1a86-4e4e-910c-f167499572b3",
    "code": "25",
    "kk": "Арша - (Juniperus sp.)",
    "ru": "Можжевельник sp. - (Juniperus sp.)",
    "en": "Juniperus sp.",
    "rank": 0
  },
  {
    "id": "e70293de-fe93-4e73-89f3-3de17401ba94",
    "code": "27",
    "kk": "Виргин аршасы - (Juniperus virginiana L.)",
    "ru": "Можжевельник виргинский - (Juniperus virginiana L.)",
    "en": "Juniperus virginiana L.",
    "rank": 0
  },
  {
    "id": "508ae064-98dc-4fa1-a6f8-7603faaf26ce",
    "code": "28",
    "kk": "Қарапайым Бирючина - (Ligustrum vulgare L.)",
    "ru": "Бирючина обыкновенная - (Ligustrum vulgare L.)",
    "en": "Ligustrum vulgare L.",
    "rank": 0
  },
  {
    "id": "28792ae2-f47a-458c-bb16-817aa8f6b2af",
    "code": "29",
    "kk": "Кәдімгі алма - (Malus domestica (Suckow) Borkh.)",
    "ru": "Яблоня домашняя - (Malus domestica (Suckow) Borkh.)",
    "en": "Malus domestica (Suckow) Borkh.",
    "rank": 0
  },
  {
    "id": "42236836-05bc-4b96-abe8-4cba032414cd",
    "code": "31",
    "kk": "Қара тұт - (Morus nigra L.)",
    "ru": "Щелковица черная - (Morus nigra L.)",
    "en": "Morus nigra L.",
    "rank": 0
  },
  {
    "id": "541cea13-1265-4460-acc1-23a11a1e4acd",
    "code": "18",
    "kk": "Биік шаған - (Fraxinus excelsior L.)",
    "ru": "Ясень высокий - (Fraxinus excelsior L.)",
    "en": "Fraxinus excelsior L.",
    "rank": 0
  },
  {
    "id": "57b565d7-322e-4d7c-96bd-373212a9b785",
    "code": "17",
    "kk": "Америка шаған - (Fraxinus americana L.)",
    "ru": "Ясень американский - (Fraxinus americana L.)",
    "en": "Fraxinus americana L.",
    "rank": 0
  },
  {
    "id": "dbcdfe21-9404-48db-8c67-d3dada3c29b9",
    "code": "20",
    "kk": "Үштікен гледичия - (Gleditsia triacanthos L.)",
    "ru": "Гледичия трехколючковая - (Gleditsia triacanthos L.)",
    "en": "Gleditsia triacanthos L.",
    "rank": 0
  },
  {
    "id": "f83345d9-97fa-435e-8e85-fc333c62147f",
    "code": "19",
    "kk": "Гледичия - (Gleditsia)",
    "ru": "Гледичия - (Gleditsia)",
    "en": "Gleditsia",
    "rank": 0
  },
  {
    "id": "bbad13f5-e331-43b3-86ac-c17d276c8566",
    "code": "43",
    "kk": "Ақ терек - (Populus alba L.)",
    "ru": "Тополь белый - (Populus alba L.)",
    "en": "Populus alba L.",
    "rank": 0
  },
  {
    "id": "1ef1e0c8-37ca-4a6c-9032-35ee9c2116eb",
    "code": "35",
    "kk": "Киіз Павловния - (Paulownia tomentosa (Thunb.) Steud.)",
    "ru": "Павловния войлочная - (Paulownia tomentosa (Thunb.) Steud.)",
    "en": "Paulownia tomentosa (Thunb.) Steud.",
    "rank": 0
  },
  {
    "id": "7cc8ae82-e9b2-47c1-8e76-28b61240998a",
    "code": "37",
    "kk": "Тікенді шырша - (Picea pungens Engelm.)",
    "ru": "Ель колючая - (Picea pungens Engelm.)",
    "en": "Picea pungens Engelm.",
    "rank": 0
  },
  {
    "id": "4607d01b-a71c-4d5c-bac0-0b7d6fd0c15c",
    "code": "38",
    "kk": "Көгілдір шырша - (Picea pungens f. glauca (Regel) Beissn.)",
    "ru": "Ель колючая голубая - (Picea pungens f. glauca (Regel) Beissn.)",
    "en": "Picea pungens f. glauca (Regel) Beissn.",
    "rank": 0
  },
  {
    "id": "667d8933-2cc8-40ab-b4c5-f78e4c08a671",
    "code": "39",
    "kk": "Қара қарағай - (Pinus nigra Arnold)",
    "ru": "Сосна черная - (Pinus nigra Arnold)",
    "en": "Pinus nigra Arnold",
    "rank": 0
  },
  {
    "id": "0c15ae39-d315-46c8-abb4-c3cfdf0a50ec",
    "code": "42",
    "kk": "Шығыс Жалпақбұтақ - (Platycladus orientalis (L.) Franco)",
    "ru": "Плосковеточник восточный - (Platycladus orientalis (L.) Franco)",
    "en": "Platycladus orientalis (L.) Franco",
    "rank": 0
  },
  {
    "id": "e22ec91e-0473-48a5-8b3f-6a7e4235f2a0",
    "code": "23",
    "kk": "Қытай аршасы 'Blue Alps' - (Juniperus chinensis)",
    "ru": "Можжевельник китайский  'Blue Alps'  - (Juniperus chinensis)",
    "en": "Juniperus chinensis 'Blue Alps' ",
    "rank": 0
  },
  {
    "id": "5855ab12-0ab7-4858-98a5-dc7f68f4c2ae",
    "code": "22",
    "kk": "Грек жаңғағы - (Juglans regia L.)",
    "ru": "Орех грецкий - (Juglans regia L.)",
    "en": "Juglans regia L.",
    "rank": 0
  },
  {
    "id": "2d110b1f-cc79-47bc-b286-36d7c81281e1",
    "code": "46",
    "kk": "Қара терек - (Populus nigra L)",
    "ru": "Тополь черный - (Populus nigra L)",
    "en": "Populus nigra L",
    "rank": 0
  },
  {
    "id": "9af528fe-aa16-49bf-b0f6-c1e21a8f8bf4",
    "code": "49",
    "kk": "Кәдімгі емен - (Quercus robur L.)",
    "ru": "Дуб черешчатый - (Quercus robur L.)",
    "en": "Quercus robur L.",
    "rank": 0
  },
  {
    "id": "ffc1f07a-51a7-43d0-93b3-4086bb949b02",
    "code": "44",
    "kk": "Дельта тәрізді терек - (Populus deltoides Marshall)",
    "ru": "Тополь дельтовидный - (Populus deltoides Marshall)",
    "en": "Populus deltoides Marshall",
    "rank": 0
  },
  {
    "id": "f72460ff-44c6-48fc-8b8f-126288cb06b1",
    "code": "64",
    "kk": "Батыс туя 'Smaragd' - (Thuja occidentalis 'Smaragd')",
    "ru": "Туя западная 'Смарагд' - (Thuja occidentalis 'Smaragd')",
    "en": "Thuja occidentalis 'Smaragd'",
    "rank": 0
  },
  {
    "id": "e056e126-ad2f-41cd-bdac-4a5799671505",
    "code": "68",
    "kk": "Аласа қарағаш - (Ulmus pumila L.)",
    "ru": "Вяз низкий (Карагач) - (Ulmus pumila L.)",
    "en": "Ulmus pumila L.",
    "rank": 0
  },
  {
    "id": "c95ec32a-44d7-47bc-998b-c8dec085152e",
    "code": "70",
    "kk": "Пенсильван шаған - (Fraxinus pennsylvanica Marshall)",
    "ru": "Ясень пенсильванский - (Fraxinus pennsylvanica Marshall)",
    "en": "Fraxinus pennsylvanica Marshall",
    "rank": 0
  },
  {
    "id": "032a4ac9-d0fe-4997-bc8c-952a81d27915",
    "code": "73",
    "kk": "Шренк шырша - (Picea schrenkiana Fisch. & C.A. Mey.)",
    "ru": "Ель Шренка - (Picea schrenkiana Fisch. & C.A. Mey.)",
    "en": "Picea schrenkiana Fisch. & C.A. Mey.",
    "rank": 0
  },
  {
    "id": "9c8b280a-0e3d-4642-9cbd-b12ac89f9dc5",
    "code": "77",
    "kk": "Кәдімгі мойыл (Padus avium Mill.)",
    "ru": "Черёмуха обыкновенная (Padus avium Mill.)",
    "en": "Padus avium Mill.",
    "rank": 0
  },
  {
    "id": "a6575185-73c0-4086-bd31-98217312c8f8",
    "code": "78",
    "kk": "Шие қараөрік (Prunus cerasifera Ehrh.)",
    "ru": "Слива вишненосная (Prunus cerasifera Ehrh.)",
    "en": "Prunus cerasifera Ehrh.",
    "rank": 0
  },
  {
    "id": "d760d075-1b82-4510-b07c-819ba4c2440d",
    "code": "79",
    "kk": "Үлкенжапырақты өзекті (Tilia platyphyllos Scop.)",
    "ru": "Липа крупнолистная (Tilia platyphyllos Scop.)",
    "en": "Tilia platyphyllos Scop.",
    "rank": 0
  },
  {
    "id": "6a68bdfc-a83f-48cc-b2d8-abf5b87e0d95",
    "code": "80",
    "kk": "Жылтыр қарағаш (Ulmus laevis L.)",
    "ru": "Вяз гладкий (Ulmus laevis L.)",
    "en": "Ulmus laevis L.",
    "rank": 0
  },
  {
    "id": "34e118f8-142f-4db5-9ece-dd174dadb7a8",
    "code": "81",
    "kk": "Betula tianschanica Rupr.",
    "ru": "Берёза тяньшанская (Betula tianschanica Rupr.)",
    "en": "Betula tianschanica Rupr.",
    "rank": 0
  },
  {
    "id": "095fa107-1579-4433-8f2d-34b6fb852c7f",
    "code": "82",
    "kk": "Buxus sempervirens L.",
    "ru": "Самшит вечнозеленый (Buxus sempervirens L.)",
    "en": "Buxus sempervirens L.",
    "rank": 0
  },
  {
    "id": "e49bb71e-4cd3-41b7-88d9-84981a3a5504",
    "code": "83",
    "kk": "Cerasus avium (L.) Moench",
    "ru": "Вишня птичья (Cerasus avium (L.) Moench)",
    "en": "(Cerasus avium (L.) Moench)",
    "rank": 0
  },
  {
    "id": "ff305e75-5366-429f-b723-47a128acb551",
    "code": "84",
    "kk": "Forsythia ? intermedia Zabe",
    "ru": "Форзиция средняя (Forsythia ? intermedia Zabe)",
    "en": "Forsythia ? intermedia Zabe",
    "rank": 0
  },
  {
    "id": "101e5b0c-6a3a-448e-84bc-f84726996ffe",
    "code": "85",
    "kk": "Magnolia sp",
    "ru": "Магнолия (Magnolia sp)",
    "en": "Magnolia sp",
    "rank": 0
  },
  {
    "id": "1c53856c-ed71-47eb-b3f7-877b06449203",
    "code": "86",
    "kk": "Malpighia glabra L.",
    "ru": "Мальпигия голая (Malpighia glabra L.)",
    "en": "Malpighia glabra L.",
    "rank": 0
  },
  {
    "id": "538bc6ef-0471-4125-b325-50d91044ae8d",
    "code": "87",
    "kk": "Pinus pallasiana D. Don",
    "ru": "Сосна Палласова (Pinus pallasiana D. Don)",
    "en": "Pinus pallasiana D. Don",
    "rank": 0
  },
  {
    "id": "2af212d2-6937-41ff-bd97-59989d15052f",
    "code": "88",
    "kk": "Pyrus communis L.",
    "ru": "Груша обыкновенная (Pyrus communis L.)",
    "en": "Pyrus communis L.",
    "rank": 0
  },
  {
    "id": "95e546f6-a978-45c3-a4b6-d4909f9ae231",
    "code": "89",
    "kk": "Ribes aureum Pursh",
    "ru": "Смородина золотистая (Ribes aureum Pursh)",
    "en": "Ribes aureum Pursh",
    "rank": 0
  },
  {
    "id": "b858f7c2-48c5-42fd-9874-1652138aa50b",
    "code": "90",
    "kk": "Tilia cordifolia L.",
    "ru": "Липа сердцевидная (Tilia cordifolia L.)",
    "en": "Tilia cordifolia L.",
    "rank": 0
  },
  {
    "id": "a853ed46-9cb1-41b1-842f-fbbff16a7c97",
    "code": "2",
    "kk": "Америка Үйеңкісі- (Acer negundo L.)",
    "ru": "Клен американский (ясенелистный) - (Acer negundo L.)",
    "en": "Acer negundo L.",
    "rank": 0
  },
  {
    "id": "6dda92eb-565d-415b-9eba-a8ac07fb5af6",
    "code": "7",
    "kk": "Биік Аилант - (Ailanthus altissima (Mill.) Swingle)",
    "ru": "Айлант высочайший - (Ailanthus altissima (Mill.) Swingle)",
    "en": "Ailanthus altissima (Mill.) Swingle",
    "rank": 0
  },
  {
    "id": "a85cf938-7638-4345-9dd2-a541bd235a54",
    "code": "12",
    "kk": "Давид Буддлеясы - (Buddleja davidii Franch.)",
    "ru": "Буддлея Давида - (Buddleja davidii Franch.)",
    "en": "Buddleja davidii Franch.",
    "rank": 0
  },
  {
    "id": "cce1a931-71af-4a45-ab1f-ef1f2619c9fc",
    "code": "51",
    "kk": "Бұғымүйізді сілті - (Rhus typhina L.)",
    "ru": "Сумах оленерогий - (Rhus typhina L.)",
    "en": "Rhus typhina L.",
    "rank": 0
  },
  {
    "id": "2befcb52-0916-4b04-9413-bde879e9121d",
    "code": "53",
    "kk": "Ақ акация - (Robinia pseudoacacia L.)",
    "ru": "Робиния лжеакация - (Robinia pseudoacacia L.)",
    "en": "Robinia pseudoacacia L.",
    "rank": 0
  },
  {
    "id": "e3d01bbc-e1b3-4d8c-8769-71d27fe6f8f3",
    "code": "26",
    "kk": "Қабыршақты Арша - (Juniperus squamata Buch.-Ham. ex D.Don)",
    "ru": "Можжевельник чешуйчатый - (Juniperus squamata Buch.-Ham. ex D.Don)",
    "en": "Juniperus squamata Buch.-Ham. ex D.Don ",
    "rank": 0
  },
  {
    "id": "0dcc577e-0a3b-444e-9c7a-0e1e508e146f",
    "code": "30",
    "kk": "Ақ тұт - (Morus alba L.)",
    "ru": "Шелковица белая - (Morus alba L.)",
    "en": "Morus alba L.",
    "rank": 0
  },
  {
    "id": "b621defe-778c-4190-8580-d98ac709b96a",
    "code": "32",
    "kk": "Қара тұт 'Pendula' - (Morus nigra L. 'Pendula')",
    "ru": "Шелковица чёрная 'Pendula' - (Morus nigra L. 'Pendula')",
    "en": "Morus nigra L. 'Pendula'",
    "rank": 0
  },
  {
    "id": "0d8908ae-d3ef-419e-bf41-0f58ff791d00",
    "code": "21",
    "kk": "Сириялық бөрітарақ - (Hibiscus syriacus L.)",
    "ru": "Гибискус сирийский - (Hibiscus syriacus L.)",
    "en": "Hibiscus syriacus L.",
    "rank": 0
  },
  {
    "id": "30e4c046-39bd-4ac8-b96e-abb93dd245ba",
    "code": "36",
    "kk": "Еуропалық шырша - (Picea abies (L.) H.Karst.)",
    "ru": "Ель европейская - (Picea abies (L.) H.Karst.)",
    "en": "Picea abies (L.) H.Karst.",
    "rank": 0
  },
  {
    "id": "702216d3-48ba-4fa1-b33c-a144822181d7",
    "code": "34",
    "kk": "Қарапайым Махалебка - (Padellus mahaleb (L.) Vassilcz.)",
    "ru": "Махалебка обыкновенная - (Padellus mahaleb (L.) Vassilcz.)",
    "en": "Padellus mahaleb (L.) Vassilcz.",
    "rank": 0
  },
  {
    "id": "6e945d56-a8ad-4592-b31a-22240f3af2fa",
    "code": "74",
    "kk": "Ақ тал - (Salix alba L.)",
    "ru": "Ива белая - (Salix alba L.)",
    "en": "Salix alba L.",
    "rank": 0
  },
  {
    "id": "e6765f6e-12b6-47ab-b6da-0afd80c0d3c6",
    "code": "75",
    "kk": "Қара бузина - (Sambucus nigra L.)",
    "ru": "Бузина черная - (Sambucus nigra L.)",
    "en": "Sambucus nigra L.",
    "rank": 0
  },
  {
    "id": "516a97fd-ccd2-458a-9688-15549b33853c",
    "code": "76",
    "kk": "Жылтыр қарағаш - (Ulmus laevis Pall.)",
    "ru": "Вяз гладкий - (Ulmus laevis Pall.)",
    "en": "Ulmus laevis Pall. ",
    "rank": 0
  },
  {
    "id": "b4d1adb9-3fe3-4271-bb30-a2a95dd542df",
    "code": "6",
    "kk": "Аилант - (Ailanthus)",
    "ru": "Айлант - (Ailanthus)",
    "en": "Ailanthus",
    "rank": 0
  },
  {
    "id": "44b5078d-2c5d-4d0f-bd46-d3da18ebabd0",
    "code": "59",
    "kk": "Матсуда талы - (Salix matsudana  Koidz.)",
    "ru": "Ива Матсуды - (Salix matsudana  Koidz.)",
    "en": "Salix matsudana  Koidz. ",
    "rank": 0
  },
  {
    "id": "c2cdc7ba-b9cd-4c18-af79-48a8ec1a8e98",
    "code": "71",
    "kk": "Күрең Маклюра - (Maclura pomifera (Raf.) C.K. Schneid.)",
    "ru": "Маклюра яблоконосная - (Maclura pomifera (Raf.) C.K. Schneid.)",
    "en": "Maclura pomifera (Raf.) C.K. Schneid.",
    "rank": 0
  },
  {
    "id": "f3bbb43f-5cf7-4eb8-a463-c08ad929a1fd",
    "code": "67",
    "kk": "Қотыр қарағаш - (Ulmus glabra L.)",
    "ru": "Вяз шершаавый - (Ulmus glabra L.)",
    "en": "Ulmus glabra L.",
    "rank": 0
  },
  {
    "id": "4f0fb1e8-8993-4c7f-b70a-12208c658c66",
    "code": "65",
    "kk": "Батыс туя - (Thuja occidentalis L.)",
    "ru": "Туя западная - (Thuja occidentalis L.)",
    "en": "Thuja occidentalis L.",
    "rank": 0
  },
  {
    "id": "0852386e-de1b-4d1d-b82c-f9abfb587e86",
    "code": "66",
    "kk": "Жалаң қарағаш? Кәдімгі қарағаш - (Ulmus glabra Huds.)",
    "ru": "Вяз голый - (Ulmus glabra Huds.)",
    "en": "Ulmus glabra Huds.",
    "rank": 0
  },
  {
    "id": "93efbc73-2d70-43af-b655-f2a93ced9818",
    "code": "61",
    "kk": "Жапон софорасы - (Styphnolobium japonicum (L.) Schott)",
    "ru": "Софора японская - (Styphnolobium japonicum (L.) Schott)",
    "en": "Styphnolobium japonicum (L.) Schott",
    "rank": 0
  },
  {
    "id": "2deddb5d-e850-4433-a1cb-ec53f22ced9a",
    "code": "40",
    "kk": "Кәдімгі қарағай - (Pinus sylvestris L.)",
    "ru": "Сосна обыкновенная - (Pinus sylvestris L.)",
    "en": "Pinus sylvestris L.",
    "rank": 0
  },
  {
    "id": "95788a9e-21cb-4bb1-8c49-6bbfa5148aaf",
    "code": "45",
    "kk": "Италия терегі\t - (Populus italica (Du Roi) Moench)",
    "ru": "Тополь итальянский - (Populus italica (Du Roi) Moench)",
    "en": "Populus italica (Du Roi) Moench",
    "rank": 0
  },
  {
    "id": "dbd7eee6-a5c9-488e-9e96-02e2b23ed244",
    "code": "33",
    "kk": "Тұт - (Morus шелковица)",
    "ru": "Шелковица - (Morus шелковица)",
    "en": "Morus шелковица",
    "rank": 0
  },
  {
    "id": "2675c0d5-5d72-4044-a5dd-fbce8da0fcff",
    "code": "72",
    "kk": "Кәдімгі алма - (Malus domestica (Suckow) Borkh.)",
    "ru": "Яблоня домашняя - (Malus domestica (Suckow) Borkh.)",
    "en": "Malus domestica (Suckow) Borkh.",
    "rank": 0
  },
  {
    "id": "9a6fecd5-55f4-4a2e-9cb8-c7b072a668dd",
    "code": "15",
    "kk": "Домалақ катальпа - (Catalpa ovata G. Don)",
    "ru": "Катальпа яйцевидная - (Catalpa ovata G. Don)",
    "en": "Catalpa ovata G. Don",
    "rank": 0
  },
  {
    "id": "531bab22-51cc-4ed6-b8f6-4e804862f5e1",
    "code": "69",
    "kk": "Ірі жемісті Қарағаш (жалпақ жапырақты) - (Ulmus macrocarpa H.)",
    "ru": "Вяз крупноплодный (широколистный) - (Ulmus macrocarpa H.)",
    "en": "Ulmus macrocarpa H.",
    "rank": 0
  },
  {
    "id": "65be11ee-9214-4782-a0b9-63c4842e829e",
    "code": "63",
    "kk": "Кәдімгі Сирень, Сириялық бөрітарақ - (Syringa vulgaris L., Hibiscus syriacus L.)",
    "ru": "Сирень обыкновенная, Гибискус сирийс - (Syringa vulgaris L., Hibiscus syriacus L.)кий",
    "en": "Syringa vulgaris L., Hibiscus syriacus L.",
    "rank": 0
  },
  {
    "id": "1acb03e9-cddc-41a2-9ac2-6abb3902fc00",
    "code": "47",
    "kk": "Қара  пирамидальды терек - (Populus nigra var. pyramidalis)",
    "ru": "Тополь пирвамидальный черный - (Populus nigra var. pyramidalis)",
    "en": "Populus nigra var. pyramidalis",
    "rank": 0
  },
  {
    "id": "e985b8a0-18d7-416c-ac51-80f0eaad17f6",
    "code": "62",
    "kk": "Кәдімгі Сирень - (Syringa vulgaris L.)",
    "ru": "Сирень обыкновенная - (Syringa vulgaris L.)",
    "en": "Syringa vulgaris L.",
    "rank": 0
  },
  {
    "id": "cb03f77e-5af9-49c0-bcfc-e162adf72a25",
    "code": "24",
    "kk": "Жартасты арша - (Juniperus scopulorum Sarg.)",
    "ru": "Можжевельник скальный - (Juniperus scopulorum Sarg.)",
    "en": "Juniperus scopulorum Sarg.",
    "rank": 0
  },
  {
    "id": "5dc9841f-633f-4cf3-b883-a2eeb431884f",
    "code": "3",
    "kk": "Шынартүсті үиеңкісі - (Acer platanoides L.)",
    "ru": "Клен остролистный - (Acer platanoides L.)",
    "en": "Acer platanoides L.",
    "rank": 0
  },
  {
    "id": "6a32018d-4c5f-41dc-b34d-5e4f7e438bcf",
    "code": "91",
    "kk": "",
    "ru": "Тополь белый пирамидальный (Populus alba 'Sovetica Pyramidalis')",
    "en": "Populus alba 'Sovetica Pyramidalis'",
    "rank": 0
  }
];

 export const dictionary_002 = [
  {
    "id": "96a1104e-22ce-4e7b-9433-9066fb4331c3",
    "code": "1",
    "kk": "Жапырақты ағаш (ЖА)",
    "ru": "Лиственные деревья (ЛД)",
    "en": "",
    "rank": 0
  },
  {
    "id": "808b3e75-94a1-430e-a8d8-151f8b135565",
    "code": "2",
    "kk": "Жапырақты бұта (ЖБ)",
    "ru": "Лиственные кустарники (ЛК)",
    "en": "",
    "rank": 0
  },
  {
    "id": "b75a2eb7-a8c6-4739-b601-a0acfc5fac1d",
    "code": "3",
    "kk": "Қылқанды ағаш (ҚА)",
    "ru": "Хвойные деревья (ХД)",
    "en": "",
    "rank": 0
  },
  {
    "id": "286dc70b-0cb5-4060-91d3-ec65690a9b9a",
    "code": "4",
    "kk": "Қылқанды бұта (ҚБ)",
    "ru": "Хвойные  кустарники (ХК)",
    "en": "",
    "rank": 0
  },
  {
    "id": "febe8a3a-89da-4065-9fd8-f00482f4b9bf",
    "code": "5",
    "kk": "Тірі бұталы қоршау (ТБҚ)",
    "ru": "Живая изгородь (ЖИ)",
    "en": "",
    "rank": 0
  }
]; 

  export const dictionary_003 = [
    {
      "id": "7fc6a4fe-0a2e-4ce6-a553-3e11b445af1c",
      "code": "1",
      "kk": "Жағдайы жақсы, сау өсімдік, жетілген;",
      "ru": "Хорошее состояние, растение здоровое, развитое;",
      "en": "",
      "rank": 0
    },
    {
      "id": "8dd909c3-f2df-4053-bf37-553e817b34c3",
      "code": "2",
      "kk": "Кедергі (бұтақтар, діңі ғимаратқа тиген, бұтақтары салбырап тұр, ЭБЖ сымдары, аймаққа жақын);",
      "ru": "Мешающее (ветви, ствол касается здания; нависающие ветви; провода  ЛЭП, рядом отмостка);",
      "en": "",
      "rank": 0
    },
    {
      "id": "5a5ed3c3-0b8d-4700-bba4-b8dfad38f323",
      "code": "3",
      "kk": "Қураған бұтақтары немесе бөлек діңі бар;",
      "ru": "Имеются погибшие ветви или отдельные стволы;",
      "en": "",
      "rank": 0
    },
    {
      "id": "d96efde6-8d2d-4634-aebf-7d2f0713f3c1",
      "code": "4",
      "kk": "Діңгегінде қуыс пайда болған, зиянкестермен және аурулармен зақымдануы;",
      "ru": "Имеется дупло, повреждение вредителями и болезнями;",
      "en": "",
      "rank": 0
    },
    {
      "id": "2494c793-23f1-4351-826c-4979081f609b",
      "code": "5",
      "kk": "Механикалық зақымдануы және сызаттардың пайда болуы;",
      "ru": "Механические повреждения и заломы;",
      "en": "",
      "rank": 0
    },
    {
      "id": "43d3b445-54a3-43f6-8a52-2b208b9714a0",
      "code": "6",
      "kk": "Діңнің жарылуы (суықтан);",
      "ru": "Трещина ствола (морозобоина);",
      "en": "",
      "rank": 0
    },
    {
      "id": "88494178-fd96-4105-8105-a6436abbf0ce",
      "code": "7",
      "kk": "Кесу жұмыстары немесе ағаштарды сирету жұмыстары жүргізілген;",
      "ru": "Была проведена обрезка или кронирование;",
      "en": "",
      "rank": 0
    },
    {
      "id": "ffc5a3a0-aaaa-4285-9714-d4401724f906",
      "code": "8",
      "kk": "Жас бұтақтары бар;",
      "ru": "Имеется поросль;",
      "en": "",
      "rank": 0
    },
    {
      "id": "0ab247f2-58b3-4d6f-8777-4d4044811bec",
      "code": "9",
      "kk": "Қураған, апатты;",
      "ru": "Погибшее, аварийное.",
      "en": "",
      "rank": 0
    }
  ]; 
  export const dictionary_004 = [
    {
      "id": "abc1349a-2122-4b5a-b626-1aac05ae2b00",
      "code": "3",
      "kk": "Ұшарбасында қураған діңі немесе бұтақтары, қурағандары бар;",
      "ru": "В кроне присутствуют засохшие стволы или ветки, заломы;",
      "en": "",
      "rank": 0
    },
    {
      "id": "5f570236-d11b-4ded-b588-5e625bf3b3a8",
      "code": "1",
      "kk": "Жағдайы жақсы, сау өсімдік, жетілген;",
      "ru": "Хорошее состояние, растение здоровое, развитое;",
      "en": "",
      "rank": 0
    },
    {
      "id": "0c69d91d-bf0c-4f25-82fa-1ba4e48aec06",
      "code": "2",
      "kk": "Бұта жаяу жүргіншілер аймағының үстінде  салбырап тұр немесе жеткілікті жас бұтақшалар қалыптаспаған ұшарбасы бар;",
      "ru": "Кустарник нависает над пешеходной зоной или имеет не сформированную крону обильной порослью;",
      "en": "",
      "rank": 0
    },
    {
      "id": "3cde4fda-234f-4c81-b3d4-242d8674628b",
      "code": "4",
      "kk": "Жапырақтары зиянкестермен немесе аурумен зақымданған;",
      "ru": "Листья повреждены болезнями или вредителями;",
      "en": "",
      "rank": 0
    },
    {
      "id": "0eb9d24c-589d-488e-a0d5-b164a18d7918",
      "code": "5",
      "kk": "Өсімдік қураған;",
      "ru": "Растение погибшее.",
      "en": "",
      "rank": 0
    }
  ]; 
  export const dictionary_005 = [
    {
      "id": "2b9ff33e-2884-4a83-94e6-9dd420ab0567",
      "code": "1",
      "kk": "Арнайы іс – шараны қажет етпейді;",
      "ru": "Специальные мероприятия не требуются;",
      "en": "",
      "rank": 0
    },
    {
      "id": "d4fe6f31-07e3-4c21-9af9-0fba0665c0ec",
      "code": "2",
      "kk": "Пішінді кесу, санитарлық, жаңартып кесу;",
      "ru": "Формировочная обрезка, санитарная, омолаживающая;",
      "en": "",
      "rank": 0
    },
    {
      "id": "446f6223-1be2-40c5-9597-ebc02ac087fc",
      "code": "3",
      "kk": "Сирету (ағаштар үшін) немесе жаңартып кесу (бұталар үшін);",
      "ru": "Кронирование (для деревьев) или омолаживающая обрезка (для кустарников);",
      "en": "",
      "rank": 0
    },
    {
      "id": "cc0a9b2f-e97a-4be1-bb5d-15e885630a7d",
      "code": "4",
      "kk": "Алқаптарды қорғауға арналған шараларды қабылдау (зиянкестер мен аурулармен күресу мақсатында химиялық және биологиялық өңдеу, санитарлық өңдеу);",
      "ru": "Принятие мер по защите насаждений (обработки химические и биологические с целью борьбы с вредителями и болезнями, обработка санитарная);",
      "en": "",
      "rank": 0
    },
    {
      "id": "4a23939f-ad1c-449a-9b8a-dfb29e09630a",
      "code": "5",
      "kk": "Сиреген ағаштардың қатарын толықтыру, қайта отырғызу қажет (бұталы қоршаулар үшін, орман алқаптары, алқаптарды қорғау, гүлзарлар, гүлбақтар үшін);",
      "ru": "Насаждение изрежено, требуется досадка (для живых изгородей, лесополос, защитных насаждений, газонов и цветников);",
      "en": "",
      "rank": 0
    },
    {
      "id": "656a8fd9-5688-4176-a0b7-7e0b047609ea",
      "code": "6",
      "kk": "Апатты жағдайда тұрған өсімдікті шұғыл түрде кесу, гүлзарлар мен гүлбақтар реконструкциясы;",
      "ru": "Срочный спил аварийного растения, реконструкция газона или цветника;",
      "en": "",
      "rank": 0
    },
    {
      "id": "46f0bf4e-ffa9-4e51-ae37-dcc3e318eafa",
      "code": "7",
      "kk": "Нормалық суғару",
      "ru": "Нормированный полив.",
      "en": "",
      "rank": 0
    }
  ]; 
  export const dictionary_006 = [
    {
      "id": "a1d504f3-afe0-4f84-807b-fa8240cb4109",
      "code": "1",
      "kk": "Есенин алаңы",
      "ru": "Сквер Есенина",
      "en": "",
      "rank": 0
    },
    {
      "id": "6a36eac0-0f61-4340-b1f7-eb4b6d10d244",
      "code": "2",
      "kk": "Арбат алаңы",
      "ru": "Сквер Арбат",
      "en": "",
      "rank": 0
    },
    {
      "id": "b826777d-03bf-4710-8ee7-59da6d2cc345",
      "code": "3",
      "kk": "Түрксіб саябағы",
      "ru": "Парк Турксиб",
      "en": "",
      "rank": 0
    },
    {
      "id": "ae597cb3-074b-447d-9d9d-c5d1058cfb8c",
      "code": "4",
      "kk": "Әйтиев көш.",
      "ru": "ул.Айтиева ",
      "en": "",
      "rank": 0
    },
    {
      "id": "e36df61b-5fe9-40b5-8784-50dc8b9f447b",
      "code": "5",
      "kk": "Жастар алаңы",
      "ru": "аллея Жастар",
      "en": "",
      "rank": 0
    },
    {
      "id": "6afe47c7-1b47-4698-999b-719f67f1e890",
      "code": "6",
      "kk": "Жамбыл көшесі",
      "ru": "ул. Жамбыла",
      "en": "",
      "rank": 0
    },
    {
      "id": "0de841cf-029f-4d70-969c-21db2a1d13de",
      "code": "7",
      "kk": "Желтоксан көшесі",
      "ru": "ул. Желтоксан",
      "en": "",
      "rank": 0
    },
    {
      "id": "66275742-54f1-456e-b8c4-8a341c6b2fd3",
      "code": "8",
      "kk": "Химик саябағы",
      "ru": "Парк Химик ",
      "en": "",
      "rank": 0
    },
    {
      "id": "0340aaec-e66b-476c-bbeb-a3548a986c7d",
      "code": "9",
      "kk": "Байзақ Батыр көшесі",
      "ru": "ул. Байзак Батыра",
      "en": "",
      "rank": 0
    },
    {
      "id": "f6d574af-20b9-4955-b958-ee80a1dee707",
      "code": "10",
      "kk": "Әйтеке би көшесі",
      "ru": "ул. Айтеке би",
      "en": "",
      "rank": 0
    }
  ]; 
  export const dictionary_007 = [
    {
      "id": "75ced29e-a100-4c47-8e32-f8c9c249ec8e",
      "code": "4",
      "kk": "Қураған, апатты;",
      "ru": "Погибшее",
      "en": "",
      "rank": 0
    },
    {
      "id": "be42619a-05b6-4c2a-8aaf-a69d4a8ca653",
      "code": "1",
      "kk": "Cау өсімдік",
      "ru": "Здоровое",
      "en": "",
      "rank": 0
    },
    {
      "id": "dd27a349-47ec-4ca4-928a-0488b9efbcce",
      "code": "3",
      "kk": "Қанағаттанарлық, емдеуді қажет етеді",
      "ru": "Удовлетворительное, требуется лечение",
      "en": "",
      "rank": 0
    },
    {
      "id": "382cf0b3-fee4-48be-8995-5332c1336bb9",
      "code": "2",
      "kk": "Қанағаттанарлық, кесуді қажет етеді",
      "ru": "Удовлетворительное, требуется обрезка",
      "en": "",
      "rank": 0
    }
  ]; 