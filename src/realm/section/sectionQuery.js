// import Realm from 'realm';
// import { realm_path } from '../../../../env.json';
// // import { schemas, schemaVersion } from '../../index';

// const sectionQuery = {
//   getAll: () => {
//     const realm = new Realm({
//       path: realm_path,
//       schema: schemas[schemaVersion],
//       schemaVersion: schemaVersion,
//     });
//     const result = JSON.parse(JSON.stringify(realm.objects('chat')));
//     realm.close();
//     return result;
//   },
//   addOne: chat => {
//     const realm = new Realm({
//       path: realm_path,
//       schema: schemas[schemaVersion],
//       schemaVersion: schemaVersion,
//     });
//     realm.write(() => {
//       realm.create('chat', chat);
//     });
//     realm.close();
//   },
//   removeOne: chat => {
//     const realm = new Realm({
//       path: realm_path,
//       schema: schemas[schemaVersion],
//       schemaVersion: schemaVersion,
//     });
//     realm.write(() => {
//       const target = realm.objectForPrimaryKey('chat', chat.address);
//       realm.delete(target);
//     });
//     realm.close();
//   };

//   module.exports = {
//     chatQuery,
//   };
