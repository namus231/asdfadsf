// Firebase 설정 - 자신의 설정으로 바꾸세요
const firebaseConfig = {
  apiKey: "AIzaSyBKDLlC5UYASF9VszmKaPrqX2RzS4zT9lI",
  authDomain: "abdsfsdf-bde00.firebaseapp.com",
  databaseURL: "https://abdsfsdf-bde00-default-rtdb.firebaseio.com",
  projectId: "abdsfsdf-bde00",
  storageBucket: "abdsfsdf-bde00.firebasestorage.app",
  messagingSenderId: "118464728442",
  appId: "1:118464728442:web:427646bb0c4f4e10521ac3"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function sendMessage() {
  const message = document.getElementById('messageInput').value;
  if (message.trim()) {
    db.ref('messages').push({
      text: message,
      timestamp: Date.now()
    });
    document.getElementById('messageInput').value = '';
  }
}

db.ref('messages').on('child_added', snapshot => {
  const msg = snapshot.val();
  const messageElement = document.createElement('div');
  messageElement.textContent = msg.text;
  document.getElementById('messages').appendChild(messageElement);
});
