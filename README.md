# SpaceXDB-Api
SpaceXDB-Api is a Open Source REST API, the api used in http://www.spacexdb.cf ,all the data is extracted by me using SpacexTelemetry (private tool at the moment)

<p align="center">
  <img src="https://raw.githubusercontent.com/R4yGM/SpaceXDB-Api/master/SDB.png">
</p>

# Documentation
this is the documentation of spacexdb-api to retrieve telemetries and calculations to launches


### **not all the launches have the same data** this is because they couldn't be calculated or they weren't calculated yet, and not all the launches were extracted
# Telemetries
This is the section related to the telemetry and predictions data
## Query for telemetries

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/telemetry.json`

## Query parameters for telemetries
| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `starlink` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-6` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `telemetry`,`phase` | `string` | `yes` | The type of data you want to retrieve |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

## Query for predicted calculations

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/acceleration.json`

## Query parameters for predicted calculations
| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `dm-2` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `acceleration` | `string` | `yes` | The type of data you want to retrieve (only acceleration avaible) |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

# Graphs
This is the section related to the graphs and predicted graphs
## Query for graphs

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/graphs/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/graphs/total-seconds-vs-speed.png`

## Query parameters for graphs
| parameter | example |  type |  required |  description |
|       --- |     --- |   --- |    --- |          --- | 
| project | `starlink` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-5` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `density-vs-altitude`,`pressure-vs-altitude`,`speed-of-sound-vs-altitude`,`speed-of-sound-vs-total-time`,`temperature-vs-altitude`,`total-seconds-vs-altitude`,`total-seconds-vs-speed`,`acceleration-vs-total-time` | `string` | `yes` |The type of graph you want to retrieve |
| format | `.png` | `string` |  `yes` | The format of the image, can be only .png |

# ISA Calculations (international standard altitude)
This is the section related to ISA Calculations that returns `density`,`pressure`,`speed_of_sound`,`temperature`
## Query for ISA Calculations 

* `https://spacextelemetry.cf/{{project}}/{{mission-name}}/api/{{file}}.{{format}}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/pressure.json`

## Query parameters for ISA Calculations 
| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `dm-2` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `density`,`pressure`,`speed_of_sound`,`temperature`, | `string` | `yes` | The type of data you want to retrieve |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

# List of extracted and analysed launches
**Starlink**

* [Starlink-5](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-5/api)
* [Starlink-6](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-6/api)

**Crew Dragon**
* [dm-2](https://github.com/R4yGM/SpaceXDB-Api/tree/master/crew-dragon/dm-2/api)

# Apps that use this API
a list of applications that uses this api
* [SpaceXDB](https://www.spacexdb.cf/)

