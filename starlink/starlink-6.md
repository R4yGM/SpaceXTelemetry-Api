# Starlink 6

## Starlink 6

this page is still in development ![](https://images2.imgbox.com/9a/96/nLppz9HW_o.png)

## Information

Mission name : Starlink 6

Launch date UNIX : 1587583800

Launch date UTC : 2020-04-22T19:30:00.000Z

Webcast : [YouTube](https://www.youtube.com/watch?v=wSge0I7pwFI)

Rocket : Falcon 9

Site launch : Kennedy Space Center Historic Launch Complex 39A

Initial Latitude: 28.6050

Initial Longitude: -80.6026

also a pretty cool photo taken during the launch

![](https://live.staticflickr.com/65535/49807633862_e5abcb41a6_o.jpg)

### Thanks to [SpaceX-Api](https://github.com/r-spacex/SpaceX-API) for the information of the launch

## Telemetry

The entiere Telemetry of the launch has been extracted using [SpaceXTelemetry](https://github.com/R4yGM/SpaceXTelemetry) \(program that i wrote\)

SXT reads data frame by frame and it uses the Optical Character Recognition \(OCR\) and sometimes this OCR could give wrong results because it isn't perfect, so some numbers are faked a little, you could see the complete telemetry extracted in this csv [file](https://github.com/R4yGM/SpacexDB/blob/master/Starlink%206/telemetry.csv) there is also a json [file](https://raw.githubusercontent.com/R4yGM/SpacexDB/7b696f4c01097f2928444753e749c16541a7ee50/Starlink%206/telemetry.json) but the csv file looks more cool in github and it's easier to read, with all the extracted data i started making comparisons and graphs

here there is a comparison between speed and time ![graph1](https://raw.githubusercontent.com/R4yGM/SpacexDB/master/Starlink%206/graphs/grap-speed-time1.png)

comparison time and altitude

![graph2](https://raw.githubusercontent.com/R4yGM/SpacexDB/master/Starlink%206/graphs/graptime-vs-altitude.png)

## Phases

* Time T-00:00:01 Phase Startup : THE FALCON 9 FLIGHT COMPUTERS HAVE TAKEN CONTROL DF THE COUNTDOWN
* Time T+00:00:00 Phase liftoff : THE HOLODOWN CLAMPS HAVE RELEASED FALCON 9 AND WE HAVE BEGUN OUR FLIGHT
* Time T+00:01:18 Phase MAX-Q : MAXIMUM DYNAMIC PRESSURE THIS IS THE HIGEST AMOUNT OF AERODYNAMIC STRESS EXERTED OW FRE VEHICLE
* Time T+00:02:36    Phase MECO : MAIN ENGINE CUTOFF
* Time T+00:02:39    Phase stage separation : STAGE 1 HAS SEPARATED FROM STAGE 2
* Time T+00:02:47    Phase SES 1 : SECOND ENGINE STARTUP 1
* Time T+00:03:11    Phase fairing deploy : THE PROTECTIVE NOSECQNE AT THE IOP OF THE ROCKET HAS BEEN DEPLOYED
* Time T+00:06:48    Phase stage 1 entry : STAGE 1 IS STARTING IT'S ENTRY BURN SLOWING IT DOWN FOR THE ENTRY INTO THE ATMOSPHERE
* Time T+00:08:28 Phase stage landing : STAGE 1 HAS BEGUN IT'S LANDING BURN SLOWING IT DOWN FOR TOUCHDDWA AT SEA
* Time T+00:08:58 Phase    SECO 1 : SECOND ENGINE CUTOFF 1

complete files for the [phases](https://github.com/R4yGM/SpacexDB/blob/master/Starlink%206/phase.csv)

all the phases are extracted by me using my own tool [SpaceXTelemetry](https://github.com/R4yGM/SpaceXTelemetry)

