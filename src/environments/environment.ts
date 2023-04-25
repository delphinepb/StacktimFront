// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let id;
export const environment = {
  production: false,
  apis: {
    connaissances: {
      url: 'https://localhost:7219/Getallconnaissance',
      urldelete:`https://localhost:7219/Deleteconnaissance`,
      urlcreate :'https://localhost:7219/Createconnaissance',
      urlupdate : 'https://localhost:7219/Updateconnaissance',
      urlbyid:'https://localhost:7219/GetConnaissanceById',
      contentType : 'json'
    },
    ressources: {
      url : 'https://localhost:7219/GetallRessource',
      urlcreate : 'https://localhost:7219/CreateRessource',
      urldelete:'https://localhost:7219/DeleteRessource',
      urlupdate:'https://localhost:7219/UpdateRessource',
      contentType : 'json'
    },
    typeressource:{
      url:'https://localhost:7219/GetallTypeR',
      urlcreate : 'https://localhost:7219/CreateTypeR',
      urldelete:'https://localhost:7219/DeleteTypeR',
      urlupdate:'https://localhost:7219/UpdateTypeR',
      contentType : 'json'
    },
    categorie:{
      url:'https://localhost:7219/Getallcategorie',
      urlcreate : 'https://localhost:7219/Createcategorie',
      urldelete:'https://localhost:7219/Deletecategorie',
      urlupdate:'https://localhost:7219/Updatecategorie',
      contentType : 'json'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
