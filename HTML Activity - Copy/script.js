"use strict";

function loadContent(topic) {
    let content = '';
    
    if (topic === 'topic1') {
      content = '<h2>Developers</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni, mollitia, fugit assumenda facilis voluptatum optio laborum corporis, suscipit quasi minus et alias explicabo sunt! Expedita enim voluptas unde ratione?</p>';
    } else if (topic === 'topic2') {
      content = '<h2>How to Test</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni, mollitia, fugit assumenda facilis voluptatum optio laborum corporis, suscipit quasi minus et alias explicabo sunt! Expedita enim voluptas unde ratione?</p>';
    } else if (topic === 'topic3') {
      content = '<h2>Links</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni, mollitia, fugit assumenda facilis voluptatum optio laborum corporis, suscipit quasi minus et alias explicabo sunt! Expedita enim voluptas unde ratione?</p>';
    } else if (topic === 'topic4') {
      content = '<h2>About the Game</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni, mollitia, fugit assumenda facilis voluptatum optio laborum corporis, suscipit quasi minus et alias explicabo sunt! Expedita enim voluptas unde ratione?</p>';
    } else if (topic === 'topic5') {
      content = '<h2>Contact Us</h2><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora magni, mollitia, fugit assumenda facilis voluptatum optio laborum corporis, suscipit quasi minus et alias explicabo sunt! Expedita enim voluptas unde ratione?</p>';
    }
    
    document.getElementById('content').innerHTML = content;
  }


  