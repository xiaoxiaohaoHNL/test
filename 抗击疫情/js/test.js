//promise封装ajax
class Http {

    //get请求
    get(url) {

        return new Promise((resolved, rejected) => {

            //创建ajax对象
            let xhr = new XMLHttpRequest();

            //监听ajax状态变化
            xhr.onreadystatechange = function () {

                if (this.readyState == 4 && this.status == 200) {
                    //凝固结果
                    resolved(this.responseText);
                }

            }

            //建立服务器连接
            xhr.open('GET', url, true);

            //发起请求
            xhr.send();

        })

    }

}

let http = new Http();
//发起get请求
//国内疫情
http.get('http://api.tianapi.com/txapi/ncov/index?key=05c9c231654fad19051ce388d3a14002').then(result => {
    domestic = JSON.parse(result);
    // 累计确诊
    let diagnosis = document.querySelector('.diagnosis');
    let diagnosis_span = document.querySelector('.diagnosis_span');
    diagnosis.innerHTML = domestic.newslist[0].desc.confirmedCount;
    diagnosis_span.innerHTML = '+' + domestic.newslist[0].desc.confirmedIncr;

    // 累计治愈
    let cure = document.querySelector('.cure');
    let cure_span = document.querySelector('.cure_span');
    cure.innerHTML = domestic.newslist[0].desc.curedCount;
    cure_span.innerHTML = '+' + domestic.newslist[0].desc.curedIncr;

    // 累计死亡
    let death = document.querySelector('.death');
    let death_span = document.querySelector('.death_span');
    death.innerHTML = domestic.newslist[0].desc.deadCount;
    death_span.innerHTML = '+' + domestic.newslist[0].desc.deadIncr;

    // 现有确诊
    let currentDiagnosis = document.querySelector('.currentDiagnosis');
    let currentDiagnosis_span = document.querySelector('.currentDiagnosis_span');
    currentDiagnosis.innerHTML = domestic.newslist[0].desc.currentConfirmedCount;
    currentDiagnosis_span.innerHTML = '+' + domestic.newslist[0].desc.currentConfirmedIncr;

    // 境外输入确诊
    let overseas = document.querySelector('.overseas');
    let overseas_span = document.querySelector('.overseas_span');
    overseas.innerHTML = domestic.newslist[0].desc.suspectedCount;
    overseas_span.innerHTML = '+' + domestic.newslist[0].desc.suspectedIncr;

    // 现有疑似
    let suspected = document.querySelector('.suspected');
    let suspected_span = document.querySelector('.suspected_span');
    suspected.innerHTML = domestic.newslist[0].desc.seriousCount;
    suspected_span.innerHTML = '+' + domestic.newslist[0].desc.suspectedIncr;

})

// 国内省事疫情
http.get('http://api.tianapi.com/txapi/ncovcity/index?key=5f918f6d2f9a783fa2bfe375cf8c3e2a').then(result => {
    domestic_city = JSON.parse(result);
    let domesticArr = domestic_city.newslist;
    let city_dl = document.querySelector('.city_dl');

    let cityArr = [];
    domesticArr.map((value) => {
        let dom = ` 
                    <dd>${value.provinceName}</dd>
                    <dd>${value.currentConfirmedCount}</dd>
                    <dd>${value.confirmedCount}</dd>
                    <dd>${value.deadCount}</dd>
                    <dd>${value.curedCount}</dd>
                    <span class="plus">+</span>`;
        let dd = document.createElement('dd');
        let dl = document.createElement('dl');
        let div = document.createElement('div');
        let div_ul = document.createElement('ul');
        dl.innerHTML = dom;
        dd.appendChild(dl);
        dl.className = 'domestic_dl';
        dd.className = 'city_dd';
        div.className = 'dropContent';
        div_ul.className = 'dropContent_ul';
        div.appendChild(div_ul);
        dd.appendChild(div);
        city_dl.appendChild(dd);
        cityArr.push(value)
        if (value.cities.length == 0) {
            let dom3 = `
                        <li>${value.provinceName}</li>
                        <li>${value.currentConfirmedCount}</li>
                        <li>${value.confirmedCount}</li>
                        <li>${value.deadCount}</li>
                        <li>${value.curedCount}</li>`;
            console.log(dom3);
            let ul = document.createElement('ul');
            let div_li = document.createElement('li');
            div_li.className = 'dropContent_li';
            ul.innerHTML = dom3;
            div_li.appendChild(ul);
            div_ul.appendChild(div_li);
        }
        value.cities.map(value => {
            let dom2 = `
                        <li>${value.cityName}</li>
                        <li>${value.currentConfirmedCount}</li>
                        <li>${value.confirmedCount}</li>
                        <li>${value.deadCount}</li>
                        <li>${value.curedCount}</li>`;
            let ul = document.createElement('ul');
            let div_li = document.createElement('li');
            div_li.className = 'dropContent_li';
            // if(this.length == 0){
            //     console.log('aaa');
            //     ul.innerHTML = dom;
            // }else{
            //     console.log('bbb');
            //     ul.innerHTML = dom2;
            // }
            ul.innerHTML = dom2;
            div_li.appendChild(ul);
            div_ul.appendChild(div_li);
        })

        let plus = document.querySelectorAll('.plus');
        let dropContent = document.querySelectorAll('.dropContent');
        let dlArr = document.querySelectorAll('.domestic_dl');
        dlArr.forEach(function (element, index) {
            let bool = true;
            element.onclick = function () {
                if (bool) {
                    plus[index].innerHTML = '-';
                    dropContent[index].style.display = 'block';
                    bool = false;
                } else {
                    plus[index].innerHTML = '+';
                    dropContent[index].style.display = 'none';
                    bool = true;
                }
            }
        })
    })
})

// 国外疫情
http.get('http://api.tianapi.com/txapi/ncov/index?key=5f918f6d2f9a783fa2bfe375cf8c3e2a').then(result => {
    abroad = JSON.parse(result);
    cumulativeSum = abroad.newslist[0].desc.foreignStatistics.confirmedCount;

    let abroadDiagnosis = document.querySelector('.abroadDiagnosis');
    let abroadDiagnosis_span = document.querySelector('.abroadDiagnosis_span');
    abroadDiagnosis.innerHTML = abroad.newslist[0].desc.foreignStatistics.confirmedCount;
    abroadDiagnosis_span.innerHTML = '+' + abroad.newslist[0].desc.foreignStatistics.confirmedIncr;

    let abroadCurrent = document.querySelector('.abroadCurrent ');
    let abroadCurrent_span = document.querySelector('.abroadCurrent_span');

    abroadCurrent.innerHTML = abroad.newslist[0].desc.foreignStatistics.currentConfirmedCount;
    abroadCurrent_span.innerHTML = abroad.newslist[0].desc.foreignStatistics.currentConfirmedIncr;

    let abroadCure = document.querySelector('.abroadCure ');
    let abroadCure_span = document.querySelector('.abroadCure_span');
    abroadCure.innerHTML = abroad.newslist[0].desc.foreignStatistics.curedCount;
    abroadCure_span.innerHTML = '+' + abroad.newslist[0].desc.foreignStatistics.curedIncr;

    let abroadDeath = document.querySelector('.abroadDeath');
    let abroadDeath_span = document.querySelector('.abroadDeath_span');
    abroadDeath.innerHTML = abroad.newslist[0].desc.foreignStatistics.deadCount;
    abroadDeath_span.innerHTML = '+' + abroad.newslist[0].desc.foreignStatistics.deadIncr;
})

// 国外城市疫情
http.get('http://api.tianapi.com/txapi/ncovabroad/index?key=5f918f6d2f9a783fa2bfe375cf8c3e2a').then(result => {
    abroadCity = JSON.parse(result);
    let abroad_dl = document.querySelector('.abroad_dl');

    let america = document.querySelector('.america');
    america.innerHTML = abroadCity.newslist[0].confirmedCount;

    let brazil = document.querySelector('.brazil');
    brazil.innerHTML = abroadCity.newslist[1].confirmedCount;

    let india = document.querySelector('.india');
    india.innerHTML = abroadCity.newslist[2].confirmedCount;

    let russia = document.querySelector('.russia');
    russia.innerHTML = abroadCity.newslist[2].confirmedCount;

    let stateArr = [];
    abroadCity.newslist.map(value => {
        if (stateArr.indexOf(value.continents) === -1) {
            stateArr.push(value.continents);
        }
    })
    let stateObj = {};
    abroadCity.newslist.map(value => {
        if (!stateObj[value.continents]) {
            stateObj[value.continents] = [];
        }
        stateObj[value.continents].push(value);
    })
    for (let key in stateObj) {
        stateObj[key].sort((a, b) => {
            return b.currentConfirmedCount - a.currentConfirmedCount;
        })
        let sum = grossValue(key);
        let text = `
                    <dd>${key}</dd>
                    <dd>${sum.currentValue}</dd>
                    <dd>${sum.cumulativeValue}</dd>
                    <dd>${sum.deathValue}</dd>
                    <dd>${sum.cureValue}</dd>
                    <span class="abroadPlus">+</span>`;
        let dd = document.createElement('dd');
        let dl = document.createElement('dl');
        let div = document.createElement('div');
        let div_ul = document.createElement('ul');
        dd.className = 'city_dd';
        div.className = 'dropContent abroadDropContent';
        div_ul.className = 'dropContent_ul';
        dl.className = 'abroadDl';
        dl.innerHTML = text;
        div.appendChild(div_ul);
        dd.appendChild(dl);
        dd.appendChild(div);
        abroad_dl.appendChild(dd);
        stateObj[key].map(v => {
            let text1 = `   
                            <li>${v.provinceName}</li>
                            <li>${v.currentConfirmedCount}</li>
                            <li>${v.confirmedCount}</li>
                            <li>${v.deadCount}</li>
                            <li>${v.curedCount}</li>`;
            let div_li = document.createElement('li');
            let ul = document.createElement('ul');
            ul.innerHTML = text1;
            div_li.className = 'dropContent_li';
            div_li.appendChild(ul)
            div_ul.appendChild(div_li);
        })
        let abroadPlus = document.querySelectorAll('.abroadPlus');
        let abroadDropContent = document.querySelectorAll('.abroadDropContent');
        let abroadDl = document.querySelectorAll('.abroadDl');
        abroadDl.forEach(function (element, index) {
            let bool = true;
            element.onclick = function () {
                if (bool) {
                    abroadPlus[index].innerHTML = '-';
                    abroadDropContent[index].style.display = 'block';
                    bool = false;
                } else {
                    abroadPlus[index].innerHTML = '+';
                    abroadDropContent[index].style.display = 'none';
                    bool = true;
                }
            }
        })
    }
    // 算总值
    function grossValue(str) {
        let currentValue = 0;
        let cumulativeValue = 0;
        let deathValue = 0;
        let cureValue = 0;
        stateObj[str].map(v => {
            currentValue += v.currentConfirmedCount;
            cumulativeValue += v.confirmedCount;
            deathValue += v.deadCount;
            cureValue += v.curedCount;
        })
        return { currentValue, cumulativeValue, deathValue, cureValue };
    }
})

// 全球疫情
http.get('http://api.tianapi.com/txapi/ncov/index?key=5f918f6d2f9a783fa2bfe375cf8c3e2a').then(result => {
    global = JSON.parse(result);
    console.log(global.newslist[0].desc.confirmedIncr);
    let globalCumulative = document.querySelector('.globalCumulative');
    let globalCumulative_span = document.querySelector('.globalCumulative_span');
    globalCumulative.innerHTML = global.newslist[0].desc.confirmedCount + global.newslist[0].desc.foreignStatistics.confirmedCount;
    globalCumulative_span.innerHTML = '+' + (global.newslist[0].desc.confirmedIncr + global.newslist[0].desc.foreignStatistics.confirmedIncr);

    let globalExisting = document.querySelector('.globalExisting');
    let globalExisting_span = document.querySelector('.globalExisting_span');
    globalExisting.innerHTML = global.newslist[0].desc.currentConfirmedCount + global.newslist[0].desc.foreignStatistics.currentConfirmedCount;
    globalExisting_span.innerHTML = (global.newslist[0].desc.currentConfirmedIncr + global.newslist[0].desc.foreignStatistics.currentConfirmedIncr);

    let globalCure = document.querySelector('.globalCure');
    let globalCure_span = document.querySelector('.globalCure_span');
    globalCure.innerHTML = global.newslist[0].desc.curedCount + global.newslist[0].desc.foreignStatistics.curedCount;
    globalCure_span.innerHTML = '+' + (global.newslist[0].desc.curedIncr + global.newslist[0].desc.foreignStatistics.curedIncr);

    let globalDeath = document.querySelector('.globalDeath');
    let globalDeath_span = document.querySelector('.globalDeath_span');
    globalDeath.innerHTML = global.newslist[0].desc.deadCount + global.newslist[0].desc.foreignStatistics.deadCount;
    globalDeath_span.innerHTML = '+' + (global.newslist[0].desc.deadIncr + global.newslist[0].desc.foreignStatistics.deadIncr);
})


// 获取元素
let top_div = document.querySelectorAll('.top_div');
let btn_div = document.querySelectorAll('.box_data');

// 给头部添加点击事件
top_div.forEach(function (element, index) {
    console.log(index)
    element.onclick = function () {
        for (let i = 0; i < top_div.length; i++) {
            top_div[i].classList.remove('active');
            btn_div[i].classList.remove('data_active');
        }
        this.classList.add('active');
        btn_div[index].classList.add('data_active')
    }

})
// 给下拉添加点击事件


