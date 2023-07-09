let hadith = [
  {
    id: 1,
    matnAr: 'إِيَّاكُمْ وَالظَّنَّ, فَإِنَّ اَلظَّنَّ أَكْذَبُ اَلْحَدِيثِ',
    matnEn: 'Beware of suspicion for it is the most untruthful type of speech.',
    resource: '(Bukhari and Muslim)',
  },
  {
    id: 2,
    matnAr: `:كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ، ثَقِيلَتَانِ فِي الْمِيزَانِ، حَبِيبَتَانِ إِلَى الرَّحْمَنِ
    سُبْحَانَ اللهِ وَبِحَمْدِهِ، سُبْحانَ اللهِ الْعَظِيمِ`,
    matnEn: `There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa bihamdi, SubhanAllahi al-azeem -Glorified is Allah and praised is He, Glorified is Allah the Most Great-`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 3,
    matnAr: `
    جَاءَ رَجُلٌ إِلَى رَسُولِ اللهِ صلى الله عليه وسلم فَقَالَ يَا رَسُولَ اللهِ مَنْ أَحَقُّ بِحُسْنِ صَحَابَتِي قَالَ ‏”‏ أُمُّكَ ‏”‏‏.‏ قَالَ ثُمَّ مَنْ قَالَ ‏”‏ أُمُّكَ ‏”‏‏.‏ قَالَ ثُمَّ مَنْ قَالَ ‏”‏ أُمُّكَ ‏”‏‏.‏ قَالَ ثُمَّ مَنْ قَالَ ‏”‏ ثُمَّ أَبُوكَ‏”.‏‏‏`,
    matnEn: `A man came to the Messenger of Allah (ﷺ) and said, “O Messenger of Allah! Who among the people has the most right to my good company?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Your mother.” The man said, “Then who?” He replied, “Then your father.”`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 4,
    matnAr: `إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مَا يَتَبَيَّنُ فِيهَا، يَزِلُّ بِهَا فِي النَّارِ أَبْعَدَ مِمَّا بَيْنَ الْمَشْرِقِ وَ الْمَغْرِبِ`,
    matnEn: `A slave [of Allah] may utter a word without giving it much thought by which he slips into the fire a distance further than that between east and west.`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 5,
    matnAr: `ِإنَّ اللَّهَ يَغَارُ وَغَيْرَةُ اللهِ أَنْ يَأْتِيَ الْمُؤْمِنُ مَا حَرَّمَ اللهُ`,
    matnEn: `Allah becomes jealous [of His honor] and that is when the believer does something He has forbidden.`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 6,
    matnAr: `السَّاعِي عَلَى الأَرْمَلَةِ وَالْمِسْكِينِ كَالْمُجَاهِدِ فِي سَبِيلِ اللَّهِ – وَأَحْسِبُهُ قَالَ – وَكَالْقَائِمِ لاَ يَفْتُرُ وَكَالصَّائِمِ لاَ يُفْطِرُ`,
    matnEn: `The one who looks after a widow or poor person is like the one who strives in the cause of Allah – and I think he also said – he is like the one who continuously stands for prayer without slacking and fasts without breaking.`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 7,
    matnAr: `مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حُزْنٍ وَلاَ أَذًى وَلاَ غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ`,
    matnEn: `No fatigue, illness, worry, sorrow, harm, grief, or even the prick of a thorn afflicts a Muslim except that Allah expiates some of his sins by it.`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 8,
    matnAr: `حُجِبَتِ النَّارُ بِالشَّهَوَاتِ، وَحُجِبَتِ الْجَنَّةُ بِالْمَكَارِهِ`,
    matnEn: `The fire is surrounded by [unlawful] desires and paradise by difficulties.`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 9,
    matnAr: `النَّبِي صلى الله عليه وسلم رَأَى رَجُلاً لَمْ يَغْسِلْ عَقِبَيْهِ فَقَالَ:‏ “وَيْلٌ لِلأَعْقَابِ مِنَ النَّارِ” ‏`,
    matnEn: `The Prophet (ﷺ) saw a man who did not wash his heel [during ablution], so he (ﷺ) said, “Save the heels from the fire!”`,
    resource: `(Bukhari and Muslim)`,
  },
  {
    id: 10,
    matnAr: `لَلَّهُ أَشَدُّ فَرَحًا بِتَوْبَةِ أَحَدِكُمْ مِنْ أَحَدِكُمْ بِضَالَّتِهِ إِذَا وَجَدَهَا`,
    matnEn: `Allah is more joyous with the repentance of one of you than you are when you find your lost animal.`,
    resource: `(Muslim)`,
  },
];

let hadithAr = document.getElementById('hadith-matn-ar');
let hadithEn = document.getElementById('hadith-matn-en');
let hadithResource = document.getElementById('hadith-resource');

// for (let i = 0; i <= hadith.length; i++) {
//   console.log(hadith[i]);
// }

function rotate() {
  let count = generateRandomNums();
  console.log('id: >>>', hadith[count].id);

  hadithAr.innerHTML = hadith[count].matnAr;
  hadithEn.innerText = hadith[count].matnEn;
  hadithResource.innerText = hadith[count].resource;
}

function generateRandomNums() {
  let randomNum = Math.floor(Math.random() * hadith.length);
  let currentNum = randomNum;

  if (randomNum != currentNum) {
    return randomNum;
  } else {
    randomNum = Math.floor(Math.random() * hadith.length);
  }

  console.log(randomNum);
  console.log(currentNum);
  return randomNum;
}

let x = generateRandomNums();
console.log(x);
