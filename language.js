
var multilineString =

console.log(multilineString);


var arrLang = {
  'en': {
    'home': 'Home',
    'gallery': 'My Gallery',
    'about': 'About Me',
    'contact': 'contact',
    'art':'My Gallery',
    'more': 'MORE PICTURES ',
    'hi': 'HELLO EVERYONE',
    'eka':'MY NAME IS EKATERINE MCHEDLISHVILI',
    "love":"I LOVE PAINTING, TRAVELING, PLAYING PIANO.",
     "am":"I AM GOING TO BECOME AN ARTIST ",
     
     'me': ' I LIVE IN TBILISI, GEORGIA. I AM 14 YEARS OLD.     ',
     'welcome':'Welcome to my gallery',
     'name': "Full Name",
     'mail': "Email Address",
     'subj': "Subject",
     'mess': "Message",
     "send": "send Message",
     "coun": "Georgia",
     "city": "Tbilisi",
     "text": "A picture is a poem without words",
     "location": "Location",
     "information":"Information",
     "follow": "Follow me"
   },
  'ge': {
    'home': 'მთავარი',
    'gallery': 'გალერეა',
    'about': 'ჩემ შესახებ',
    'contact': 'კონტაქტები',
    'art':'ჩემი ნახატები',
    'more': 'ᲛᲔᲢᲘ ᲡᲣᲠᲐᲗᲔᲑᲘ',
    'hi': 'გამარჯობა ყველას',
    'eka':'მე მქვია ეკატერინე მჭედლიშვილი',
    "love":"მე მიყვარს ხატვა, მოგზაურობა, პიანინოზე დაკვრა. ",
    "am":"მე ვაპირებ გავხდე მხატვარი ",
   
    'me': ' ვცხოვრობ თბილისში, საქართველო. მე ვარ 14 წლის. ',
    'welcome':'მოგესალმებით ჩემს გალერეაში',
    'lets': 'ერთად შევქმნათ სილამაზე',
    'name': "სახელი",
    'mail': 'მეილი',
    'subj': "საგანი",
    'mess': "შეტყობინება",
    "send": "შეტყობინების გაგზავნა",
    "coun": "საქართველო",
    "city": "თბილისი",
    "text": "სურათი არის ლექსი სიტყვების გარეშე",
    "location": "ადგილ მდებარეობა",
    "information":"ინფორმაცია",
    "follow": "გამომყევი"
  }

}

$(function() {
  $('.translate').click(function() {
    var lang = $(this).attr('id');

    $('.lang').each(function(index, item) {
      $(this).text(arrLang[lang][$(this).attr('key')]);
    });
  });
});





