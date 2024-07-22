
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
    .then(data => data.forEach(pos => {

        var Api = document.getElementById('Api');
        var postData = document.createElement('div');
        postData.classList.add('post', 'col-md-6');
        postData.style.backgroundColor = '#f8f9fa';
        postData.style.borderRadius = '10px';
        postData.style.padding = '20px';
        postData.style.marginBottom = '20px';

        postData.innerHTML = `
        <div class="pb-2 mb-4" style="border-bottom: 2px dashed blue;">
            <h2 style="color: #007bff; font-family: Arial, sans-serif;">${pos.title}</h2>
            <p style="font-size: 16px; line-height: 1.5; color: #343a40;">${pos.body}</p>
        </div>
            `;
        Api.appendChild(postData);
    }));

