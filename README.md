# SpaceXDB-Api
this is the api used in http://www.spacexdb.cf ,all the data is extracted by me using SpacexTelemetry (private tool at the moment)

<p align="center">
  <img src="https://raw.githubusercontent.com/R4yGM/SpaceXDB-Api/master/SDB.png">
</p>

# Documentation
this is the documentation of spacexdb-api to retrieve telemetries and calculations to launches

# Telemetries
This is the section related to the telemetry and predictions data
## Query for telemetries

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/telemetry.json`

## Query parameters for telemetries
| parameter | example |  type |  description |
|       --- |     --- |   --- |          --- | 
| project | `crew-dragon` | `string` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-6` | `string` | The mission name (ex. starlink-5, dm-2) |
| file | `density`,`telemetry`,`pressure`,`speed_of_sound`,`temperature`,`phase` | `string` | The type of data you want to retrieve (ex. starlink, crew-dragon) |
| format | `.json, .csv` | `string` | The format of the data, can be only .csv or .json |
