function callback(json) {

    console.log(json)
    document.getElementById('mainHeading').setAttribute('colspan', json.length);

    let tbody = document.getElementById('tableBody');
    let innerHtml = '';

    innerHtml += '<tr>'
    for (let plan in json.plan) {
        innerHtml += `<td id="planName">${plan}</td>`
    }
    innerHtml += '</tr>';

    innerHtml += '<tr>'
    for (let plan in json.plan) {
        innerHtml += `<td id="planCost">${json.plan[plan].price}</td>`
    }
    innerHtml += '</tr>';

    for (let i = 0; i < json.dataLength; i++) {
        innerHtml += '<tr>'
        for (let plan in json.plan) {
            innerHtml += `<td class="perk st${i%2}">${json.plan[plan].data[i]}</td>`
        }
        innerHtml += '</tr>';
    }

     innerHtml += '<tr>'
        for (let i = 0; i < json.length; i++) {
            innerHtml += `<td class="signUp"><a href="https://www.google.com">Sign Up</a></td>`
        }
        innerHtml += '</tr>';

    tbody.innerHTML = innerHtml;
}



fetch('./db.json').then(e => e.json()).then(callback);