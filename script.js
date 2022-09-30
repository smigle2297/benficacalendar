const sports = [
    { name: 'Andebol Feminino', id: 'andebolFem', url: 'https://calendar.google.com/calendar/ical/jq4a95bbv66uicne38l87g13h8%40group.calendar.google.com/public/basic.ics' },
    { name: 'Andebol Masculino', id: 'andebolMasc', url: 'https://calendar.google.com/calendar/ical/pq2fvub1qir56dalmslmrmoclg%40group.calendar.google.com/public/basic.ics' },
    { name: 'Basket Feminino', id: 'basketFem', url: 'https://calendar.google.com/calendar/ical/bptk1vcgqri38kggqtklhfknuk%40group.calendar.google.com/public/basic.ics' },
    { name: 'Basket Masculino', id: 'basketMasc', url: 'https://calendar.google.com/calendar/ical/4htlok2ad24h2d922qj1mg641k%40group.calendar.google.com/public/basic.ics' },
    { name: 'Futebol Feminino', id: 'futebolFem', url: 'https://calendar.google.com/calendar/ical/0mijopubvudd7jclan7ijre27s%40group.calendar.google.com/public/basic.ics' },
    { name: 'Futebol Masculino', id: 'futebolMasc', url: 'https://calendar.google.com/calendar/ical/0dgqroo8j9h4fih7er7u86rgfk%40group.calendar.google.com/public/basic.ics' },
    { name: 'Futsal Feminino', id: 'futsalFem', url: 'https://calendar.google.com/calendar/ical/obthiamtf6127ojekt8vsd2ov8%40group.calendar.google.com/public/basic.ics' },
    { name: 'Futsal Masculino', id: 'futsalMasc', url: 'https://calendar.google.com/calendar/ical/0jnsai96jg15iu7ngp8plr2vqk%40group.calendar.google.com/public/basic.ics' },
    { name: 'Hoquei Feminino', id: 'hoqueiFem', url: 'https://calendar.google.com/calendar/ical/klptfki9uhbeendijbq8c07uec%40group.calendar.google.com/public/basic.ics' },
    { name: 'Hoquei Masculino', id: 'hoqueiMasc', url: 'https://calendar.google.com/calendar/ical/tbraa0p80ipo06p0hbfl5hhj9o%40group.calendar.google.com/public/basic.ics' },
    { name: 'Voleibol Feminino', id: 'voleibolFem', url: 'https://calendar.google.com/calendar/ical/d99ve1utms5el7kif4ceqvkd6g%40group.calendar.google.com/public/basic.ics' },
    { name: 'Voleibol Masculino', id: 'voleibolMasc', url: 'https://calendar.google.com/calendar/ical/2708s0qncs38ba7e9pvo41njb8%40group.calendar.google.com/public/basic.ics' },
    { name: 'Rugby Masculino', id: 'rugbyMasc', url: 'https://calendar.google.com/calendar/ical/1ecr6021m8228m2spkpm1more8%40group.calendar.google.com/public/basic.ics' }
];

const sports_div = document.getElementById('sports_div');


function load() {
    let htmlString = "";

    sports.forEach(element => {
        htmlString += `<input type="radio" id="${element.id}" name="sport" value="${element.id}"><label for="${element.id}">${element.name}</label>`;
    });
    sports_div.innerHTML = htmlString;

    $('input[type=radio][name=sport]').on('change', function () {
        const url_div = document.getElementById('url_div');
        url_div.innerHTML = '<b>URL:</b> ' + sports.find(element => element.id == $(this).val()).url;
    });
}

load();