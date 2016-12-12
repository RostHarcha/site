
window.onload = init;

var map;
var ctxMap;

var pl;
var ctxPl;

var gameWith = 800;
var gameHaiht = 500;

var drawBtn;
var clearBtn;

var background = new Image();
background.src = "img/fone.jpg"

var tiles = new Image();
tiles.src = "img/tiles.jpg"

function init()
{
	map = document.getElementById("map");
	ctxMap = map.getContext("2d");

	pl = document.getElementById("player");
	ctxPl = pl.getContext("2d");

	map.with = gameWith;
	map.haight = gameHaiht;
	pl.with = gameWith;
	pl.haight = gameHaiht;	

	drawBtn = document.getElementById("drawBtn");
	clearBtn = document.getElementById("clearBtn");

	drawBtn.addEventListener("click",drawRect,false);
	clearBtn.addEventListener("click",clearRect,false);

	drawBg();
	drawPlayer();
}

function drawRect() 
{
	ctxMap.fillStyle = "#3D3D3D";
	ctxMap.fillRect(10, 10, 100, 100);
}

function clearRect()
{
	ctxMap.clearRect(0, 0, 800, 500);
}﻿

function drawBg()
{
	ctxMap.drawImage(background, 0, 0, 800, 480,
		0, 0, gameWith, gameHaiht);
}

function drawPlayer()
{
	ctxMap.drawImage(tiles, 0, 0, 56, 75,
		0, 0, 112, 150);	
}