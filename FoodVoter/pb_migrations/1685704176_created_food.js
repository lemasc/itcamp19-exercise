migrate((db) => {
  const collection = new Collection({
    "id": "8v0cy5ncp6ktgrp",
    "created": "2023-06-02 11:09:36.086Z",
    "updated": "2023-06-02 11:09:36.086Z",
    "name": "food",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "954b6ziv",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xrodf7ht",
        "name": "votes",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8v0cy5ncp6ktgrp");

  return dao.deleteCollection(collection);
})
