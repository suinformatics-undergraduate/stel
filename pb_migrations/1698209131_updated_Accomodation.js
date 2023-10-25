/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l16oqui5g5khotd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dh0ovzty",
    "name": "Apartment_number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ye2wonew",
    "name": "Room_number",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kda4rwot",
    "name": "Parking",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l16oqui5g5khotd")

  // remove
  collection.schema.removeField("dh0ovzty")

  // remove
  collection.schema.removeField("ye2wonew")

  // remove
  collection.schema.removeField("kda4rwot")

  return dao.saveCollection(collection)
})
