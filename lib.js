const mastrvalidator = function(config) {

  if((typeof config.requesterId == 'undefined') || (typeof config.apiKey == 'undefined')) {
    throw "Config requestId or apiKey needs to be specified";
  }

  if(config.apiKey.length !== 540) {
    throw "Marktstammdaten Webdienst User Key (apiKey) needs to be exactly 540 characters long";
  }

  if(config.requesterId.length !== 15) {
    throw "Requester ID is the Webdienst Marketuser and its number. It is 15 character like 'SOM900597323950'";
  }

  const axios = require("axios");
  const parser = require('xml2json');

  this.getEinheit = async function(einheitId) {

    const requesterId = config.requesterId;
    const apiKey = config.apiKey

    let xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:anl="https://www.marktstammdatenregister.de/Services/Public/1_2/Modelle/Anlage" xmlns:mod="https://www.marktstammdatenregister.de/Services/Public/1_2/Modelle"><soapenv:Header/><soapenv:Body><anl:GetListeAlleEinheitenRequest><mod:apiKey>'+apiKey+'</mod:apiKey><mod:marktakteurMastrNummer>'+requesterId+'</mod:marktakteurMastrNummer><mod:einheitMastrNummern>'+einheitId+'</mod:einheitMastrNummern></anl:GetListeAlleEinheitenRequest></soapenv:Body></soapenv:Envelope>';

    const responds = await axios.post("https://www.marktstammdatenregister.de/MaStRApi/Api.svc/Soap11/Anlage",
    xmlData,{
      headers: {
        'Content-Type': 'text/xml',
        'SOAPAction':'GetListeAlleEinheiten'
      },
    });

    var json = parser.toJson(responds.data);
    json = JSON.parse(json);
    json = json['s:Envelope'];
    json = json['s:Body'];
    json = json['GetListeAlleEinheitenResponse'];
    return json.Einheiten;
  }

  this.getLokation = async function(locationId) {

    const requesterId = config.requesterId;
    const apiKey = config.apiKey

    let xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:anl="https://www.marktstammdatenregister.de/Services/Public/1_2/Modelle/Anlage" xmlns:mod="https://www.marktstammdatenregister.de/Services/Public/1_2/Modelle"> \
   <soapenv:Header/> \
   <soapenv:Body> \
      <anl:GetListeAlleLokationenRequest> \
          <mod:apiKey>'+config.apiKey+'</mod:apiKey> \
         <mod:marktakteurMastrNummer>'+config.requesterId+'</mod:marktakteurMastrNummer> \
         <mod:mastrNummer>'+locationId+'</mod:mastrNummer> \
      </anl:GetListeAlleLokationenRequest> \
   </soapenv:Body> \
</soapenv:Envelope> ';

    const responds = await axios.post("https://www.marktstammdatenregister.de/MaStRApi/Api.svc/Soap11/Anlage",
    xmlData,{
      headers: {
        'Content-Type': 'text/xml',
        'SOAPAction':'GetListeAlleLokationen'
      },
    });

    var json = parser.toJson(responds.data);
    json = JSON.parse(json);

    json = json['s:Envelope'];
    json = json['s:Body'];
    json = json['GetListeAlleLokationenResponse'];
    return json.Lokationen;
  }

}

module.exports = mastrvalidator;
