const promptDiv = document.querySelector('.prompt');
const resultUl = document.querySelector('.result ul');
const copyBtn = document.querySelector('#copy-btn');
let selectedTags = [];

promptDiv.addEventListener('click', (event) => {
  if (event.target.tagName === 'P') {
    const selectedTag = event.target.innerText.trim();
    const index = selectedTags.indexOf(selectedTag);

    if (index === -1) {
      if (selectedTags.length === 5) {
        promptDiv.querySelectorAll('p').forEach((p) => {
          if (selectedTags.indexOf(p.innerText.trim()) === -1) {
            p.classList.remove('selected');
          }
        });
        selectedTags = [];
      }
      selectedTags.push(selectedTag);
      event.target.classList.add('selected');
    } else {
      selectedTags.splice(index, 1);
      event.target.classList.remove('selected');
    }
  }
});

copyBtn.addEventListener('click', () => {
  const tagsText = selectedTags.join(', ');
  if (tagsText) {
    navigator.clipboard.writeText(tagsText).then(() => {
      alert(`${tagsText}가 클립보드에 복사되었습니다!`);
    });
  }
  
  selectedTags = [];
  promptDiv.querySelectorAll('p').forEach((p) => {
    p.classList.remove('selected');
  });
  
  resultUl.innerHTML = '';
});
