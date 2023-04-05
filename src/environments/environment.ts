// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

let id;
export const environment = {
  production: false,
  apis: {
    connaissances: {
      url: 'https://localhost:7219/Getallconnaissance',
      urldelete:`https://localhost:7219/Deleteconnaissance/${id}`,
      urlcreate :'https://localhost:7219/Createconnaissance',
      contentType : 'json'
    },
    connaissance: {
      url: 'https://localhost:7219/GetConnaissanceById',
      contentType : 'json',
    },
    ressources: {
      url : 'https://localhost:7219/GetallRessource',
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
