const extraDescriptionText = `

•  •  •  •  •  •  •

Daha fazla bu tarz içerik için gönderiyi beğenebilir, içerik hakkında fikrinizi belirtmek için yorum yapabilir, daha sonra işine yarayacağı için gönderiyi kaydedebilir ve gönderilerden haberdar olmak için sayfayı takip edebilirsin 🧡

📢 Ayrıca paylaşımlarımdan ilk sen haberdar olmak istiyorsan gönderi bildirimlerini açmayı unutma. Sayfayı takip ettikten sonra sağ üst köşede bulunan zil butonuna basman yeterlidir.

•  •  •  •  •  •  •

📌 Algoritmalar ve çözümleri
📌 Dart (Programlama Dili) dersleri
📌 Flutter (Mobil Programlama) dersleri, örnekleri ve kodları
📌 Programlama dillerindeki fonksiyonların mantığı
📌 Yazılımdaki ilerlemem ve gelişimim
📌 Sizlerden gelen sorular hakkında tartışmalar ve görseller
📌 Motivasyon ve başarı hikayeleri
⭐ Ve daha fazlası için sayfayı takip etmeyi unutmayın!

•  •  •  •  •  •  •

`;

const hashtagMaps = [
	{
		id: "general",
		name: "Genel",
		tags: [
			"bilgisayar",
			"bikodist",
			"flutter",
			"dartlang",
			"yazılım",
			"yazılımcı",
			"kodlama",
			"kod",
			"mühendis",
			"yazılımmühendisliği",
			"bilgisayarmühendisliği",
			"coder",
			"developer",
			"mobilprogramlama",
			"geliştirici",
		],
	},
	{
		id: "javascript",
		name: "Javascript",
		tags: [
			"bilgisayar",
			"bikodist",
			"yazılım",
			"yazılımcı",
			"webgelistirici",
			"webgeliştirici",
			"frontend",
			"javascript",
			"kodlama",
			"kod",
			"mühendis",
			"yazılımmühendisliği",
			"bilgisayarmühendisliği",
			"developer",
			"mobilprogramlama",
			"geliştirici",
		],
	},
	{
		id: "dart_flutter",
		name: "Dart - Flutter",
		tags: [
			"mobil",
			"bikodist",
			"dartlang",
			"flutter",
			"android",
			"ios",
			"crossplatform",
			"yazılımcı",
			"developer",
			"kodlama",
			"programlama",
			"mobilprogramlama",
			"mobileprogramming",
			"gelistirici",
			"geliştirici",
		],
	},
	{
		id: "algorythm",
		name: "Algoritma",
		tags: [
			"bikodist",
			"algoritma",
			"algorythm",
			"yazılımcı",
			"yazilimci",
			"yazılım",
			"programlama",
			"kodlama",
			"kod",
			"yazılımmühendisliği",
			"bilgisayarmühendisliği",
			"developer",
			"geliştirici",
		],
	},
	{
		id: "motivation",
		name: "Motivasyon",
		tags: [
			"bilgisayar",
			"bikodist",
			"yazilim",
			"coder",
			"yazılım",
			"developer",
			"gelistirici",
			"geliştirici",
			"motivasyon",
			"programlama",
			"mobilprogramlama",
			"basari",
			"başarı",
		],
	},
];

const readySettingMaps = [
	{
		id: "dart_question",
		name: "Dart Sorusu",
		description:
			"Bilme sırası sende. Hadi bil bakalım, doğru cevap hangisi? ⭐",
		tags: hashtagMaps[2].tags,
	},
	{
		id: "javascript_day",
		name: "Javascript Gün",
		description: "Javascript'te 6. günüm 🤩🥳 Bugün",
		tags: hashtagMaps[1].tags,
	},
	{
		id: "motivation",
		name: "Motivasyon",
		description: "",
		tags: hashtagMaps[4].tags,
	},
	{
		id: "word_puzzle",
		name: "Kelime Bulmaca",
		description:
			'Yazılım terimleriyle oluşturulmuş kelime bulmacada 5 kelime bulunuyor. Kelimeleri yorumlara "," ile ayırarak yazabilirsiniz.',
		tags: hashtagMaps[0].tags,
	},
	{
		id: "dart_flutter_lesson",
		name: "Dart Flutter Ders",
		description: "",
		tags: hashtagMaps[2].tags,
	},
	{
		id: "algorythm",
		name: "Algoritma",
		description:
			"Algoritma sorusunun cevabını bulabilecek misin? Kendine güveniyorsan seni yorumlara alalım!",
		tags: hashtagMaps[3].tags,
	},
	{
		id: "general",
		name: "Genel",
		description: "",
		tags: hashtagMaps[0].tags,
	},
];

const body = document.querySelector("body");
const btnCopy = document.querySelector(".copy");
const btnCopySmall = document.querySelector(".copy-small");
const readySettings = document.querySelector(".readySettings");
const description = document.getElementById("description");
const extraDescription = document.getElementById("extra_description");
const readyHashtags = document.querySelector(".hashtags");
const hashtags = document.getElementById("hashtags");
const textareas = document.getElementsByClassName("input_textarea");
const copiedPopup = document.querySelector(".copied-popup");

let timer;

init();

description.addEventListener("input", (e) => {
	if (description.value != "") {
		if (timer ?? false) clearTimeout(timer);
		timer = setTimeout(() => {
			// copyToClipboard();
			// description.focus();
		}, 500);
	}
});

[btnCopy, btnCopySmall].forEach((element) => {
	element.addEventListener("click", function (ev) {
		copyToClipboard();
	});
});

readySettings.addEventListener("click", (e) => {
	if (e.target.classList.contains("readySettingItem")) {
		let map = readySettingMaps.filter((map) => {
			if (map.id == e.target.dataset.id) {
				return map;
			}
		})[0];

		description.value = map.description;
		generateExtraDescription();
		generateHashtags(map.tags);
		copyToClipboard();
		updateTextareasHeight();
	}
});

readyHashtags.addEventListener("click", (e) => {
	if (e.target.classList.contains("hashtagItem")) {
		let map = hashtagMaps.filter((map) => {
			if (map.id == e.target.dataset.id) {
				return map;
			}
		})[0];
		generateHashtags(map.tags);
	}
});

function generateHashtags(tags) {
	let newTags = [...tags];
	let mixedTags = [];
	let length = newTags.length;

	for (let i = 0; i < length; i++) {
		let index = Math.floor(Math.random() * newTags.length);
		mixedTags.push(newTags[index]);
		newTags.splice(index, 1);
	}

	let tagsStr = "#" + mixedTags[0];

	for (let i = 1; i < mixedTags.length; i++) {
		const element = mixedTags[i];
		tagsStr += ", #" + element;
	}

	hashtags.value = tagsStr;

	updateTextareaHeight(hashtags);
}

function generateExtraDescription() {
	extraDescription.value = extraDescriptionText;
	updateTextareaHeight(extraDescription);
}

function init() {
	//readySettings
	for (let i = 0; i < readySettingMaps.length; i++) {
		const element = readySettingMaps[i];
		let div = `<div data-id="${element.id}" class="readySettingItem">${element.name}</div>`;
		readySettings
			.querySelector(".readySettings_content")
			.insertAdjacentHTML("beforeend", div);
	}

	//extraDescription
	generateExtraDescription();

	//readyHashtags
	for (let i = 0; i < hashtagMaps.length; i++) {
		const element = hashtagMaps[i];
		let div = `<div data-id="${element.id}" class="hashtagItem">${element.name}</div>`;
		readyHashtags.insertAdjacentHTML("beforeend", div);
	}

	//auto-resize for textarea
	updateTextareasHeight();
}

function updateTextareasHeight() {
	[...textareas].forEach((textarea) => {
		updateTextareaHeight(textarea);
	});
}

[...textareas].forEach((textarea) => {
	textarea.addEventListener("input", (e) => {
		updateTextareaHeight(textarea);
	});
});

function updateTextareaHeight(textarea) {
	textarea.style.height = "auto";
	textarea.style.height = textarea.scrollHeight - 32 + "px";
}

function copyToClipboard() {
	var tempInput = document.createElement("textarea");
	body.appendChild(tempInput);
	tempInput.innerHTML =
		description.value + extraDescription.value + hashtags.value;
	tempInput.select();
	document.execCommand("copy");
	body.removeChild(tempInput);

	if (!copiedPopup.classList.contains("show")) {
		copiedPopup.classList.add("show");
		setTimeout(() => {
			copiedPopup.classList.remove("show");
		}, 1000);
	}
}
