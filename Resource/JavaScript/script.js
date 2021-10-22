// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// //* element
// const songName = $('#header__songName');
// const songAuthor = $('#header__songAuthor');
// const songImage = $('#songImage');
// const songImageWrap = $('#songImageWrap');
// const songListElement = $('#songList');
// const frontFace = $('#app__frontFace');
// const backFace = $('#app__backFace');
// const progress = $('#progress__range');
// const volumeBar = $('#listButton__volume-bar');
// const songListHTML = $('#songList');
// //* button
// const songListButton = $('#listButton__list');
// const closeButton = $('#header__closeButton');
// const likeButton = $('#listButton__like');
// const playButton = $('#control__play');
// const prevButton = $('#control__previous');
// const nextButton = $('#control__next');
// const repeatButton = $('#listButton__repeat');
// const randomButton = $('#listButton__random');
// const volumeButton = $('#listButton__volume');
// //* audio
// const audioSong = $('#audioSong');
// const audioList = [];

// //* item
// let durationSongList;

// //* player music
// const app = {
//     currentIndex: 0,
//     isLike: false,
//     isPlaying: false,
//     isRepeat: false,
//     isRandom: false,
//     isShowVolumeBar: false,
//     songs: [
//         {
//             id: 0,
//             name: "Anh chưa đủ tư cách",
//             singer: "Lý Tuấn Kiệt",
//             path: "./Resource/Audio/song-0.mp3",
//             image: "./Resource/Image/songs/song-0.jpg",
//             isLike: false
//         },
//         {
//             id: 1,
//             name: "Anh đã khóc vì em",
//             singer: "Đinh Tùng Huy",
//             path: "./Resource/Audio/song-1.mp3",
//             image: "./Resource/Image/songs/song-1.jpg",
//             isLike: false
//         },
//         {
//             id: 2,
//             name: "Vì anh quá thương em",
//             singer: "Hải Nam",
//             path: "./Resource/Audio/song-2.mp3",
//             image: "./Resource/Image/songs/song-2.jpg",
//             isLike: false
//         },
//         {
//             id: 3,
//             name: "Cứ ngỡ",
//             singer: "Hoài Bảo ft Hương Ly",
//             path: "./Resource/Audio/song-3.mp3",
//             image: "./Resource/Image/songs/song-3.jpg",
//             isLike: false
//         },
//         {
//             id: 4,
//             name: "Em nào có tội",
//             singer: "Thương Võ",
//             path: "./Resource/Audio/song-4.mp3",
//             image: "./Resource/Image/songs/song-4.jpg",
//             isLike: false
//         },
//         {
//             id: 5,
//             name: "Họ yêu ai mất rồi",
//             singer: "Doãn Hiếu",
//             path: "./Resource/Audio/song-5.mp3",
//             image: "./Resource/Image/songs/song-5.jpg",
//             isLike: false
//         },
//         {
//             id: 6,
//             name: "Hôm nay em cưới rồi",
//             singer: "Khải Đăng",
//             path: "./Resource/Audio/song-6.mp3",
//             image: "./Resource/Image/songs/song-6.jpg",
//             isLike: false
//         },
//         {
//             id: 7,
//             name: "Người lạ thoáng qua",
//             singer: "Đinh Tùng Huy",
//             path: "./Resource/Audio/song-7.mp3",
//             image: "./Resource/Image/songs/song-7.jpg",
//             isLike: false
//         },
//         {
//             id: 8,
//             name: "Phận duyên lỡ làng",
//             singer: "Phát Huy t4",
//             path: "./Resource/Audio/song-8.mp3",
//             image: "./Resource/Image/songs/song-8.jpg",
//             isLike: false
//         },
//         {
//             id: 9,
//             name: "Thê Lương",
//             singer: "Phúc Chinh",
//             path: "./Resource/Audio/song-9.mp3",
//             image: "./Resource/Image/songs/song-9.jpg",
//             isLike: false
//         },
//         {
//             id: 10,
//             name: "Cô đơn dành cho ai",
//             singer: "Hồ Phi Nal",
//             path: "./Resource/Audio/song-10.mp3",
//             image: "./Resource/Image/songs/song-10.jpg",
//             isLike: false
//         },
//         {
//             id: 11,
//             name: "Cứ vội vàng",
//             singer: "Roti",
//             path: "./Resource/Audio/song-11.mp3",
//             image: "./Resource/Image/songs/song-11.jpg",
//             isLike: false
//         },
//         {
//             id: 12,
//             name: "Em không hiểu",
//             singer: "Changg x Minh Huy",
//             path: "./Resource/Audio/song-12.mp3",
//             image: "./Resource/Image/songs/song-12.jpg",
//             isLike: false
//         },
//         {
//             id: 13,
//             name: "Ghé qua",
//             singer: "Dick X Tofu X PC",
//             path: "./Resource/Audio/song-13.mp3",
//             image: "./Resource/Image/songs/song-13.jpg",
//             isLike: false
//         },
//         {
//             id: 14,
//             name: "Lặng lẽ buông",
//             singer: "Roti",
//             path: "./Resource/Audio/song-14.mp3",
//             image: "./Resource/Image/songs/song-14.jpg",
//             isLike: false
//         },
//         {
//             id: 15,
//             name: "Lần hẹn hò đầu tiên",
//             singer: "Huyền Tâm Môn",
//             path: "./Resource/Audio/song-15.mp3",
//             image: "./Resource/Image/songs/song-15.jpg",
//             isLike: false
//         },
//         {
//             id: 16,
//             name: "Từng yêu",
//             singer: "Phan Duy Anh",
//             path: "./Resource/Audio/song-16.mp3",
//             image: "./Resource/Image/songs/song-16.jpg",
//             isLike: false
//         },
//         {
//             id: 17,
//             name: "Lemon Tree",
//             singer: "Fools Garden",
//             path: "./Resource/Audio/song-17.mp3",
//             image: "./Resource/Image/songs/song-17.jpg",
//             isLike: false
//         }
//     ],
//     activeButton: function (btn) {
//         if (btn) {
//             btn.classList.add('activeButton');
//         }
//     },
//     defineProperties: function () {
//         // get current song
//         Object.defineProperty(this, 'currentSong', {
//             get: function () {
//                 return this.songs[this.currentIndex];
//             }
//         })
//         // get song quantity
//         Object.defineProperty(this, 'songQuantity', {
//             get: function () {
//                 return this.songs.length;
//             }
//         })
//     },
//     handleEvent: function () {
//         // event rotate CD
//         const songImageAnimate = songImage.animate(
//             [
//                 { transform: 'rotateZ(360deg)' }
//             ],
//             {
//                 duration: 10000,
//                 iterations: Infinity
//             })
//         songImageAnimate.pause();

//         // event click song list button
//         songListButton.onclick = function () {
//             frontFace.style.animation = `faceUp ease 0.6s forwards`;
//             backFace.style.animation = `faceUp ease 0.6s forwards`;
//         }
//         // event click close back face
//         closeButton.onclick = function () {
//             frontFace.style.animation = `faceDown ease 0.6s forwards`;
//             backFace.style.animation = `faceDown ease 0.6s forwards`;
//         }
//         // event click like button
//         likeButton.onclick = () => {
//             this.isLike = !this.isLike;
//             // like icon back face (song)
//             this.updateIsLiked(this.isLike);
//             // like icon front face
//             likeButton.firstElementChild.classList.toggle('hidden');
//             likeButton.lastElementChild.classList.toggle('hidden');
//         }
//         // event click play button
//         playButton.onclick = () => {
//             this.isPlaying = !this.isPlaying;
//             if (!this.isPlaying) {
//                 audioSong.pause();
//             } else {
//                 audioSong.play();
//             }
//         }
//         // event when song playing
//         audioSong.onplaying = () => {
//             this.isPlaying = true;
//             songImageAnimate.play();
//             playButton.firstElementChild.classList.add('hidden');
//             playButton.lastElementChild.classList.remove('hidden');
//         }
//         // event when song pause
//         audioSong.onpause = function () {
//             this.isPlaying = false;
//             songImageAnimate.pause();
//             playButton.firstElementChild.classList.remove('hidden');
//             playButton.lastElementChild.classList.add('hidden');
//         }
//         // event click previous button 
//         prevButton.onclick = () => {
//             this.prevSong();
//         }
//         // event click previous button 
//         nextButton.onclick = () => {
//             this.nextSong();
//         }
//         // event click repeat button
//         repeatButton.onclick = () => {
//             this.isRepeat = !this.isRepeat;
//             repeatButton.classList.toggle('activeButton', this.isRepeat);
//         }
//         // event audio time update affect to progress bar
//         audioSong.ontimeupdate = function () {
//             if (audioSong.duration) {
//                 progress.value = +(audioSong.currentTime / audioSong.duration * 100);
//             }
//         }
//         // event audio ended
//         audioSong.onended = () => {
//             this.endedSong();
//         }
//         // event changing value progress bar
//         progress.onchange = function (e) {
//             if (audioSong.duration) {
//                 audioSong.currentTime = +(e.target.value / 100 * audioSong.duration);
//             }
//         }
//         // event click random button 
//         randomButton.onclick = () => {
//             this.isRandom = !this.isRandom;
//             randomButton.classList.toggle('activeButton', this.isRandom);
//         }
//         // event click volume button 
//         volumeButton.onclick = function () {
//             volumeBar.classList.toggle('hidden', this.isShowVolumeBar);
//             this.isShowVolumeBar = !this.isShowVolumeBar;
//         }
//         // event stop propagation volume bar
//         volumeBar.onclick = function (e) {
//             e.stopPropagation();
//         }
//         // event change volume bar
//         volumeBar.oninput = function () {
//             audioSong.volume = this.value / 100;
//         }
//         // event click song list in html
//         songListHTML.onclick = (e) => {
//             const songItem = e.target.closest('.songList__item:not(.activeSong');
//             if (songItem) {
//                 this.playSongByIndex(+songItem.dataset.index);
//             }
//         }
//     },
//     playSongByIndex: function (index) {
//         this.loadSongByIndex(this.currentIndex = index);
//         audioSong.play();
//     },
//     playSong: function () {
//         this.loadSongByIndex(this.currentIndex);
//         audioSong.play();
//     },
//     resetLikeButton: function () {
//         this.isLike = false;
//         likeButton.firstElementChild.classList.remove('hidden');
//         likeButton.lastElementChild.classList.add('hidden');
//     },
//     updateIsLiked: function (flag) {
//         for (let songElement of $$('.songList__item')) {
//             if (+songElement.dataset.index === this.currentIndex) {
//                 const icon = songElement.children[1].children[0];
//                 if (flag) {
//                     icon.classList.remove('hidden');
//                     this.songs[this.currentIndex].isLike = true;
//                 } else {
//                     icon.classList.add('hidden');
//                     this.songs[this.currentIndex].isLike = false;
//                 }
//             }
//         }
//     },
//     randomSong: function () {
//         if (this.isRandom) {
//             let newIndex;
//             do {
//                 newIndex = ~~(this.songQuantity * Math.random())
//             } while (this.currentIndex === newIndex);
//             this.currentIndex = newIndex;
//         }
//     },
//     render: function () {
//         // get all audio song in local file
//         for (let i = 0; i < this.songQuantity; i++) {
//             audioList.push(`./Resource/Audio/song-${i}.mp3`);
//         }
//         const htmls = this.songs.map((song, index) => {
//             const aud = new Audio(audioList[index]);
//             aud.preload = 'metadata';
//             aud.onloadedmetadata = function () {
//                 durationSongList[index].textContent = secondToMinute(this.duration);
//             }

//             return `
//                 <li id="songList__item" class="songList__item" data-index="${index}">
//                 <div class="songList__item-information">
//                     <h5 class="songList__item-songName">${song.name}</h5>
//                     <h6 class="songList__item-author">${song.singer}</h6>
//                 </div>
//                 <div class="songList__item-status">
//                     <i class="songList__item-iconIsLiked hidden fas fa-heart"></i>
//                     <i class="songList__item-iconIsPlaying hidden fas fa-music"></i>
//                     <div class="songList__item-duration">${aud.duration}</div>
//                 </div>
//                 </li>
//             `
//         })
//         songListElement.innerHTML = htmls.join('');
//         durationSongList = $$('.songList__item-duration');
//     },
//     activeSong: function () {
//         const songList = $$('.songList__item');
//         for (let song of songList) {
//             const icon = song.children[1].children[1];
//             if (+song.dataset.index === this.currentIndex) {
//                 if (icon) icon.classList.remove('hidden');
//                 song.classList.add('activeSong');
//                 song.classList.add('activeSong');
//             } else {
//                 if (icon) icon.classList.add('hidden');
//                 song.classList.remove('activeSong');
//             }
//         }
//     },
//     endedSong: function () {
//         if (this.isRepeat) {
//             audioSong.play();
//         } else {
//             this.nextSong();
//         }
//     },
//     prevSong: function () {
//         if (this.isRandom) this.randomSong();
//         else {
//             if (--this.currentIndex < 0) {
//                 this.currentIndex = this.songs.length - 1;
//             }
//         }
//         this.loadSongByIndex(this.currentIndex);
//         audioSong.play();
//     },
//     nextSong: function () {
//         if (this.isRandom) this.randomSong();
//         else {
//             if (++this.currentIndex >= this.songs.length) {
//                 this.currentIndex = 0;
//             }
//         }
//         this.loadSongByIndex(this.currentIndex);
//         audioSong.play();
//     },
//     loadSongByIndex: function (index) {
//         songName.textContent = this.songs[index].name;
//         songAuthor.textContent = this.songs[index].singer;
//         songImage.style.backgroundImage = `url('${this.songs[index].image}')`;
//         audioSong.src = this.songs[index].path;
//         this.activeSong();
//         this.resetLikeButton();
//     },
//     start: function () {
//         this.defineProperties();
//         this.render();
//         this.handleEvent();
//         this.loadSongByIndex(this.currentIndex);
//     }
// }

// // app start
// app.start();

// // second to minute
// function secondToMinute(seconds) {
//     const format = val => `0${Math.floor(val)}`.slice(-2)
//     const minutes = (seconds % 3600) / 60
//     return [minutes, seconds % 60].map(format).join(':')
// }

const $ = document.querySelector.bind(document), $$ = document.querySelectorAll.bind(document), songName = $("#header__songName"), songAuthor = $("#header__songAuthor"), songImage = $("#songImage"), songImageWrap = $("#songImageWrap"), songListElement = $("#songList"), frontFace = $("#app__frontFace"), backFace = $("#app__backFace"), progress = $("#progress__range"), volumeBar = $("#listButton__volume-bar"), songListHTML = $("#songList"), songListButton = $("#listButton__list"), closeButton = $("#header__closeButton"), likeButton = $("#listButton__like"), playButton = $("#control__play"), prevButton = $("#control__previous"), nextButton = $("#control__next"), repeatButton = $("#listButton__repeat"), randomButton = $("#listButton__random"), volumeButton = $("#listButton__volume"), audioSong = $("#audioSong"), audioList = []; let durationSongList; const app = { currentIndex: 0, isLike: !1, isPlaying: !1, isRepeat: !1, isRandom: !1, isShowVolumeBar: !1, songs: [{ id: 0, name: "Anh chưa đủ tư cách", singer: "Lý Tuấn Kiệt", path: "./Resource/Audio/song-0.mp3", image: "./Resource/Image/songs/song-0.jpg", isLike: !1 }, { id: 1, name: "Anh đã khóc vì em", singer: "Đinh Tùng Huy", path: "./Resource/Audio/song-1.mp3", image: "./Resource/Image/songs/song-1.jpg", isLike: !1 }, { id: 2, name: "Vì anh quá thương em", singer: "Hải Nam", path: "./Resource/Audio/song-2.mp3", image: "./Resource/Image/songs/song-2.jpg", isLike: !1 }, { id: 3, name: "Cứ ngỡ", singer: "Hoài Bảo ft Hương Ly", path: "./Resource/Audio/song-3.mp3", image: "./Resource/Image/songs/song-3.jpg", isLike: !1 }, { id: 4, name: "Em nào có tội", singer: "Thương Võ", path: "./Resource/Audio/song-4.mp3", image: "./Resource/Image/songs/song-4.jpg", isLike: !1 }, { id: 5, name: "Họ yêu ai mất rồi", singer: "Doãn Hiếu", path: "./Resource/Audio/song-5.mp3", image: "./Resource/Image/songs/song-5.jpg", isLike: !1 }, { id: 6, name: "Hôm nay em cưới rồi", singer: "Khải Đăng", path: "./Resource/Audio/song-6.mp3", image: "./Resource/Image/songs/song-6.jpg", isLike: !1 }, { id: 7, name: "Người lạ thoáng qua", singer: "Đinh Tùng Huy", path: "./Resource/Audio/song-7.mp3", image: "./Resource/Image/songs/song-7.jpg", isLike: !1 }, { id: 8, name: "Phận duyên lỡ làng", singer: "Phát Huy t4", path: "./Resource/Audio/song-8.mp3", image: "./Resource/Image/songs/song-8.jpg", isLike: !1 }, { id: 9, name: "Thê Lương", singer: "Phúc Chinh", path: "./Resource/Audio/song-9.mp3", image: "./Resource/Image/songs/song-9.jpg", isLike: !1 }, { id: 10, name: "Cô đơn dành cho ai", singer: "Hồ Phi Nal", path: "./Resource/Audio/song-10.mp3", image: "./Resource/Image/songs/song-10.jpg", isLike: !1 }, { id: 11, name: "Cứ vội vàng", singer: "Roti", path: "./Resource/Audio/song-11.mp3", image: "./Resource/Image/songs/song-11.jpg", isLike: !1 }, { id: 12, name: "Em không hiểu", singer: "Changg x Minh Huy", path: "./Resource/Audio/song-12.mp3", image: "./Resource/Image/songs/song-12.jpg", isLike: !1 }, { id: 13, name: "Ghé qua", singer: "Dick X Tofu X PC", path: "./Resource/Audio/song-13.mp3", image: "./Resource/Image/songs/song-13.jpg", isLike: !1 }, { id: 14, name: "Lặng lẽ buông", singer: "Roti", path: "./Resource/Audio/song-14.mp3", image: "./Resource/Image/songs/song-14.jpg", isLike: !1 }, { id: 15, name: "Lần hẹn hò đầu tiên", singer: "Huyền Tâm Môn", path: "./Resource/Audio/song-15.mp3", image: "./Resource/Image/songs/song-15.jpg", isLike: !1 }, { id: 16, name: "Từng yêu", singer: "Phan Duy Anh", path: "./Resource/Audio/song-16.mp3", image: "./Resource/Image/songs/song-16.jpg", isLike: !1 }, { id: 17, name: "Lemon Tree", singer: "Fools Garden", path: "./Resource/Audio/song-17.mp3", image: "./Resource/Image/songs/song-17.jpg", isLike: !1 }], activeButton: function (n) { n && n.classList.add("activeButton") }, defineProperties: function () { Object.defineProperty(this, "currentSong", { get: function () { return this.songs[this.currentIndex] } }), Object.defineProperty(this, "songQuantity", { get: function () { return this.songs.length } }) }, handleEvent: function () { const n = songImage.animate([{ transform: "rotateZ(360deg)" }], { duration: 1e4, iterations: 1 / 0 }); n.pause(), songListButton.onclick = function () { frontFace.style.animation = "faceUp ease 0.6s forwards", backFace.style.animation = "faceUp ease 0.6s forwards" }, closeButton.onclick = function () { frontFace.style.animation = "faceDown ease 0.6s forwards", backFace.style.animation = "faceDown ease 0.6s forwards" }, likeButton.onclick = (() => { this.isLike = !this.isLike, this.updateIsLiked(this.isLike), likeButton.firstElementChild.classList.toggle("hidden"), likeButton.lastElementChild.classList.toggle("hidden") }), playButton.onclick = (() => { this.isPlaying = !this.isPlaying, this.isPlaying ? audioSong.play() : audioSong.pause() }), audioSong.onplaying = (() => { this.isPlaying = !0, n.play(), playButton.firstElementChild.classList.add("hidden"), playButton.lastElementChild.classList.remove("hidden") }), audioSong.onpause = function () { this.isPlaying = !1, n.pause(), playButton.firstElementChild.classList.remove("hidden"), playButton.lastElementChild.classList.add("hidden") }, prevButton.onclick = (() => { this.prevSong() }), nextButton.onclick = (() => { this.nextSong() }), repeatButton.onclick = (() => { this.isRepeat = !this.isRepeat, repeatButton.classList.toggle("activeButton", this.isRepeat) }), audioSong.ontimeupdate = function () { audioSong.duration && (progress.value = +audioSong.currentTime / audioSong.duration * 100) }, audioSong.onended = (() => { this.endedSong() }), progress.onchange = function (n) { audioSong.duration && (audioSong.currentTime = +n.target.value / 100 * audioSong.duration) }, randomButton.onclick = (() => { this.isRandom = !this.isRandom, randomButton.classList.toggle("activeButton", this.isRandom) }), volumeButton.onclick = function () { volumeBar.classList.toggle("hidden", this.isShowVolumeBar), this.isShowVolumeBar = !this.isShowVolumeBar }, volumeBar.onclick = function (n) { n.stopPropagation() }, volumeBar.oninput = function () { audioSong.volume = this.value / 100 }, songListHTML.onclick = (n => { const e = n.target.closest(".songList__item:not(.activeSong"); e && this.playSongByIndex(+e.dataset.index) }) }, playSongByIndex: function (n) { this.loadSongByIndex(this.currentIndex = n), audioSong.play() }, playSong: function () { this.loadSongByIndex(this.currentIndex), audioSong.play() }, resetLikeButton: function () { this.isLike = !1, likeButton.firstElementChild.classList.remove("hidden"), likeButton.lastElementChild.classList.add("hidden") }, updateIsLiked: function (n) { for (let e of $$(".songList__item")) if (+e.dataset.index === this.currentIndex) { const i = e.children[1].children[0]; n ? (i.classList.remove("hidden"), this.songs[this.currentIndex].isLike = !0) : (i.classList.add("hidden"), this.songs[this.currentIndex].isLike = !1) } }, randomSong: function () { if (this.isRandom) { let n; do { n = ~~(this.songQuantity * Math.random()) } while (this.currentIndex === n); this.currentIndex = n } }, render: function () { for (let n = 0; n < this.songQuantity; n++)audioList.push(`./Resource/Audio/song-${n}.mp3`); const n = this.songs.map((n, e) => { const i = new Audio(audioList[e]); return i.preload = "metadata", i.onloadedmetadata = function () { durationSongList[e].textContent = secondToMinute(this.duration) }, `\n                <li id="songList__item" class="songList__item" data-index="${e}">\n                <div class="songList__item-information">\n                    <h5 class="songList__item-songName">${n.name}</h5>\n                    <h6 class="songList__item-author">${n.singer}</h6>\n                </div>\n                <div class="songList__item-status">\n                    <i class="songList__item-iconIsLiked hidden fas fa-heart"></i>\n                    <i class="songList__item-iconIsPlaying hidden fas fa-music"></i>\n                    <div class="songList__item-duration">${i.duration}</div>\n                </div>\n                </li>\n            ` }); songListElement.innerHTML = n.join(""), durationSongList = $$(".songList__item-duration") }, activeSong: function () { const n = $$(".songList__item"); for (let e of n) { const n = e.children[1].children[1]; +e.dataset.index === this.currentIndex ? (n && n.classList.remove("hidden"), e.classList.add("activeSong"), e.classList.add("activeSong")) : (n && n.classList.add("hidden"), e.classList.remove("activeSong")) } }, endedSong: function () { this.isRepeat ? audioSong.play() : this.nextSong() }, prevSong: function () { this.isRandom ? this.randomSong() : --this.currentIndex < 0 && (this.currentIndex = this.songs.length - 1), this.loadSongByIndex(this.currentIndex), audioSong.play() }, nextSong: function () { this.isRandom ? this.randomSong() : ++this.currentIndex >= this.songs.length && (this.currentIndex = 0), this.loadSongByIndex(this.currentIndex), audioSong.play() }, loadSongByIndex: function (n) { songName.textContent = this.songs[n].name, songAuthor.textContent = this.songs[n].singer, songImage.style.backgroundImage = `url('${this.songs[n].image}')`, audioSong.src = this.songs[n].path, this.activeSong(), this.resetLikeButton() }, start: function () { this.defineProperties(), this.render(), this.handleEvent(), this.loadSongByIndex(this.currentIndex) } }; function secondToMinute(n) { return [n % 3600 / 60, n % 60].map(n => `0${Math.floor(n)}`.slice(-2)).join(":") } app.start();