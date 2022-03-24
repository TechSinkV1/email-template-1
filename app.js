const body = document.body;
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
    if(body.id === ''){
        body.id = 'window-view-body'
        toggleBtn.innerText = `Click to see mobile view`
    }else{
        body.id = ''
        toggleBtn.innerText = `Click to see window view`
    }
})
