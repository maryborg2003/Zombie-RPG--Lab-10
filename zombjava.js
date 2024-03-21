fetch('package.json')
  .then(res => res.json())
  .then(data => {
    const storyText = data.story.text;
    const storyContainer = document.getElementById('storyHome');
    const wrappedContent = document.createElement('div');
    wrappedContent.textContent = storyText;
    storyContainer.appendChild(wrappedContent);
  });

  fetch('package.json')
  .then(res => res.json())
  .then(data => {
    const storyText = data.borgname.text;
    const storyContainer = document.getElementById('mbname');
    const wrappedContent = document.createElement('div');
    wrappedContent.textContent = storyText;
    storyContainer.appendChild(wrappedContent);
  });