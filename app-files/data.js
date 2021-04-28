var APP_DATA = {
  "scenes": [
    {
      "id": "0-front-entrance",
      "name": "Front Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.21295495399954234,
        "pitch": 0.23189553053785517,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.1776117048205883,
          "pitch": 0.2938043962901773,
          "rotation": 0,
          "target": "1-front-entryway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-front-entryway",
      "name": "Front Entryway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.025633099838206164,
        "pitch": 0.07731912179335865,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.3328686816045572,
          "pitch": 0.17850126589133097,
          "rotation": 0,
          "target": "2-front-desk"
        },
        {
          "yaw": 3.138889531447836,
          "pitch": 0.2356550873518959,
          "rotation": 0,
          "target": "0-front-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.2763377754469154,
          "pitch": 0.5327575624383147,
          "title": " ",
          "text": "Welcome to the UCI Radiation Oncology Clinic! Explore our office before your next visit, and be sure to click and hover over all our informative hotspots to learn more about our shared space.",
          "type": "hoverspot",
          "id": "hoverspot1"
        }
      ]
    },
    {
      "id": "2-front-desk",
      "name": "Front Desk",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.8820691168777053,
        "pitch": 0.18275428787519132,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.34792253946282514,
          "pitch": 0.16033243246623208,
          "rotation": 0,
          "target": "4-clinic-entrance"
        },
        {
          "yaw": -2.479856065328997,
          "pitch": 0.226043937127276,
          "rotation": 0,
          "target": "1-front-entryway"
        },
        {
          "yaw": -0.8937548294965385,
          "pitch": 0.41738072581756214,
          "rotation": 5.497787143782138,
          "target": "3-main-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3282506678750234,
          "pitch": 0.20884580505545358,
          "title": "Be Sure to Check In",
          "text": "<p>Upon arriving, you can speak to any of our receptionists to check in for your appointment. While waiting to be called into the clinic, you'll be able to make use of both the lobby restrooms and waiting room.",
          "type": "info",
          "id": "info1"
        }
      ]
    },
    {
      "id": "3-main-lobby",
      "name": "Main Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.010253239935284597,
        "pitch": 0.1499522362052872,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -1.4162405501008308,
          "pitch": 0.28632870704024427,
          "rotation": 5.497787143782138,
          "target": "2-front-desk"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.12247731934865413,
          "pitch": 0.2219258444663037,
          "title": "A Place to Wait",
          "text": "The main lobby is open to both patients and family members. Family members are encouraged to wait here while their loved ones are being treated, while patients are only allowed one primary caretaker to accompany them further into the clinic.",
          "type": "info",
          "id": "info18"
        },
        {
          "yaw": -2.927734025737159,
          "pitch": 0.19035825638728454,
          "title": "Staying Up to Date",
          "text": "The latest updates on clinic events, staff, and even personal patient recovery stories can be seen here. If you have extra time before your appointment, learn more about your clinic by seeing what news pops up on screen.",
          "type": "info",
          "id": "info2"
        }
      ]
    },
    {
      "id": "4-clinic-entrance",
      "name": "Clinic Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.01863494617301953,
        "pitch": 0.1498412038331196,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.003926612492882953,
          "pitch": 0.16310409403038761,
          "rotation": 0,
          "target": "5-clinic-hallway-entrance"
        },
        {
          "yaw": 2.411433857786103,
          "pitch": 0.40181925247879136,
          "rotation": 5.497787143782138,
          "target": "2-front-desk"
        },
        {
          "yaw": -2.6463033019770776,
          "pitch": 0.34745513608790546,
          "rotation": 0,
          "target": "3-main-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.007892262234484804,
          "pitch": 0.3001170954167751,
          "title": " ",
          "text": "From here, we enter the main clinic area!",
          "type": "textoverlay",
          "id": "textoverlay1"
        }
      ]
    },
    {
      "id": "5-clinic-hallway-entrance",
      "name": "Clinic Hallway Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.8476011679833668,
        "pitch": 0.3045904797919814,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -1.5762142523711091,
          "pitch": 0.06949137815188067,
          "rotation": 0,
          "target": "2-front-desk"
        },
        {
          "yaw": -0.03524056745671622,
          "pitch": 0.2860921841545103,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        },
        {
          "yaw": 3.0891726743845087,
          "pitch": 0.3707764923187007,
          "rotation": 0,
          "target": "6-clinic-hallway-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.193569587423024,
          "pitch": 0.3547536777243767,
          "title": "Welcome to our clinic interior",
          "text": "To the right, you can explore the first of our three primary radiation treatment rooms. To the left are the patient waiting rooms, nurse station, and the remainder of our treatment rooms.",
          "type": "hint",
          "id": "hint2"
        },
        {
          "yaw": -0.046704171673255246,
          "pitch": 0.38874616500558545,
          "title": "textoverlay 1",
          "text": "This way:<br>Patient Waiting Rooms,<br>Nurse Station,<br>Linear Accelerator Rooms #2 &amp; #3,<br> Examination Rooms",
          "type": "textoverlay",
          "id": "textoverlay2"
        },
        {
          "yaw": 3.0971825286536907,
          "pitch": 0.486510327537232,
          "title": "textoverlay 2",
          "text": "This way:<br>CT Simulation Room,<br>Clinic Exit",
          "type": "textoverlay",
          "id": "textoverlay3"
        }
      ]
    },
    {
      "id": "6-clinic-hallway-right",
      "name": "Clinic Hallway, Right",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.049637792404672254,
        "pitch": 0.22961436168933602,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.016641231074309815,
          "pitch": 0.36977868028703753,
          "rotation": 0,
          "target": "7-ct-simulation-room-view-1"
        },
        {
          "yaw": -1.6380441124080392,
          "pitch": 0.3149516141143849,
          "rotation": 0,
          "target": "5-clinic-hallway-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9571259459891006,
          "pitch": 0.17977868028703753,
          "title": "resources/medication-storage.jpg",
          "text": "Alternate entrance to the CT Simulation Dressing Room.",
          "type": "reveal",
          "id": "reveal1"
        },
        {
          "yaw": 1.589023407015727,
          "pitch": 0.16927439098098773,
          "title": " ",
          "text": "Exit",
          "type": "hoverspot",
          "id": "hoverspot2"
        }
      ]
    },
    {
      "id": "7-ct-simulation-room-view-1",
      "name": "CT Simulation Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.042721833063678716,
        "pitch": 0.08669113655617977,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -3.09105182704954,
          "pitch": 0.21546475351265215,
          "rotation": 0,
          "target": "6-clinic-hallway-right"
        },
        {
          "yaw": 0.13263160161369747,
          "pitch": 0.18420988825133833,
          "rotation": 0.7853981633974483,
          "target": "8-ct-simulation-room-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5093709171972396,
          "pitch": 0.3152537391980914,
          "title": "CT Simulation Dressing Room",
          "text": "Prior to their CT Simulation treatment, patients can use this dressing room to change into their hospital gowns. This, alongside the rooms within the patient waiting areas, is one of a handful of places you can change into a hospital gown.",
          "type": "info",
          "id": "info3"
        },
        {
          "yaw": -0.4209286452266898,
          "pitch": 0.318770256116391,
          "title": " ",
          "text": "CT Simulation Control Room",
          "type": "hoverspot",
          "id": "hoverspot3"
        }
      ]
    },
    {
      "id": "8-ct-simulation-room-view-2",
      "name": "CT Simulation Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.1657607122870708,
        "pitch": 0.20852732847297517,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.5509007456025898,
          "pitch": 0.3303619100044628,
          "rotation": 0.7853981633974483,
          "target": "9-inside-the-ct-simulation-machine"
        },
        {
          "yaw": -2.397136835549185,
          "pitch": 0.17543310009050472,
          "rotation": 5.497787143782138,
          "target": "25-ct-sim-room-exit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5201259459891006,
          "pitch": 0.3394968612332647,
          "title": "Patient Positioning",
          "text": "During your CT simulation treatment, a clinician will be here to help position you properly to receive treatment. They may ask you to lie down a specific way or lift certain limbs, so be sure to let them know if you might have any issues with mobility.",
          "type": "info",
          "id": "info4"
        },
        {
          "yaw": 1.8289631782583262,
          "pitch": 0.06283184943089815,
          "title": " ",
          "text": "These custom-made masks are made specifically for each individual patient. They are used to help guide the positioning of our machines and tools, almost like a map.",
          "type": "hoverspot",
          "id": "hoverspot4"
        }
      ]
    },
    {
      "id": "9-inside-the-ct-simulation-machine",
      "name": "Inside the CT Simulation Machine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.6941602740078885,
          "pitch": 0.27712727874086696,
          "rotation": 5.497787143782138,
          "target": "8-ct-simulation-room-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.0038804040525217687,
          "pitch": 0.10604591304384314,
          "title": "textoverlay",
          "text": "Turn your camera view around to better explore what it's like from inside the machine!",
          "type": "textoverlay",
          "id": "textoverlay4"
        },
        {
          "yaw": 3.1038025282100303,
          "pitch": -1.435840098484345,
          "title": "textoverlay",
          "text": "Look down and to the sides!&nbsp;",
          "type": "textoverlay",
          "id": "textoverlay5"
        },
        {
          "yaw": 3.0825011182355677,
          "pitch": -0.04125217680892135,
          "title": "textoverlay",
          "text": "This is the view directly above your head from within the machine.",
          "type": "textoverlay",
          "id": "textoverlay6"
        }
      ]
    },
    {
      "id": "10-clinic-hallway-left",
      "name": "Clinic Hallway, Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.9823445757370699,
        "pitch": 0.20528560037942967,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.013452503944709093,
          "pitch": 0.2764494042741852,
          "rotation": 0,
          "target": "13-linear-accelerator-room-2-hallway-1"
        },
        {
          "yaw": -1.6289697364229276,
          "pitch": 0.07893034617838524,
          "rotation": 0,
          "target": "16-nurses-station-view-1"
        },
        {
          "yaw": -1.979981134271906,
          "pitch": 0.17085349659500437,
          "rotation": 5.497787143782138,
          "target": "12-womens-waiting-room"
        },
        {
          "yaw": 2.1925733645567815,
          "pitch": 0.21508568243008241,
          "rotation": 0,
          "target": "11-mens-waiting-room"
        },
        {
          "yaw": 1.535137242462894,
          "pitch": 0.31603029070737243,
          "rotation": 0,
          "target": "5-clinic-hallway-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-mens-waiting-room",
      "name": "Men's Waiting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.103405758711034,
        "pitch": 0.18121866250723073,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.8531197248009601,
          "pitch": 0.22181673034305582,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.249641915752825,
          "pitch": 0.2873479299666002,
          "title": "In Need of Extra Assistance?",
          "text": "Patients are allowed to bring one dedicated caretaker with them into the treatment-specific waiting rooms. Other family members or companions can make use of the main lobby's waiting room.",
          "type": "info",
          "id": "info4"
        },
        {
          "yaw": -1.8240716751101438,
          "pitch": 0.2752833045258196,
          "title": " ",
          "text": "Dressing room for patients. In here, patients can change into their hospital gowns.",
          "type": "hoverspot",
          "id": "hoverspot5"
        },
        {
          "yaw": 0.007946729092456195,
          "pitch": 0.28974617258329083,
          "title": " ",
          "text": "Patient Restroom",
          "type": "hoverspot",
          "id": "hoverspot6"
        },
        {
          "yaw": -1.0584589170106575,
          "pitch": -0.05047569212939784,
          "title": "Patient Lockers",
          "text": "The clinic provides a place for patients to put their clothes and other belongings during their visit. If you're in need of a locker, feel free to ask your nurse for a locker key.",
          "type": "hint",
          "id": "hint3"
        }
      ]
    },
    {
      "id": "12-womens-waiting-room",
      "name": "Women's Waiting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 1.2288058326409939,
        "pitch": 0.31871282220813413,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -2.564291590142906,
          "pitch": 0.25734663138502256,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.7954333962157465,
          "pitch": 0.39313984252847867,
          "title": "An Extra Set of Hands",
          "text": "Patients are allowed to bring one designated caretaker with them into the treatment-specific waiting rooms. Other family members or companions can make use of the main lobby's waiting room.",
          "type": "info",
          "id": "info5"
        },
        {
          "yaw": -1.1132209147842502,
          "pitch": 0.2482760640763111,
          "title": " ",
          "text": "Patient Restroom",
          "type": "hoverspot",
          "id": "hoverspot7"
        },
        {
          "yaw": -0.19285319768357922,
          "pitch": 0.24574150505074321,
          "title": " ",
          "text": "Dressing room for patients. In here, patients can change into their hospital gowns.",
          "type": "hoverspot",
          "id": "hoverspot8"
        },
        {
          "yaw": -2.0926065933357556,
          "pitch": 0.20916874397715013,
          "title": "Patient Lockers",
          "text": "The clinic provides a place for patients to put their clothes and other belongings during their visit. If you're in need of a locker, feel free to ask your nurse for a locker key.",
          "type": "hint",
          "id": "hint4"
        }
      ]
    },
    {
      "id": "13-linear-accelerator-room-2-hallway-1",
      "name": "Linear Accelerator Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.0030099074138920656,
        "pitch": 0.14675325765259295,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.01428468849545439,
          "pitch": 0.20880484497287988,
          "rotation": 0,
          "target": "14-linear-accelerator-room-2-view-1"
        },
        {
          "yaw": -1.9139841209835744,
          "pitch": 0.21337154406264958,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-linear-accelerator-room-2-view-1",
      "name": "Linear Accelerator Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.215318038640941,
        "pitch": 0.07966212548405949,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 1.844850374079578,
          "pitch": 0.19871336693055142,
          "rotation": 0,
          "target": "27-lin-acc-2-exit-2"
        },
        {
          "yaw": 0.24677831661481164,
          "pitch": 0.19490075579033217,
          "rotation": 0,
          "target": "15-linear-accelerator-room-2-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9409110554642215,
          "pitch": 0.5130279776988864,
          "title": "Moral Support",
          "text": "It's perfectly natural to want a familiar face to accompany you during your visit. While a family member or caretaker can see you into the treatment room, they'll have to leave once the treatment process begins.",
          "type": "expand",
          "id": "expand1"
        }
      ]
    },
    {
      "id": "15-linear-accelerator-room-2-view-2",
      "name": "Linear Accelerator Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.48749164286722113,
          "pitch": 0.09318108535276437,
          "rotation": 0,
          "target": "26-lin-acc-2-exit-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.14423503729961595,
          "pitch": 0.3807754144128257,
          "title": "Adjustable Treatment Stations",
          "text": "The panels that patients lie on during their treatment are automated, letting doctors carefully adjust the height nad position of these stations in order to find the best angles for a patient's treatment.",
          "type": "info",
          "id": "info6"
        },
        {
          "yaw": -1.1504446070401837,
          "pitch": 0.13210059544352504,
          "title": "Linear Acceleration",
          "text": "The x-ray beams emitted by this machine are shaped to conform to a tumor's shape, allowing for minimal radiation exposure while ensuring maximum treatment efficiency.",
          "type": "hint",
          "id": "hint5"
        },
        {
          "yaw": 2.6147020308562334,
          "pitch": 0.34612112531520545,
          "title": "Laser-like Focus",
          "text": "Precise beams of light are emitted from special places within the room, helping doctors to position their patients in just the right places for them to receive their treatment.",
          "type": "info",
          "id": "info7"
        }
      ]
    },
    {
      "id": "16-nurses-station-view-1",
      "name": "Nurse's Station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.7689929951461973,
        "pitch": 0.06794710703051798,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 3.138975176059681,
          "pitch": 0.2993391349244927,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        },
        {
          "yaw": 0.4938465690364531,
          "pitch": 0.13663347185836372,
          "rotation": 0,
          "target": "17-nurses-station-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.39829883654842924,
          "pitch": 0.20818805866321632,
          "title": "Nurse's Station",
          "text": "While preparing for your radiation treatment session, you're likely to meet with one of our many nurses. They'll be happy to answer questions and help you prepare you for your treatment.",
          "type": "info",
          "id": "info8"
        },
        {
          "yaw": -1.4960498912538291,
          "pitch": 0.08950004932377453,
          "title": " ",
          "text": "Exit",
          "type": "hoverspot",
          "id": "hoverspot9"
        },
        {
          "yaw": 1.6320162656760822,
          "pitch": 0.6319558993961198,
          "title": "Weighing In",
          "text": "A scale is built into the floor right by the nurse's station, allowing for quick and easy measurements during the treatment process.",
          "type": "hint",
          "id": "hint6"
        }
      ]
    },
    {
      "id": "17-nurses-station-view-2",
      "name": "Nurse's Station",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.140709509412332,
        "pitch": 0.22952375746598364,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 3.0782964581551804,
          "pitch": 0.5248984966467223,
          "rotation": 0,
          "target": "18-clinic-hallway-far-left"
        },
        {
          "yaw": 0.07522836809896383,
          "pitch": 0.2697953791413319,
          "rotation": 7.0685834705770345,
          "target": "16-nurses-station-view-1"
        }
      ],
      "infoHotspots": [
        /*
        {
          "yaw": 0.765849976321185,
          "pitch": 0.2417936876545177,
          "title": "Ask a Nurse",
          "text": "You can talk to a working nurse if you have any additional questions about your examination, your current or future treatments, and anything else you're curious about.",
          "type": "expand",
          "id": "expand2"
        },
        */
        {
          "yaw": 3.0746003191819042,
          "pitch": 0.6459414276252335,
          "title": "textoverlay",
          "text": "This way:<br>Examination Rooms,<br>Linear Acceleration Room #3,<br>Clinic Exit",
          "type": "textoverlay",
          "id": "textoverlay7"
        }
      ]
    },
    {
      "id": "18-clinic-hallway-far-left",
      "name": "Clinic Hallway, Far Left",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5505947962314686,
        "pitch": 0.18368000437322962,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.11761193119708047,
          "pitch": 0.2961735005426167,
          "rotation": 0,
          "target": "19-exam-room"
        },
        {
          "yaw": 1.4652042239482288,
          "pitch": 0.2328771878731306,
          "rotation": 0,
          "target": "20-linear-accelerator-room-3-entrance"
        },
        {
          "yaw": -1.6066386257085856,
          "pitch": 0.3617346667870258,
          "rotation": 0,
          "target": "17-nurses-station-view-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-exam-room",
      "name": "Exam Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.9060614812504486,
        "pitch": 0.3701945831317843,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -2.0207950096463048,
          "pitch": 0.32010762840100604,
          "rotation": 0,
          "target": "18-clinic-hallway-far-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2725653981881031,
          "pitch": 0.13265404967719796,
          "title": "Translation and Interpretation",
          "text": "This device allows us to connect to an interpreter via live video call for all non-English speaking patients.",
          "type": "info",
          "id": "info9"
        },
        {
          "yaw": 1.5538135054479785,
          "pitch": 0.34057843797358345,
          "title": "Telemetry Devices",
          "text": "During your pre-treatment examination session, devices like these will be used to record things such as your heart rate, blood pressure, and body temperature.",
          "type": "info",
          "id": "info10"
        }
      ]
    },
    {
      "id": "20-linear-accelerator-room-3-entrance",
      "name": "Linear Accelerator Room 3, Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.09227915941754894,
        "pitch": 0.11246417715396362,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -3.0825966775362375,
          "pitch": 0.2587092911226563,
          "rotation": 0,
          "target": "18-clinic-hallway-far-left"
        },
        {
          "yaw": -0.019525987949057466,
          "pitch": 0.28825440089899246,
          "rotation": 0,
          "target": "21-linear-accelerator-room-3-hallway-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6253101542615536,
          "pitch": 0.12557734458065006,
          "title": " ",
          "text": "Exit",
          "type": "hoverspot",
          "id": "hoverspot10"
        }
      ]
    },
    {
      "id": "21-linear-accelerator-room-3-hallway-1",
      "name": "Linear Accelerator Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.37766100428290983,
        "pitch": 0.14258550225252264,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.04272263142835797,
          "pitch": 0.39500582157392117,
          "rotation": 0,
          "target": "22-linear-accelerator-room-3-view-1"
        },
        {
          "yaw": -1.5791201204335668,
          "pitch": 0.26136642131218935,
          "rotation": 0,
          "target": "20-linear-accelerator-room-3-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3120229103566778,
          "pitch": 0.046371289351073486,
          "title": "Leaden Doors",
          "text": "Thick doors help to seal this room off, protecting any passersby from excess exposure to the types of radiation used during the treatment process. It's extremely heavy, so be careful not to get in its way!",
          "type": "info",
          "id": "info11"
        },
        {
          "yaw": 1.1868286094115383,
          "pitch": 0.5887237153592917,
          "title": "In Search of Support",
          "text": "A family member or designated caretaker is able to accompany a patient here, but they will be asked to leave once treatment begins.",
          "type": "info",
          "id": "info12"
        }
      ]
    },
    {
      "id": "22-linear-accelerator-room-3-view-1",
      "name": "Linear Accelerator Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.0695881178474975,
        "pitch": 0.16804966861979054,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 2.693256840537062,
          "pitch": 0.07244761650290599,
          "rotation": 0.7853981633974483,
          "target": "23-linear-accelerator-room-3-view-2"
        },
        {
          "yaw": -2.893805929562525,
          "pitch": 0.2349447656200745,
          "rotation": 0,
          "target": "24-inside-the-linear-accelerator"
        },
        {
          "yaw": 1.4777517910840992,
          "pitch": 0.21308184448490053,
          "rotation": 0,
          "target": "28-lin-acc-3-exit-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.42904480435870695,
          "pitch": -0.02308280074479363,
          "title": "More About Masks",
          "text": "These special nettings are sized to each specific patient, giving our doctors a more uniform way of mapping out exactly where a patient might need to receive treatment. In this way, locating a specific treatment area will be similar to finding that same space on a grid.",
          "type": "info",
          "id": "info13"
        }
      ]
    },
    {
      "id": "23-linear-accelerator-room-3-view-2",
      "name": "Linear Accelerator Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.2392422651565944,
        "pitch": 0.14526622882387485,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.718231472709963,
          "pitch": 0.17330707459583472,
          "rotation": 0,
          "target": "22-linear-accelerator-room-3-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9142908932079727,
          "pitch": 0.14080360028966865,
          "title": "X-Ray Imaging",
          "text": "The linear acceleration machine's side paels allow for simultaneous capturing of x-ray images while treatment is administered. The images captured can prove useful to ensure that your treatment is going as planned.",
          "type": "info",
          "id": "info14"
        },
        {
          "yaw": 3.1014304376688617,
          "pitch": 0.12838641721607402,
          "title": "Full-Body Treatment Table",
          "text": "In the event that a patient required full body treatment, this table is used to put enough distance between patient and machine to best let the particle beams reach all affected areas.",
          "type": "hint",
          "id": "hint7"
        }
      ]
    },
    {
      "id": "24-inside-the-linear-accelerator",
      "name": "Inside the Linear Accelerator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.042721833063678716,
        "pitch": 0.007029011072120284,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -0.5985576934376304,
          "pitch": 0.32658411700719014,
          "rotation": 0,
          "target": "22-linear-accelerator-room-3-view-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.020140207984436387,
          "pitch": -0.11384762286751204,
          "title": "textoverlay",
          "text": "Turn your view around to see what it's like sitting inside the linear accelerator.",
          "type": "textoverlay",
          "id": "textoverlay8"
        },
        {
          "yaw": -3.127921665747973,
          "pitch": -1.5566696111476777,
          "title": "textoverlay",
          "text": "With the machine positioned at its current angle, you'll be looking up at the ceiling. Watch out for the shining lights.",
          "type": "textoverlay",
          "id": "textoverlay9"
        },
        {
          "yaw": 1.5825212016264256,
          "pitch": 0.20842794126149222,
          "title": "Concentrated Beams",
          "text": "This machine emits the radiation beams used during treatment.",
          "type": "info",
          "id": "info15"
        }
      ]
    },
    {
      "id": "25-ct-sim-room-exit",
      "name": "CT Simulation Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -3.1112670167469894,
        "pitch": 0.16187392574717308,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -3.09105182704954,
          "pitch": 0.21546475351265215,
          "rotation": 0,
          "target": "6-clinic-hallway-right"
        },
        {
          "yaw": 0.1250207383314006,
          "pitch": 0.1588003557655675,
          "rotation": 0.7853981633974483,
          "target": "8-ct-simulation-room-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4820345688301,
          "pitch": 0.21511171084051028,
          "title": "CT Simulation Dressing Room",
          "text": "Prior to their CT Simulation treatment, patients can use this dressing room to change into their hospital gowns. This, alongside the rooms within the patient waiting areas, is one of a handful of places you can change into a hospital gown.",
          "type": "info",
          "id": "info16"
        },
        {
          "yaw": -0.4182563099204497,
          "pitch": 0.3106083427944597,
          "title": " ",
          "text": "CT Simulation Control Room",
          "type": "hoverspot",
          "id": "hoverspot11"
        }
      ]
    },
    {
      "id": "26-lin-acc-2-exit-1",
      "name": "Linear Accelerator Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.2061554594083193,
        "pitch": 0.1499522362052872,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 1.844850374079578,
          "pitch": 0.19871336693055142,
          "rotation": 0,
          "target": "27-lin-acc-2-exit-2"
        },
        {
          "yaw": 0.24677831661481164,
          "pitch": 0.19490075579033217,
          "rotation": 0,
          "target": "15-linear-accelerator-room-2-view-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9409110554642215,
          "pitch": 0.5130279776988864,
          "title": "Moral Support",
          "text": "While a family member or caretaker can see you into the room, they have to leave once the treatment process begins.",
          "type": "expand",
          "id": "expand3"
        }

      ]
    },
    {
      "id": "27-lin-acc-2-exit-2",
      "name": "Linear Accelerator Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.983432303036345,
        "pitch": 0.1632292571192977,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": -1.8662250819588753,
          "pitch": 0.18744226810711773,
          "rotation": 0,
          "target": "10-clinic-hallway-left"
        },
        {
          "yaw": -0.020308924392992367,
          "pitch": 0.19064933667904427,
          "rotation": 0,
          "target": "14-linear-accelerator-room-2-view-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-lin-acc-3-exit-1",
      "name": "Linear Accelerator Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.565302889636591,
        "pitch": 0.15490212118418256,
        "fov": 1.4095511061330175
      },
      "linkHotspots": [
        {
          "yaw": 0.04272263142835797,
          "pitch": 0.39500582157392117,
          "rotation": 0,
          "target": "22-linear-accelerator-room-3-view-1"
        },
        {
          "yaw": -1.5961703841569168,
          "pitch": 0.12963528637638433,
          "rotation": 0,
          "target": "20-linear-accelerator-room-3-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.323429766177867,
          "pitch": 0.16969163701347156,
          "title": "Leaden Doors",
          "text": "Thick doors help to seal this room off, protecting any passersby from excess exposure to the types of radiation used during the treatment process. It's extremely heavy, so be careful not to get in its way!",
          "type": "info",
          "id": "info17"
        },
        {
          "yaw": 1.1868286094115383,
          "pitch": 0.5887237153592917,
          "title": "In Search of Support",
          "text": "A family member or designated caretaker is able to accompany a patient here, but they will be asked to leave once treatment begins.",
          "type": "info",
          "id": "info13"
        }
      ]
    }
  ],
  "name": "Interactive UCI Radiation Oncology Clinic",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
