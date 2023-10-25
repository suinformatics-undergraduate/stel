/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l16oqui5g5khotd",
    "created": "2023-10-25 04:42:16.577Z",
    "updated": "2023-10-25 04:42:16.577Z",
    "name": "Accomodation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "iyrur9a9",
        "name": "username",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("l16oqui5g5khotd");

  return dao.deleteCollection(collection);
})
