# markstammdaten-validator

<a href="https://stromdao.de/" target="_blank" title="STROMDAO - Digital Energy Infrastructure"><img src="./static/stromdao.png" align="right" height="85px" hspace="30px" vspace="30px"></a>

Request Marketdata from [Marktstammdatenregister](https://www.marktstammdatenregister.de/) using SOAP.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install markstammdaten-validator


## Configuration - API Key - Webdienst Nutzer

The config object for the validator requires you to set an `apiKey` and a `requesterId` like:

```javascript
{
  apiKey: 'YOUR_API_KEY',
  requesterId: ''
}
 ```

### Register for Martkstammdatenregister (MaStR)
- [Register for Marktstammdatenregister](https://www.marktstammdatenregister.de/MaStR/Assistent/AuswahlAssistent)

### Get apiKey
- Go to the [MaStR Zugang ansehen](https://www.marktstammdatenregister.de/MaStR/Akteur/MastrZugang/ProfileDetail#benutzer)
- Click on `Benutzer`
- Click on `Neuen Benutzer registrieren`
- Select third option `Der neue Benutzer ist kein Mensch...`
- Your API-Key will be shown (540 characters long)

### Get requesterId
- [Neuen Marktakteur anlegen](https://www.marktstammdatenregister.de/MaStR/Akteur/Marktakteur)
- Use `Sonstiger Marktakteur` as `Marktfunktion`
- After everything is completed you get a `MaStR-Nr.` which is your `requesterId` it will start with `SOM`and has a length of 15 charts.
-

## Useage as a module

```bash
npm install --save markstammdaten-validator
```

```javascript
const validator = require("markstammdaten-validator");

const app = async function() {
  let v = new validator({
    apiKey:'KEY_WEBDIENST_USER',
    requesterId:'MaSTRNummer_WEBDIENST_USER'
  });
  console.log(await v.getEinheit('SEE970942383410'));
  console.log(await v.getLokation('SEL982068309366'));
}
app();
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please make sure to update tests as appropriate. Details on [contributing](./CONTRIBUTING.md).

## Maintainer / Imprint

<addr>
STROMDAO GmbH  <br/>
Gerhard Weiser Ring 29  <br/>
69256 Mauer  <br/>
Germany  <br/>
  <br/>
+49 6226 968 009 0  <br/>
  <br/>
kontakt@stromdao.com  <br/>
  <br/>
Handelsregister: HRB 728691 (Amtsgericht Mannheim)
</addr>

Project Website: https://co2offset.io/

## LICENSE
[Apache-2.0](./LICENSE)
