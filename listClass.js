class Class {
	constructor({name, place, day, time, color="#424242", week=""}) {
		let [start, end] = time.split("-")
		let [sh, sm] = start.split(":")
		let [eh, em] = end.split(":")
		this.name = name
		this.place = place
		this.day = parseInt(day)
		this.sh = parseInt(sh)
		this.sm = parseInt(sm)
		this.eh = parseInt(eh)
		this.em = parseInt(em)
		this.color = color
		this.week = week
	}
}

const listClass = [
	new Class({
		name: "Toán rời rạc",
		place: "D6-105",
		day: 2,
		time: "	06:45-10:05",
		color: color.teal
	}),
	new Class({
		name: "Nhập môn",
		place: "D6-105",
		day: 2,
		time: "10:15-11:50",
		color: color.green
	}),
	new Class({
		name: "Bóng bàn",
		place: "NTD",
		day: 2,
		time: "14:00-15:00",
		color: color.orange 
	}),
	new Class({
		name: "Cầu lông",
		place: "NTD",
		day: 2,
		time: "15:30-16:30",
		color: color.red 
	}),
	new Class({
		name: "Giải tích phức",
		place: "D6-106",
		day: 4,
		time: "07:35-11:00",
		color: color.cyan
	}),
	new Class({
		name: "Đường lối",
		place: "D9-201",
		day: 4,
		time: "12:30-16:05",
		color: color.deepOrange,
		week: "lẻ từ 12:30, chẵn từ 13:20"
	}),
	new Class({
		name: "Lý thuyết xác suất",
		place: "D6-106",
		day: 6,
		time: "	06:45-10:05",
		color: color.blue
	}),
	
	new Class({
		name: "Kỹ thuật lập trình",
		place: "D6-106",
		day: 6,
		time: "10:15-11:50",
		color: color.lightGreen
	})
]
