const canvas = document.getElementById("time-table")
const ctx = canvas.getContext('2d')
const xOffset = 100
const yOffset = 40
const width = 280
const height = yOffset
const baseStart = 675
const baseEnd = 1775
const step = 50
const fontSize = "18px"
const font = "Noto Serif Blk"
let maxWidth = xOffset;
let maxHeight = yOffset/2;

function configCtx () {
	ctx.fillStyle = "#fafbfc"
	ctx.fillRect(0,0,canvas.width, canvas.height)
	ctx.font = `${fontSize} ${font}`
	ctx.textBaseline = "middle"
	ctx.textAlign = "center"
}



function renderDay() {

	ctx.fillStyle = "#424242"
	ctx.fillRect(0,0,100,height)

	let dayIndex = 0;
	for(day = 2; day <= 7; day ++) {
		let x = xOffset + dayIndex*width
		let y = 0;
		ctx.fillStyle = "#2E7D32"
		ctx.fillRect(x, 0, width, height)

		x = xOffset +  dayIndex*width+width/2
		y = height / 2
		ctx.fillStyle = "#FFF"
		ctx.fillText(days[day], x, y)

		dayIndex++
	}
	maxWidth += width * 6
}


function renderTime() {
	const width = 100
	const height = yOffset

	let timeIndex = 0;
	for(time = baseStart; time <= baseEnd; time += step){
		let hour = Math.floor(time/100)
		let minute = (time - hour * 100) / 100 * 60
		hour = (''+hour).length == 1 ? `0${hour}` : hour;
		minute = (''+minute).length == 1 ? `0${minute}` : minute

		x = 0
		y = yOffset/2 + timeIndex * height
		ctx.fillStyle = "#424242"
		ctx.fillRect(x, y, width, height)
		
		x = width / 2
		y = yOffset + timeIndex * height
		ctx.fillStyle = "#fff"
		ctx.fillText(`${hour}:${minute}`, x, y)
		ctx.beginPath()
		ctx.strokeStyle = "#42424222"
		ctx.moveTo(xOffset, y)
		ctx.lineTo(maxWidth, y)
		ctx.stroke()

		timeIndex ++;
		maxHeight += height
	}
}

function renderBorder() {
	ctx.beginPath()
	ctx.strokeStyle = "#424242"
	ctx.moveTo(0, maxHeight)
	ctx.lineTo(maxWidth, maxHeight)
	ctx.stroke()

	ctx.beginPath()
	ctx.strokeStyle = "#424242"
	ctx.moveTo(0, 0)
	ctx.lineTo(maxWidth, 0)
	ctx.stroke()

	ctx.beginPath()
	ctx.strokeStyle = "#424242"
	ctx.moveTo(maxWidth, 0)
	ctx.lineTo(maxWidth, maxHeight)
	ctx.stroke()
}

function renderEvent({sh, sm, eh, em, place, name, day, color, week=""}) {
	day = day - 2
	const start = sh + sm/60 - baseStart/100
	const end = eh + em/60 - baseStart/100
	let x = xOffset + day*width
	let newYOffset = yOffset + start*height*2
	const newHeight = (end - start)* height * 2

	const displaySh = (''+sh).padStart(2,"0");
	const displaySm = (''+sm).padStart(2,"0");
	const displayEh = (''+eh).padStart(2, "0")
	const displayEm = (''+em).padStart(2, "0")
	const displayTime = `${displaySh}:${displaySm}-${displayEh}:${displayEm}`

	ctx.fillStyle = color
	ctx.fillRect(x, newYOffset, width, newHeight)

	x += width / 2
	y = newYOffset + 20
	ctx.fillStyle = "#fff"
	ctx.fillText(name, x, y)

	y += 25
	ctx.fillText(place, x, y)

	y += 25
	ctx.fillText(displayTime, x, y)

	y += 25
	week = week? "w: " + week : "" 
	ctx.fillText(week, x, y)
}


renderDay() 
renderTime()
renderBorder()
canvas.height = maxHeight
canvas.width = maxWidth
configCtx()
renderDay() 
renderTime()
renderBorder()
listClass.forEach(item => {
	renderEvent(item)
})

renderTime()