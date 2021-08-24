// var firebaseConfig = {
//   apiKey: "AIzaSyCwMUfWBfzoZJEF8Hb6pGE_tqww9_yd7dM",
//   authDomain: "torahcourses.firebaseapp.com",
//   projectId: "torahcourses",
//   storageBucket: "torahcourses.appspot.com",
//   messagingSenderId: "574856650414",
//   appId: "1:574856650414:web:f694ececb79dc05e58d73f",
//   measurementId: "G-0JF8HFD6GT"
// };
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// firebase.firestore().collection('audio').where('artist', '==', 'Mendel Presscott').onSnapshot(function (querySnapshot) {
//   let docs = querySnapshot.docs;
//   let container = document.querySelector("#myULpresscott"), strArticles = "";

//   for (let doc of docs) {
//     if (doc.data().cat == 'parsha') {
//       strArticles += '<li><div class="cat-background"><time class="cat">' + doc.data().cat + '</time></div><div class="cont"><h3 id="title">' + doc.data().title + '</h3><time id="artist">By: ' + doc.data().artist + '</time></div><div class="description"><p>' + doc.data().description + '</p><div class="tags">' + doc.data().tags + '</div></div><audio controls class="audio"><source id="url" src="' + doc.data().url + '"></audio></li>'
//       container.innerHTML = strArticles;
//     }
//   }

//   for (let doc of docs) {
//     if (doc.data().cat == 'holiday' || doc.data().cat == 'holidays') {
//       strArticles += '<li><div class="cat-background"><time class="cat">' + doc.data().cat + '</time></div><div class="cont"><h3 id="title">' + doc.data().title + '</h3><time id="artist">By: ' + doc.data().artist + '</time></div><div class="description"><p>' + doc.data().description + '</p><div class="tags">' + doc.data().tags + '</div></div><audio controls class="audio"><source id="url" src="' + doc.data().url + '"></audio></li>'
//       container.innerHTML = strArticles;
//     }

//   }

//   for (let doc of docs) {
//     if (doc.data().cat == 'history') {
//       strArticles += '<li><div class="cat-background"><time class="cat">' + doc.data().cat + '</time></div><div class="cont"><h3 id="title">' + doc.data().title + '</h3><time id="artist">By: ' + doc.data().artist + '</time></div><div class="description"><p>' + doc.data().description + '</p><div class="tags">' + doc.data().tags + '</div></div><audio controls class="audio"><source id="url" src="' + doc.data().url + '"></audio></li>'
//       container.innerHTML = strArticles;
//     }

//   }

//   for (let doc of docs) {
//     if (doc.data().cat == 'halacha') {
//       strArticles += '<li><div class="cat-background"><time class="cat">' + doc.data().cat + '</time></div><div class="cont"><h3 id="title">' + doc.data().title + '</h3><time id="artist">By: ' + doc.data().artist + '</time></div><div class="description"><p>' + doc.data().description + '</p><div class="tags">' + doc.data().tags + '</div></div><audio controls class="audio"><source id="url" src="' + doc.data().url + '"></audio></li>'
//       container.innerHTML = strArticles;
//     }

//   }

// }
// );
