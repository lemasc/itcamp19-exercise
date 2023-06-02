migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v0cy5ncp6ktgrp")

  // remove
  collection.schema.removeField("luo0o7v1")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8v0cy5ncp6ktgrp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "luo0o7v1",
    "name": "order",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
