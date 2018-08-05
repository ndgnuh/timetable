class Class {
	constructor(name, place, day, sh, sm, eh, em, color="#424242") {
		this.name = name
		this.place = place
		this.day = day
		this.sh = sh
		this.sm = sm
		this.eh = eh
		this.em = em
		this.color = color
	}
}

const listClass = [
	new Class("Giải tích hàm", "D4-103", 6, 9, 20, 11, 50, color.indigo),
	new Class("Giải tích hàm", "D6-105", 3, 7, 35, 9, 15, color.indigo),
	new Class("Giải tích số", "D6-105", 3, 9, 20, 11, 50, color.blue),
	new Class("Giải tích số", "D4-103", 6, 7, 35, 9, 15, color.blue),
	new Class("Đại số hiện đại", "D6-107", 2, 9, 20, 11, 50, color.green),
	new Class("VLĐC II (LT)", "C1-302", 2, 12, 30, 14, 05, color.orange),
	new Class("VLĐC II (BT) Chẵn", "C1-302", 2, 14, 15, 15, 50, color.orange),
	new Class("Quân sự chung", "C1-302", 4, 12, 30, 15, 00, color.brown),
	new Class("Quân sự chung", "SVD", 5, 13,00,17,00, color.brown),
	new Class("Tư tưởng HCM", "C1-302", 4,15,05,17,35, color.lime),
	new Class("Tin đại cương", "C1-302",5,6,45,10,05, color.teal),
	new Class("Tin đại cương", "D5-302",6,15,05,17,35, color.teal),
	new Class("VLĐC II (TN)","D3-?",7,6,45,9,15,color.orange),
]