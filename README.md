# SpaceXDB-Api
SpaceXDB-Api is a Open Source REST API, the api used in http://www.spacexdb.cf ,all the data is extracted by me using SpacexTelemetry (private tool at the moment)

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
| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-6` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `density`,`telemetry`,`pressure`,`speed_of_sound`,`temperature`,`phase` | `string` | `yes` | The type of data you want to retrieve (ex. starlink, crew-dragon) |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

# Graphs
This is the section related to the graphs and predicted graphs
## Query for graphs

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/graphs/graptime-vs-altitude.png`

## Query parameters for graphs
| parameter | example |  type |  required |  description |
|       --- |     --- |   --- |    --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-6` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `density`,`telemetry`,`pressure`,`speed_of_sound`,`temperature`,`phase` | `string` | `yes` |The type of data you want to retrieve (ex. starlink, crew-dragon) |
| format | `.png` | `string` |  `yes` | The format of the image, can be only .png |
