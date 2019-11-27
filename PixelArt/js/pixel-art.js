window.onload = function(){
  paletaDeColores();
  miLienzo();
  pintar();
  
}
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//LAS VARIABLES

var paraPaleta = document.getElementById('paleta');
var paraGrilla = document.getElementById('grilla-pixeles');

//LA PALETA

function paletaDeColores(){
  for(i = 0; i < nombreColores.length; i++){
  var color = document.createElement('div');
  color.className = 'color-paleta';
  color.style.backgroundColor = nombreColores[i];
  paraPaleta.appendChild(color);
  }
}

//LA GRILLA 

function miLienzo(){
  for(i = 0; i < 1750; i++){
    var square = document.createElement('div');
    paraGrilla.appendChild(square);
  }
}

//EL INDICADOR

var indicadorColor = document.getElementById('indicador-de-color');
paraPaleta.addEventListener('click', newColor);
function newColor(e){
  indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
}

//PINTAR LA GRILLA

// paraGrilla.addEventListener('click', pintar);
function pintar(e){
  if(tapAndHold){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }
}


var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

// APRETADO O NO

var tapAndHold = false;
paraGrilla.addEventListener('mousedown', function (e){
  tapAndHold = true;
  pintar(e);
});
paraGrilla.addEventListener('mouseup', function (e){
  tapAndHold = false;
});
paraGrilla.addEventListener('mouseover', function (e){
    pintar(e);
  
});

// BORRADO Y GUARDADO

$("#borrar").click (function () {
  var $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "#ffffff"},2000);
});

$("#guardar").click(function() {
  guardarPixelArt();
});

// LOS SUPER

$("#batman").click (function () {
  cargarSuperheroe(batman);
});
$("#wonder").click (function () {
  cargarSuperheroe(wonder);
});
$("#flash").click (function () {
  cargarSuperheroe(flash);
});
$("#invisible").click (function () {
  cargarSuperheroe(invisible);
});