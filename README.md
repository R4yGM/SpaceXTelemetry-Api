# SpaceXDB-Api
SpaceXDB-Api is a Open Source REST API, used in http://www.spacexdb.cf ,all the data is extracted by me using SpacexTelemetry (private tool at the moment)

<!--p align="center">
  <img src="https://raw.githubusercontent.com/R4yGM/SpaceXDB-Api/master/SDB.png">
</p-->
![logo](https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png)


# Usage
```bash
curl https://spacextelemetry.cf/starlink/starlink-6/api/telemetry.json | jq
```
**Example Response**
```json
[
  {
    "time": "00:00:01",
    "altitude": 0,
    "speed": 5
  },
  {
    "time": "00:00:03",
    "altitude": 0,
    "speed": 17
  },
  {
    "time": "00:00:06",
    "altitude": 0,
    "speed": 52
  }
  ...
]
```
**Latest Launch Example**
```bash
curl https://spacextelemetry.cf/launch/latest.json | jq
```
**Example Latest Launch Response**
```json
{
  "mission_name": "Starlink 7",
  "telemetry": [
    {
      "time": "00:00:08",
      "altitude": 0,
      "speed": 71
    },
    {
      "time": "00:00:09",
      "altitude": 0.1,
      "speed": 85
    },
    {
      "time": "00:00:10",
      "altitude": 0.1,
      "speed": 99
    },
    ...
]
}
```


# Content of this page

* [Documentation](https://github.com/R4yGM/SpaceXDB-Api#documentation)
  * [Telemetry](https://github.com/R4yGM/SpaceXDB-Api#query-for-telemetries)
  * [Predicted calculations](https://github.com/R4yGM/SpaceXDB-Api#query-for-predicted-calculations)
  * [Latest](https://github.com/R4yGM/SpaceXDB-Api#query-for-latest)
  * [Graphs](https://github.com/R4yGM/SpaceXDB-Api#graphs)
* [List of all the analysed launched](https://github.com/R4yGM/SpaceXDB-Api#list-of-extracted-and-analysed-launches)
* [Apps using this API](https://github.com/R4yGM/SpaceXDB-Api#apps-that-use-this-api)

# Documentation
this is the documentation of spacexdb-api to retrieve telemetries and calculations to launches


### **not all the launches have the same data** this is because they couldn't be calculated or they weren't calculated yet, and not all the launches were extracted

if you want to check if data exist you could see it by going on the launch folder


# Telemetries
This is the section related to the telemetry and predictions data
## Query for telemetries

* `https://spacextelemetry.cf/{project}/{mission-name}/api/{file}.{format}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/telemetry.json`

## Query parameters for telemetries

| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project   | `starlink` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-6` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file      | `telemetry`,`phase` | `string` | `yes` | The type of data you want to retrieve |
| format    | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

## Query for predicted calculations

* `https://spacextelemetry.cf/{project}/{mission-name}/api/{file}.{format}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/acceleration.json`

## Query parameters for predicted calculations

| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `dm-2` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `acceleration` | `string` | `yes` | The type of data you want to retrieve, [list of avaible files](https://github.com/R4yGM/SpaceXDB-Api#avaible-files-for-predicted-calculations) |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |

## Avaible files for predicted calculations

* **acceleration** : the acceleration of the rocket in m/s^2
* **vertical_speed** : the vertical speed of the rocket in km/s
* **horizontal_speed** : the horizontal speed of the rocket in km/s
* **downrange** : distance from the launch pad in Km
* **analysis** : complete analysis containing vertical speed,horizontal speed and downrange

## Query for latest

returns telemetry and analysis of the latest analysed launch

* Latest Telemetry : `https://spacextelemetry.cf/launch/telemetry.json`
* Latest Telemetry Analysis : `https://spacextelemetry.cf/launch/analysis.json`

# Graphs

This is the section related to the graphs and predicted graphs

## Query for graphs

* `https://spacextelemetry.cf/{project}/{mission-name}/api/graphs/{file}.{format}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/graphs/total-seconds-vs-speed.png`

## Query parameters for graphs

| parameter | example |  type |  required |  description |
|       --- |     --- |   --- |    --- |          --- | 
| project | `starlink` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `starlink-5` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file |  `acceleration-vs-total-time` | `string` | `yes` | The type of graph you want to retrieve, [list of avaible files](https://github.com/R4yGM/SpaceXDB-Api#avaible-files-for-graphs) |
| format | `.png` | `string` |  `yes` | The format of the image, can be only .png |

## Avaible files for graphs

* **acceleration-vs-total-time** : the acceleration of the rocket compared to time
* **downrange-vs-total-time** : distance to the launchpad compared to time
* **horizontal-speed-vs-total-time** : comparision between horizontal speed and time
* **total-seconds-vs-altitude** : comparision between time and altitude
* **total-seconds-vs-speed** : total seconds compared to the speed
* **vertical-horizontal-speed** : comparision of vertical and horizontal speed
* **vertical-speed-vs-total-time** : plot of the vertical speed and the total time

# List of extracted and analysed launches

**Starlink**

* [Starlink-5](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-5/api)
* [Starlink-6](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-6/api)
* [Starlink-7](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-7/api)
* [Starlink-8](https://github.com/R4yGM/SpaceXDB-Api/tree/master/starlink/starlink-8/api)

**Crew Dragon**
* [dm-2](https://github.com/R4yGM/SpaceXDB-Api/tree/master/crew-dragon/dm-2/api)

# Apps that use this API

a list of applications that uses this api
* [SpaceXDB](https://www.spacexdb.cf/)

# ISA Calculations (international standard altitude) **(only a few launches have this)**

This is the section related to ISA Calculations that returns `density`,`pressure`,`speed_of_sound`,`temperature`
**this data won't be extracted for next launches.**

## Query for ISA Calculations 

* `https://spacextelemetry.cf/{project}/{mission-name}/api/{file}.{format}`
* Example : `https://spacextelemetry.cf/starlink/starlink-6/api/pressure.json`

## Query parameters for ISA Calculations 

| parameter | example |  type | required |  description |
|       --- |     --- |   --- |      --- |          --- | 
| project | `crew-dragon` | `string` | `yes` | The project name (ex. starlink, crew-dragon) |
| mission_name | `dm-2` | `string` | `yes` | The mission name (ex. starlink-5, dm-2) |
| file | `density`,`pressure`,`speed_of_sound`,`temperature`, | `string` | `yes` | The type of data you want to retrieve |
| format | `.json, .csv` | `string` | `yes` | The format of the data, can be only .csv or .json |


