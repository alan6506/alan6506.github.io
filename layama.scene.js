// Created with Motiva Layama v1.5 LITE https://www.motivacg.com/layama

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "1230000", a: "FStormCamera_001", p: new BABYLON.Vector3(8239, 4379.95, 4591.89), l: new BABYLON.Vector3(8239.01, 4379.95, 4591.99)});
   layamaCameras.push({n: "1230001", a: "FStormCamera_002", p: new BABYLON.Vector3(7837.94, 4379.95, 4609.77), l: new BABYLON.Vector3(7838.03, 4379.95, 4609.79)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

